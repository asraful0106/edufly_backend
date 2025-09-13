import prisma from "../database/db.config.js";

// Helpers
const asDate = (v) => {
    if (!v) return null;
    // already ISO with time? pass through
    if (/^\d{4}-\d{2}-\d{2}T/.test(v)) return v;
    // date-only -> midnight UTC
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return `${v}T00:00:00.000Z`;
    // anything else -> let Date normalize
    return new Date(v).toISOString();
};

const getAllClass = async (req, res) => {
    try {
        const { institution_id } = req.query;
        const where = institution_id ? { institution_id } : {};

        // Pull classes including their primary course_id
        const classes = await prisma.classes.findMany({
            where,
            orderBy: { created_at: "desc" },
        });

        const classIds = classes.map((c) => c.id);

        // Join-table courses for each class
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

        // Optional homeroom teachers
        const tIds = classes.map((c) => c.homeroom_teacher_id).filter(Boolean);
        const tMap =
            tIds.length > 0
                ? Object.fromEntries(
                    (
                        await prisma.teachers.findMany({
                            where: { id: { in: tIds } },
                        })
                    ).map((t) => [t.id, t])
                )
                : {};

        // Primary course for each class (because Classes has course_id)
        const primaryCourseIds = classes
            .map((c) => c.course_id)
            .filter(Boolean);

        const primaryCourseMap =
            primaryCourseIds.length > 0
                ? Object.fromEntries(
                    (
                        await prisma.courses.findMany({
                            where: { id: { in: primaryCourseIds } },
                        })
                    ).map((crs) => [crs.id, crs])
                )
                : {};

        const data = classes.map((c) => ({
            ...c,
            primary_course: c.course_id ? primaryCourseMap[c.course_id] ?? null : null,
            courses: byClass[c.id] || [],
            homeroom_teacher: c.homeroom_teacher_id
                ? tMap[c.homeroom_teacher_id] || null
                : null,
        }));

        res.json({ status: "success", data });
    } catch (e) {
        console.error("Error getting classes:", e);
        res.status(500).json({ message: e.message });
    }
};

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
            course_id,        // <-- REQUIRED (primary course for Classes)
            course_ids = [],  // <-- list for ClassCourses M2M
        } = req.body;

        if (
            !institution_id ||
            !batch_code ||
            !course_id ||
            !Array.isArray(course_ids) ||
            course_ids.length === 0
        ) {
            return res.status(400).json({
                message:
                    "institution_id, batch_code, course_id, course_ids[] required",
            });
        }

        const result = await prisma.$transaction(async (tx) => {
            // Create the Class with primary course_id
            const created = await tx.classes.create({
                data: {
                    institution_id,
                    batch_code,
                    title,
                    description,
                    start_date: asDate(start_date),
                    end_date: asDate(end_date),
                    homeroom_teacher_id: homeroom_teacher_id || null,
                    course_id, // <-- satisfies required relation
                    // Alternatively: course: { connect: { id: course_id } },
                },
            });

            // Map many courses through the join table
            await tx.classCourses.createMany({
                data: course_ids.map((cid) => ({
                    class_id: created.id,
                    course_id: cid,
                })),
                skipDuplicates: true,
            });

            return created;
        });

        res.status(201).json({ status: "success", data: result });
    } catch (e) {
        console.error("Error creating classes:", e);
        res.status(500).json({ message: e.message });
    }
};

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
            course_id,  // <-- optional; if provided, update the primary course
            course_ids, // <-- optional; if provided, replace M2M mapping
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
                    ...(course_id ? { course_id } : {}), // update primary course if provided
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
        console.error("Error updating classes:", e);
        res.status(500).json({ message: e.message });
    }
};

const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.$transaction([
            prisma.classCourses.deleteMany({ where: { class_id: id } }),
            prisma.sections.deleteMany({ where: { class_id: id } }),
            prisma.classes.delete({ where: { id } }),
        ]);
        res.json({ status: "success", success: true });
    } catch (e) {
        console.error("Error deleting classes:", e);
        res.status(500).json({ message: e.message });
    }
};

export const classController = {
    getAllClass,
    createClass,
    updateClass,
    deleteClass,
};
