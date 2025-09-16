import prisma from "../database/db.config.js";

// ---------- helpers ----------
const SOD = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const EOD = (d) => { const x = new Date(d); x.setHours(23, 59, 59, 999); return x; };
const today = () => { const x = new Date(); x.setHours(0, 0, 0, 0); return x; };

async function getClassCourses(class_id) {
    const ccs = await prisma.classCourses.findMany({ where: { class_id } });
    if (!ccs.length) return [];
    const courses = await prisma.courses.findMany({ where: { id: { in: ccs.map(x => x.course_id) } } });
    const map = Object.fromEntries(courses.map(c => [c.id, c]));
    return ccs.map(cc => map[cc.course_id]).filter(Boolean);
}

async function getSectionAssignedCourses(section_id, teacher_id) {
    const scts = await prisma.sectionCourseTeachers.findMany({ where: { section_id, teacher_id } });
    if (!scts.length) return [];
    const courses = await prisma.courses.findMany({ where: { id: { in: scts.map(x => x.course_id) } } });
    const map = Object.fromEntries(courses.map(c => [c.id, c]));
    return scts.map(sct => map[sct.course_id]).filter(Boolean);
}

// Permission rules
async function assertPermission({ class_id, section_id, course_id, teacher_id }) {
    if (!teacher_id) throw Object.assign(new Error("teacher_id required"), { code: 400 });

    if (section_id) {
        const sec = await prisma.sections.findUnique({ where: { id: section_id }, include: { class: true } });
        if (!sec) throw Object.assign(new Error("Section not found"), { code: 404 });
        if (!course_id) throw Object.assign(new Error("course_id is required for section scope"), { code: 400 });

        const isHomeroom =
            sec.homeroom_teacher_id === teacher_id ||
            (sec.class && sec.class.homeroom_teacher_id === teacher_id);

        if (isHomeroom) {
            const allowed = await prisma.classCourses.findFirst({ where: { class_id: sec.class_id, course_id } });
            if (!allowed) throw Object.assign(new Error("Course not in this class"), { code: 403 });
            return { class_id: sec.class_id, section_id: sec.id, course_id };
        }
        const assigned = await prisma.sectionCourseTeachers.findFirst({ where: { section_id, course_id, teacher_id } });
        if (!assigned) throw Object.assign(new Error("Forbidden: not homeroom or course teacher for this section/course"), { code: 403 });
        return { class_id: sec.class_id, section_id: sec.id, course_id };
    }

    if (class_id) {
        const cls = await prisma.classes.findUnique({ where: { id: class_id } });
        if (!cls) throw Object.assign(new Error("Class not found"), { code: 404 });
        if (cls.homeroom_teacher_id !== teacher_id)
            throw Object.assign(new Error("Forbidden: not homeroom teacher for this class"), { code: 403 });
        if (!course_id) throw Object.assign(new Error("course_id is required for class scope"), { code: 400 });
        const inClass = await prisma.classCourses.findFirst({ where: { class_id, course_id } });
        if (!inClass) throw Object.assign(new Error("Course not in this class"), { code: 403 });
        return { class_id, section_id: null, course_id };
    }

    throw Object.assign(new Error("Provide class_id or section_id"), { code: 400 });
}

// ---------- lookups for a teacher ----------
const getLookup = async (req, res) => {
    try {
        const { institution_id, teacher_id } = req.query;
        if (!institution_id || !teacher_id)
            return res.status(400).json({ message: "institution_id and teacher_id required" });

        const classes = await prisma.classes.findMany({
            where: { institution_id, homeroom_teacher_id: teacher_id },
            select: { id: true, title: true, batch_code: true }
        });

        const sectionsHome = await prisma.sections.findMany({
            where: { homeroom_teacher_id: teacher_id },
            select: { id: true, section_name: true, class_id: true }
        });

        const scts = await prisma.sectionCourseTeachers.findMany({
            where: { teacher_id },
            select: { section_id: true, course_id: true }
        });
        const assignedSectionIds = [...new Set(scts.map(x => x.section_id))];
        const sectionsAssigned = assignedSectionIds.length
            ? await prisma.sections.findMany({
                where: { id: { in: assignedSectionIds } },
                select: { id: true, section_name: true, class_id: true }
            })
            : [];

        const cc = await prisma.classCourses.findMany({
            where: { class_id: { in: classes.map(c => c.id).concat(sectionsHome.map(s => s.class_id), sectionsAssigned.map(s => s.class_id)) } }
        });
        const courseIds = [...new Set(cc.map(x => x.course_id).concat(scts.map(x => x.course_id)))];
        const courses = courseIds.length ? await prisma.courses.findMany({ where: { id: { in: courseIds } } }) : [];
        const courseMap = Object.fromEntries(courses.map(c => [c.id, c]));

        const classCoursesMap = cc.reduce((acc, x) => {
            (acc[x.class_id] ||= []).push(courseMap[x.course_id]);
            return acc;
        }, {});
        const assignedCoursesBySection = scts.reduce((acc, x) => {
            (acc[x.section_id] ||= []).push(courseMap[x.course_id]);
            return acc;
        }, {});

        res.json({
            status: "success",
            data: {
                classes: classes.map(c => ({ ...c, courses: (classCoursesMap[c.id] || []).filter(Boolean) })),
                sectionsHomeroom: sectionsHome.map(s => ({ ...s, courses: (classCoursesMap[s.class_id] || []).filter(Boolean) })),
                sectionsAssigned: sectionsAssigned.map(s => ({ ...s, courses: (assignedCoursesBySection[s.id] || []).filter(Boolean) })),
            }
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

// ---------- helper: available courses for a scope ----------
const getAvailableCourse = async (req, res) => {
    try {
        const { class_id, section_id, teacher_id } = req.query;
        if (!teacher_id) return res.status(400).json({ message: "teacher_id required" });

        if (section_id) {
            const sec = await prisma.sections.findUnique({ where: { id: section_id }, include: { class: true } });
            if (!sec) return res.status(404).json({ message: "Section not found" });

            const isHomeroom =
                sec.homeroom_teacher_id === teacher_id ||
                (sec.class && sec.class.homeroom_teacher_id === teacher_id);

            if (isHomeroom) {
                const list = await getClassCourses(sec.class_id);
                return res.json({ status: "success", data: list });
            }
            const list = await getSectionAssignedCourses(section_id, teacher_id);
            return res.json({ status: "success", data: list });
        }

        if (class_id) {
            const cls = await prisma.classes.findUnique({ where: { id: class_id } });
            if (!cls) return res.status(404).json({ message: "Class not found" });
            if (cls.homeroom_teacher_id !== teacher_id)
                return res.status(403).json({ message: "Forbidden: not homeroom for this class" });
            const list = await getClassCourses(class_id);
            return res.json({ status: "success", data: list });
        }

        return res.status(400).json({ message: "Provide class_id or section_id" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

// ---------- roster ----------
const getRoster = async (req, res) => {
    try {
        const { institution_id, teacher_id, date, class_id, section_id, course_id } = req.query;
        if (!institution_id || !teacher_id || !date)
            return res.status(400).json({ message: "institution_id, teacher_id, date required" });

        const d = new Date(date);
        if (isNaN(d)) return res.status(400).json({ message: "Invalid date" });

        // ✅ FIX: compare by local start-of-day to avoid timezone issue
        if (SOD(d) > today())
            return res.status(400).json({ message: "Cannot take attendance for a future date" });

        const scope = await assertPermission({ class_id, section_id, course_id, teacher_id });

        const whereStudents = scope.section_id
            ? { institution_id, section_id: scope.section_id }
            : { institution_id, class_id: scope.class_id };

        const students = await prisma.students.findMany({
            where: whereStudents,
            select: { id: true, name_eng: true, student_id: true, email: true }
        });

        const records = await prisma.studentAttendance.findMany({
            where: {
                institution_id,
                class_id: scope.class_id,
                section_id: scope.section_id,
                course_id: scope.course_id,
                date: { gte: SOD(d), lte: EOD(d) }
            }
        });

        const map = new Map(records.map(r => [r.student_id, r]));
        res.json({
            status: "success",
            data: {
                ...scope,
                date: d.toISOString(),
                roster: students.map(s => ({ student: s, record: map.get(s.id) || null }))
            }
        });
    } catch (e) {
        res.status(e.code || 500).json({ message: e.message });
    }
};

// ---------- save / upsert ----------
const save = async (req, res) => {
    try {
        const { institution_id, teacher_id, date, class_id, section_id, course_id, items } = req.body;
        if (!institution_id || !teacher_id || !date)
            return res.status(400).json({ message: "institution_id, teacher_id, date required" });

        const d = new Date(date);
        if (isNaN(d)) return res.status(400).json({ message: "Invalid date" });

        // ✅ FIX: compare by local start-of-day to avoid timezone issue
        if (SOD(d) > today())
            return res.status(400).json({ message: "Cannot take attendance for a future date" });

        if (!Array.isArray(items) || !items.length)
            return res.status(400).json({ message: "items[] required" });

        const scope = await assertPermission({ class_id, section_id, course_id, teacher_id });

        await prisma.$transaction(async (tx) => {
            for (const it of items) {
                const existing = await tx.studentAttendance.findFirst({
                    where: {
                        institution_id,
                        student_id: it.student_id,
                        class_id: scope.class_id,
                        section_id: scope.section_id,
                        course_id: scope.course_id,
                        date: { gte: SOD(d), lte: EOD(d) },
                    }
                });

                if (existing) {
                    await tx.studentAttendance.update({
                        where: { id: existing.id },
                        data: { status: it.status, remarks: it.remarks || null, teacher_id }
                    });
                } else {
                    await tx.studentAttendance.create({
                        data: {
                            institution_id,
                            student_id: it.student_id,
                            teacher_id,
                            class_id: scope.class_id,
                            section_id: scope.section_id,
                            course_id: scope.course_id,
                            date: d,
                            status: it.status,
                            remarks: it.remarks || null,
                        }
                    });
                }
            }
        });

        res.json({ status: "success" });
    } catch (e) {
        res.status(e.code || 500).json({ message: e.message });
    }
};

// ---------- analytics ----------
const analytics = async (req, res) => {
    try {
        const { institution_id, teacher_id, from, to, class_id, section_id, course_id } = req.query;
        if (!institution_id || !teacher_id || !from || !to)
            return res.status(400).json({ message: "institution_id, teacher_id, from, to required" });

        const fromD = SOD(new Date(from));
        const toD = EOD(new Date(to));
        if (isNaN(fromD) || isNaN(toD)) return res.status(400).json({ message: "Invalid date range" });
        if (fromD > toD) return res.status(400).json({ message: "from must be <= to" });
        if (toD > EOD(today())) return res.status(400).json({ message: "Range cannot end in the future" });

        let where = {
            institution_id,
            date: { gte: fromD, lte: toD },
            ...(class_id ? { class_id } : {}),
            ...(section_id ? { section_id } : {}),
        };

        if (section_id) {
            const sec = await prisma.sections.findUnique({ where: { id: section_id }, include: { class: true } });
            if (!sec) return res.status(404).json({ message: "Section not found" });
            const isHomeroom =
                sec.homeroom_teacher_id === teacher_id ||
                (sec.class && sec.class.homeroom_teacher_id === teacher_id);

            if (course_id) {
                await assertPermission({ section_id, class_id: null, course_id, teacher_id });
                where.course_id = course_id;
            } else if (!isHomeroom) {
                const assigned = await getSectionAssignedCourses(section_id, teacher_id);
                if (!assigned.length)
                    return res.json({ status: "success", data: { counts: { present: 0, absent: 0, late: 0, leave: 0 }, total: 0, presentRate: 0, series: [] } });
                where.course_id = { in: assigned.map(c => c.id) };
            }
        }

        if (class_id && !section_id) {
            const cls = await prisma.classes.findUnique({ where: { id: class_id } });
            if (!cls) return res.status(404).json({ message: "Class not found" });
            if (cls.homeroom_teacher_id !== teacher_id)
                return res.status(403).json({ message: "Forbidden: not homeroom for this class" });

            if (course_id) {
                const ok = await prisma.classCourses.findFirst({ where: { class_id, course_id } });
                if (!ok) return res.status(403).json({ message: "Course not in this class" });
                where.course_id = course_id;
            }
        }

        const rows = await prisma.studentAttendance.findMany({ where });
        const counts = { present: 0, absent: 0, late: 0, leave: 0 };
        const daily = {};

        rows.forEach(r => {
            counts[r.status] = (counts[r.status] || 0) + 1;
            const k = new Date(r.date); k.setHours(0, 0, 0, 0);
            const key = k.toISOString().slice(0, 10);
            (daily[key] ||= { present: 0, absent: 0, late: 0, leave: 0, total: 0 });
            daily[key][r.status] += 1;
            daily[key].total += 1;
        });

        const total = counts.present + counts.absent + counts.late + counts.leave;
        const presentRate = total ? Math.round((counts.present / total) * 100) : 0;
        const series = Object.entries(daily).sort(([a], [b]) => a.localeCompare(b))
            .map(([day, v]) => ({ day, ...v, presentRate: v.total ? Math.round((v.present / v.total) * 100) : 0 }));

        res.json({ status: "success", data: { counts, total, presentRate, series } });
    } catch (e) {
        res.status(e.code || 500).json({ message: e.message });
    }
};

export const studentAttendanceController = {
    getLookup,
    getAvailableCourse,
    getRoster,
    save,
    analytics
};
