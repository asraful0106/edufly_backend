import prisma from "../database/db.config.js";

const getAllSection = async(req, res) => {
    try {
        const { institution_id } = req.query;

        // limit classes by institution
        const classes = await prisma.classes.findMany({
            where: institution_id ? { institution_id } : {},
            select: { id: true, title: true, batch_code: true },
        });
        const classIds = classes.map((c) => c.id);

        const [sections, classCourses] = await Promise.all([
            prisma.sections.findMany({
                where: classIds.length ? { class_id: { in: classIds } } : {},
                orderBy: { created_at: "desc" },
            }),
            prisma.classCourses.findMany({
                where: classIds.length ? { class_id: { in: classIds } } : {},
                include: { course: true },
            }),
        ]);

        const coursesByClass = classCourses.reduce((acc, cc) => {
            (acc[cc.class_id] ||= []).push(cc.course);
            return acc;
        }, {});

        // teaching map
        const sectionIds = sections.map((s) => s.id);
        const teaching = sectionIds.length
            ? await prisma.sectionCourseTeachers.findMany({
                where: { section_id: { in: sectionIds } },
                include: { course: true, teacher: true },
            })
            : [];

        const teachingBySection = teaching.reduce((acc, t) => {
            (acc[t.section_id] ||= []).push({ course: t.course, teacher: t.teacher });
            return acc;
        }, {});

        const classMap = Object.fromEntries(classes.map((c) => [c.id, c]));
        const data = sections.map((s) => ({
            ...s,
            class: {
                ...classMap[s.class_id],
                courses: coursesByClass[s.class_id] || [],
            },
            teaching: teachingBySection[s.id] || [], // [{course, teacher}]
        }));

        res.json({ status: "success", data });
    } catch (e) {
        console.error('Error getting section:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const createSection = async (req, res) => {
    try {
        const { class_id, section_name, homeroom_teacher_id, teaching_map = [] } = req.body;
        if (!class_id || !section_name)
            return res.status(400).json({ message: "class_id, section_name required" });

        const created = await prisma.$transaction(async (tx) => {
            const sec = await tx.sections.create({
                data: { class_id, section_name, homeroom_teacher_id: homeroom_teacher_id || null },
            });
            if (Array.isArray(teaching_map) && teaching_map.length) {
                await tx.sectionCourseTeachers.createMany({
                    data: teaching_map.map((m) => ({
                        section_id: sec.id,
                        course_id: m.course_id,
                        teacher_id: m.teacher_id,
                    })),
                    skipDuplicates: true,
                });
            }
            return sec;
        });

        res.status(201).json({ status: "success", data: created });
    } catch (e) {
        console.error('Error creating section:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const updateSection = async (req, res) => {
    try {
        const { id } = req.params;
        const { class_id, section_name, homeroom_teacher_id, teaching_map } = req.body;

        const updated = await prisma.$transaction(async (tx) => {
            const sec = await tx.sections.update({
                where: { id },
                data: { class_id, section_name, homeroom_teacher_id: homeroom_teacher_id ?? null },
            });

            if (Array.isArray(teaching_map)) {
                await tx.sectionCourseTeachers.deleteMany({ where: { section_id: id } });
                if (teaching_map.length) {
                    await tx.sectionCourseTeachers.createMany({
                        data: teaching_map.map((m) => ({
                            section_id: id,
                            course_id: m.course_id,
                            teacher_id: m.teacher_id,
                        })),
                        skipDuplicates: true,
                    });
                }
            }
            return sec;
        });

        res.json({ status: "success", data: updated });
    } catch (e) {
        console.error('Error updating section:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const deleteSection = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.$transaction([
            prisma.sectionCourseTeachers.deleteMany({ where: { section_id: id } }),
            prisma.sections.delete({ where: { id } }),
        ]);
        res.json({ status: "success" });
    } catch (e) {
        console.error('Error deleting section:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const replaceTeaching = async (req, res) => {
    try {
        const { id } = req.params;
        const { teaching_map = [] } = req.body; // [{course_id, teacher_id}]
        await prisma.$transaction(async (tx) => {
            await tx.sectionCourseTeachers.deleteMany({ where: { section_id: id } });
            if (teaching_map.length) {
                await tx.sectionCourseTeachers.createMany({
                    data: teaching_map.map((m) => ({ section_id: id, course_id: m.course_id, teacher_id: m.teacher_id })),
                    skipDuplicates: true,
                });
            }
        });
        res.json({ status: "success" });
    } catch (e) {
        console.error('Error replaching teacher on section:', e);
        res.status(500).json({ message: e.message }); 
    }
}

export const sectionController = {
    getAllSection,
    createSection,
    updateSection,
    deleteSection,
    replaceTeaching
}