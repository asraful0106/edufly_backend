
const now = () => new Date();
const SOD = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };

// --- Helpers ---
function hydrateResultRow(row) {
    const latestApproval = row.approvals?.[0] || null;
    let effective = "draft";
    if (latestApproval) effective = latestApproval.status;     // pending | approved | rejected
    if (row.isPublished) effective = "approved";
    return { ...row, workflow: { status: effective, latestApproval } };
}

async function getClassCourses(class_id) {
    const links = await prisma.classCourses.findMany({ where: { class_id } });
    if (!links.length) return [];
    const courses = await prisma.courses.findMany({
        where: { id: { in: links.map(l => l.course_id) } },
        select: { id: true, title: true, course_code: true }
    });
    const map = Object.fromEntries(courses.map(c => [c.id, c]));
    return links.map(l => map[l.course_id]).filter(Boolean);
}

/** Permission for teacher to enter marks for a (section, course):
 *  - Allowed if teacher is homeroom teacher of the section OR section's class
 *  - OR there is SectionCourseTeachers entry (section_id, course_id, teacher_id)
 */
async function assertPermission({ section_id, course_id, teacher_id }) {
    if (!section_id || !course_id || !teacher_id)
        throw Object.assign(new Error("section_id, course_id, teacher_id required"), { code: 400 });

    const section = await prisma.sections.findUnique({
        where: { id: section_id },
        include: { class: true }
    });
    if (!section) throw Object.assign(new Error("Section not found"), { code: 404 });

    const isHomeroom =
        section.homeroom_teacher_id === teacher_id ||
        (section.class && section.class.homeroom_teacher_id === teacher_id);

    if (isHomeroom) {
        // ensure course belongs to the class via ClassCourses
        const ok = await prisma.classCourses.findFirst({
            where: { class_id: section.class_id, course_id }
        });
        if (!ok) throw Object.assign(new Error("Course is not in this class"), { code: 403 });
        return { class_id: section.class_id, section_id, course_id };
    }

    const assigned = await prisma.sectionCourseTeachers.findFirst({
        where: { section_id, course_id, teacher_id }
    });
    if (!assigned) {
        throw Object.assign(new Error("Forbidden: not homeroom or assigned teacher for this section/subject"), { code: 403 });
    }
    return { class_id: section.class_id, section_id, course_id };
}

// ------------------ Lookups ------------------
const getLookup = async (req, res) => {
    try {
        const { institution_id, teacher_id } = req.query;
        if (!institution_id || !teacher_id)
            return res.status(400).json({ message: "institution_id, teacher_id required" });

        // Sections where teacher is homeroom
        const homeroomSections = await prisma.sections.findMany({
            where: { homeroom_teacher_id: teacher_id },
            select: { id: true, section_name: true, class_id: true }
        });
        // Sections where teacher is assigned to at least one course
        const scts = await prisma.sectionCourseTeachers.findMany({
            where: { teacher_id },
            select: { section_id: true, course_id: true }
        });
        const assignedSectionIds = [...new Set(scts.map(x => x.section_id))];
        const assignedSections = assignedSectionIds.length
            ? await prisma.sections.findMany({
                where: { id: { in: assignedSectionIds } },
                select: { id: true, section_name: true, class_id: true }
            })
            : [];

        // Classes for those sections (to fetch courses via ClassCourses)
        const classIds = [...new Set(
            homeroomSections.map(s => s.class_id).concat(assignedSections.map(s => s.class_id))
        )];

        const classCourses = classIds.length
            ? await prisma.classCourses.findMany({ where: { class_id: { in: classIds } } })
            : [];
        const courseIds = [
            ...new Set(classCourses.map(cc => cc.course_id).concat(scts.map(x => x.course_id)))
        ];
        const courses = courseIds.length
            ? await prisma.courses.findMany({
                where: { id: { in: courseIds } },
                select: { id: true, title: true, course_code: true }
            })
            : [];
        const courseMap = Object.fromEntries(courses.map(c => [c.id, c]));
        const classCourseMap = classCourses.reduce((acc, x) => {
            (acc[x.class_id] ||= []).push(courseMap[x.course_id]);
            return acc;
        }, {});
        const assignedCoursesBySection = scts.reduce((acc, x) => {
            (acc[x.section_id] ||= []).push(courseMap[x.course_id]);
            return acc;
        }, {});

        const examTypes = await prisma.examTypes.findMany({
            where: { institution_id },
            select: { id: true, name: true },
            orderBy: { name: "asc" }
        });

        res.json({
            status: "success",
            data: {
                homeroomSections: homeroomSections.map(s => ({
                    ...s,
                    courses: (classCourseMap[s.class_id] || []).filter(Boolean)
                })),
                assignedSections: assignedSections.map(s => ({
                    ...s,
                    courses: (assignedCoursesBySection[s.id] || []).filter(Boolean)
                })),
                examTypes
            }
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
// Mark segments (per course)
const getSegment = async (req, res) => {
    try {
        const { course_id } = req.query;
        if (!course_id) return res.status(400).json({ message: "course_id required" });
        const segments = await prisma.courseMarkSegments.findMany({
            where: { course_id },
            orderBy: [{ isMainResult: "desc" }, { name: "asc" }]
        });
        res.json({ status: "success", data: segments });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
// ------------------ Roster + existing marks ------------------
const getRoster = async (req, res) => {
    try {
        const { institution_id, teacher_id, section_id, course_id, examTypeId, mark_segment_id } = req.query;
        if (!institution_id || !teacher_id) return res.status(400).json({ message: "institution_id, teacher_id required" });
        if (!section_id || !course_id || !examTypeId || !mark_segment_id)
            return res.status(400).json({ message: "section_id, course_id, examTypeId, mark_segment_id required" });

        const scope = await assertPermission({ section_id, course_id, teacher_id });

        const [students, existing, segment] = await Promise.all([
            prisma.students.findMany({
                where: { institution_id, section_id: scope.section_id },
                select: { id: true, name_eng: true, student_id: true, email: true, class_roll: true },
                orderBy: [{ class_roll: "asc" }, { name_eng: "asc" }]
            }),
            prisma.results.findMany({
                where: {
                    institution_id,
                    section_id: scope.section_id,
                    course_id: scope.course_id,
                    examTypeId,
                    mark_segment_id
                },
                include: {
                    approvals: { orderBy: { requested_at: "desc" }, take: 1 }
                }
            }),
            prisma.courseMarkSegments.findUnique({ where: { id: mark_segment_id } })
        ]);

        const existingMap = new Map(existing.map(r => [r.student_id, hydrateResultRow(r)]));
        const roster = students.map(s => ({ student: s, result: existingMap.get(s.id) || null }));

        res.json({
            status: "success",
            data: { ...scope, examTypeId, mark_segment_id, segment, roster }
        });
    } catch (e) {
        res.status(e.code || 500).json({ message: e.message });
    }
}
// ------------------ Save Draft ------------------
const save = async(req, res) => {
    try {
        const { institution_id, teacher_id, section_id, course_id, examTypeId, mark_segment_id, items } = req.body;
        if (!institution_id || !teacher_id || !section_id || !course_id || !examTypeId || !mark_segment_id)
            return res.status(400).json({ message: "institution_id, teacher_id, section_id, course_id, examTypeId, mark_segment_id required" });
        if (!Array.isArray(items) || !items.length) return res.status(400).json({ message: "items[] required" });

        const scope = await assertPermission({ section_id, course_id, teacher_id });
        const segment = await prisma.courseMarkSegments.findUnique({ where: { id: mark_segment_id } });
        if (!segment) return res.status(404).json({ message: "Mark segment not found" });

        // Validate marks
        for (const it of items) {
            if (it.marks == null || isNaN(Number(it.marks))) {
                return res.status(400).json({ message: "marks must be numeric" });
            }
            if (it.marks < 0 || it.marks > segment.max_marks) {
                return res.status(400).json({ message: `marks must be between 0 and ${segment.max_marks}` });
            }
        }

        await prisma.$transaction(async (tx) => {
            for (const it of items) {
                const existing = await tx.results.findFirst({
                    where: {
                        institution_id,
                        student_id: it.student_id,
                        section_id: scope.section_id,
                        course_id: scope.course_id,
                        examTypeId,
                        mark_segment_id
                    }
                });

                if (existing?.isPublished) {
                    // Do not allow editing after publish
                    throw Object.assign(new Error("Cannot edit published result"), { code: 409 });
                }

                if (existing) {
                    await tx.results.update({
                        where: { id: existing.id },
                        data: {
                            marks: Number(it.marks),
                            remarks: it.remarks || null,
                            teacher_id,
                            isPublished: false,
                            published_at: null
                        }
                    });
                } else {
                    await tx.results.create({
                        data: {
                            institution_id,
                            examTypeId,
                            course_id: scope.course_id,
                            section_id: scope.section_id,
                            student_id: it.student_id,
                            teacher_id,
                            mark_segment_id,
                            marks: Number(it.marks),
                            remarks: it.remarks || null,
                            isPublished: false,
                            published_at: null
                        }
                    });
                }
            }
        });

        res.json({ status: "success" });
    } catch (e) {
        res.status(e.code || 500).json({ message: e.message });
    }
}
// ------------------ Submit for Publication ------------------
const submit = async(req, res) => {
    try {
        const { institution_id, teacher_id, section_id, course_id, examTypeId, mark_segment_id, items, remarks } = req.body;
        if (!institution_id || !teacher_id || !section_id || !course_id || !examTypeId || !mark_segment_id)
            return res.status(400).json({ message: "institution_id, teacher_id, section_id, course_id, examTypeId, mark_segment_id required" });
        if (!Array.isArray(items) || !items.length) return res.status(400).json({ message: "items[] required" });

        const scope = await assertPermission({ section_id, course_id, teacher_id });
        const segment = await prisma.courseMarkSegments.findUnique({ where: { id: mark_segment_id } });
        if (!segment) return res.status(404).json({ message: "Mark segment not found" });

        await prisma.$transaction(async (tx) => {
            // Upsert as draft first
            for (const it of items) {
                if (it.marks == null || isNaN(Number(it.marks)) || it.marks < 0 || it.marks > segment.max_marks) {
                    throw Object.assign(new Error(`Invalid marks for student ${it.student_id}`), { code: 400 });
                }
                const existing = await tx.results.findFirst({
                    where: {
                        institution_id,
                        student_id: it.student_id,
                        section_id: scope.section_id,
                        course_id: scope.course_id,
                        examTypeId,
                        mark_segment_id
                    },
                    include: { approvals: { orderBy: { requested_at: "desc" }, take: 1 } }
                });

                if (existing?.isPublished) {
                    // Already approved/published
                    continue; // skip creating another approval (or you could error)
                }

                let resultId = existing?.id;
                if (existing) {
                    await tx.results.update({
                        where: { id: existing.id },
                        data: {
                            marks: Number(it.marks),
                            remarks: it.remarks || null,
                            teacher_id,
                            isPublished: false,
                            published_at: null
                        }
                    });
                } else {
                    const created = await tx.results.create({
                        data: {
                            institution_id,
                            examTypeId,
                            course_id: scope.course_id,
                            section_id: scope.section_id,
                            student_id: it.student_id,
                            teacher_id,
                            mark_segment_id,
                            marks: Number(it.marks),
                            remarks: it.remarks || null,
                            isPublished: false,
                            published_at: null
                        }
                    });
                    resultId = created.id;
                }

                // Create approval row if latest isn't pending
                if (!existing?.approvals?.[0] || existing.approvals[0].status !== "pending") {
                    await tx.resultApprovals.create({
                        data: {
                            result_id: resultId,
                            institution_id,
                            status: "pending",
                            approved_at: null,
                            remarks: remarks || null
                        }
                    });
                }
            }
        });

        res.json({ status: "success", message: "Submitted for approval" });
    } catch (e) {
        res.status(e.code || 500).json({ message: e.message });
    }
}
// ------------------ Teacher's own list ------------------
const getMine = async (req, res) => {
    try {
        const { teacher_id, institution_id, status = "all", skip = "0", take = "50" } = req.query;
        if (!teacher_id || !institution_id) return res.status(400).json({ message: "teacher_id, institution_id required" });

        const rows = await prisma.results.findMany({
            where: { teacher_id, institution_id },
            include: {
                examType: { select: { id: true, name: true } },
                course: { select: { id: true, title: true, course_code: true } },
                section: {
                    select: { id: true, section_name: true, class: { select: { id: true, title: true, batch_code: true } } }
                },
                student: { select: { id: true, name_eng: true, student_id: true } },
                markSegment: { select: { id: true, name: true, max_marks: true, isMainResult: true } },
                approvals: { orderBy: { requested_at: "desc" }, take: 1 }
            },
            orderBy: [{ created_at: "desc" }],
            skip: Number(skip),
            take: Number(take)
        });

        let data = rows.map(hydrateResultRow);
        if (status !== "all") data = data.filter(r => r.workflow.status === status);

        res.json({ status: "success", total: data.length, data });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const teacherReultController = {
    getLookup,
    getSegment,
    getRoster,
    save,
    submit,
    getMine
}