import prisma from "../database/db.config.js";

const getAllClass = async (req, res) => {
    try {
        const { institution_id } = req.query;
        const where = institution_id ? { institution_id } : {};
        const classes = await prisma.classes.findMany({
            where,
            orderBy: { created_at: "desc" },
        });

        const classIds = classes.map((c) => c.id);
        const ccs = classIds.length
            ? await prisma.classCourses.findMany({
                where: { class_id: { in: classIds } },
                include: { course: true },
            })
            : [];

        const byClass = ccs.reduce((acc, cc) => {
            (acc[cc.class_id] ||= []).push(cc.course);
            return acc;
        }, {});

        // Attach optional homeroom teacher
        const tIds = classes.map((c) => c.homeroom_teacher_id).filter(Boolean);
        const tMap =
            tIds.length > 0
                ? Object.fromEntries(
                    (await prisma.teachers.findMany({ where: { id: { in: tIds } } })).map((t) => [t.id, t])
                )
                : {};

        const data = classes.map((c) => ({
            ...c,
            courses: byClass[c.id] || [],
            homeroom_teacher: c.homeroom_teacher_id ? tMap[c.homeroom_teacher_id] : null,
        }));

        res.json({ status: "success", data });
    } catch (e) {
        console.error('Error getting classes:', e);
        res.status(500).json({ message: e.message });
     }
}

const createClass = async (req, res) => {
    try {
        const {
            institution_id,
            batch_code,
            title,
            description,
            start_date,
            end_date,
            homeroom_teacher_id,
            course_ids = [],
        } = req.body;

        if (!institution_id || !batch_code || !Array.isArray(course_ids) || course_ids.length === 0)
            return res.status(400).json({ message: "institution_id, batch_code, course_ids[] required" });

        const result = await prisma.$transaction(async (tx) => {
            const created = await tx.classes.create({
                data: {
                    institution_id,
                    batch_code,
                    title,
                    description,
                    start_date: asDate(start_date),
                    end_date: asDate(end_date),
                    homeroom_teacher_id: homeroom_teacher_id || null,
                },
            });
            await tx.classCourses.createMany({
                data: course_ids.map((cid) => ({ class_id: created.id, course_id: cid })),
                skipDuplicates: true,
            });
            return created;
        });

        res.status(201).json({ status: "success", data: result });
    } catch (e) {
        console.error('Error creating classes:', e);
         res.status(500).json({ message: e.message });
         }
}

const updateClass = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            batch_code,
            title,
            description,
            start_date,
            end_date,
            homeroom_teacher_id,
            course_ids, // optional; if provided, replace mapping
        } = req.body;

        const updated = await prisma.$transaction(async (tx) => {
            const cls = await tx.classes.update({
                where: { id },
                data: {
                    batch_code,
                    title,
                    description,
                    start_date: asDate(start_date),
                    end_date: asDate(end_date),
                    homeroom_teacher_id: homeroom_teacher_id ?? null,
                },
            });

            if (Array.isArray(course_ids)) {
                await tx.classCourses.deleteMany({ where: { class_id: id } });
                if (course_ids.length) {
                    await tx.classCourses.createMany({
                        data: course_ids.map((cid) => ({ class_id: id, course_id: cid })),
                        skipDuplicates: true,
                    });
                }
            }
            return cls;
        });

        res.json({ status: "success", data: updated });
    } catch (e) {
        console.error('Error updating classes:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.$transaction([
            prisma.classCourses.deleteMany({ where: { class_id: id } }),
            prisma.sections.deleteMany({ where: { class_id: id } }), // cascade if you want
            prisma.classes.delete({ where: { id } }),
        ]);
        res.json({ status: "success" });
    } catch (e) {
        console.error('Error deleting classes:', e);
        res.status(500).json({ message: e.message }); 
    }
}

export const classController = {
    getAllClass,
    createClass,
    updateClass,
    deleteClass
}