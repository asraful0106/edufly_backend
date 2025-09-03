import prisma from "../database/db.config.js";

// Compose a “view model” for one result row
function hydrateResultRow(row) {
    const latestApproval = row.approvals?.[0] || null;
    // Effective status = latest approval status, else draft/published
    let effective = "draft";
    if (latestApproval) effective = latestApproval.status;
    if (row.isPublished) effective = "approved";
    return {
        ...row,
        workflow: {
            status: effective, // 'pending' | 'approved' | 'rejected' | 'draft'
            latestApproval,
        },
    };
}

// ----- Lookups (courses, exam types) -----
const getLookup = async (req, res) => {
    try {
        const { institution_id } = req.query;
        if (!institution_id) return res.status(400).json({ message: "institution_id is required" });

        const [courses, examTypes] = await Promise.all([
            prisma.courses.findMany({
                where: { institution_id },
                select: { id: true, title: true, course_code: true },
                orderBy: { title: "asc" },
            }),
            prisma.examTypes.findMany({
                where: { institution_id },
                select: { id: true, name: true },
                orderBy: { name: "asc" },
            }),
        ]);

        res.json({ status: "success", data: { courses, examTypes } });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// ----- List results with filters -----
const getResult = async (req, res) => {
    try {
        const {
            institution_id,
            q = "",
            course_id,
            examTypeId,
            section_id,
            class_id,  // note: class lives on Sections/Classes; we filter by section.class
            status,    // pending | approved | rejected | draft | all
            skip = "0",
            take = "50",
        } = req.query;

        if (!institution_id) return res.status(400).json({ message: "institution_id is required" });

        // Base where
        const where = {
            institution_id,
            ...(course_id ? { course_id } : {}),
            ...(examTypeId ? { examTypeId } : {}),
            ...(section_id ? { section_id } : {}),
            ...(q
                ? {
                    OR: [
                        { student: { name_eng: { contains: q, mode: "insensitive" } } },
                        { student: { name_bng: { contains: q, mode: "insensitive" } } },
                        { student: { student_id: { contains: q, mode: "insensitive" } } },
                        { teacher: { name_eng: { contains: q, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };

        // Fetch
        const [rows, total] = await Promise.all([
            prisma.results.findMany({
                where,
                include: {
                    examType: { select: { id: true, name: true } },
                    course: { select: { id: true, title: true, course_code: true } },
                    section: {
                        select: {
                            id: true,
                            section_name: true,
                            class: { select: { id: true, title: true, batch_code: true } },
                        },
                    },
                    student: { select: { id: true, name_eng: true, student_id: true, email: true } },
                    teacher: { select: { id: true, name_eng: true, teacher_initial: true } },
                    markSegment: { select: { id: true, name: true, max_marks: true, isMainResult: true } },
                    approvals: {
                        orderBy: { requested_at: "desc" },
                        take: 1,
                    },
                },
                orderBy: [{ created_at: "desc" }],
                skip: Number(skip),
                take: Number(take),
            }),
            prisma.results.count({ where }),
        ]);

        // Optional filter by class_id or status at application layer (because latest approval is computed)
        let data = rows.map(hydrateResultRow);

        if (class_id) {
            data = data.filter(r => r.section?.class?.id === class_id);
        }

        if (status && status !== "all") {
            data = data.filter(r => r.workflow.status === status);
        }

        res.json({ status: "success", total: data.length, data });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// ----- Approve (publish) -----
const approveResutl = async (req, res) => {
    try {
        const { id } = req.params;
        const { remarks, institution_id } = req.body;

        const result = await prisma.results.findUnique({ where: { id }, include: { approvals: true } });
        if (!result) return res.status(404).json({ message: "Result not found" });
        if (institution_id && result.institution_id !== institution_id)
            return res.status(403).json({ message: "Cross-institution access denied" });

        const [updated] = await prisma.$transaction([
            prisma.results.update({
                where: { id },
                data: { isPublished: true, published_at: now() },
            }),
            prisma.resultApprovals.create({
                data: {
                    result_id: id,
                    institution_id: result.institution_id,
                    status: "approved",
                    approved_at: now(),
                    remarks: remarks || null,
                },
            }),
        ]);

        const refreshed = await prisma.results.findUnique({
            where: { id },
            include: {
                examType: true,
                course: true,
                section: { include: { class: true } },
                student: true,
                teacher: true,
                markSegment: true,
                approvals: { orderBy: { requested_at: "desc" }, take: 1 },
            },
        });

        res.json({ status: "success", data: hydrateResultRow(refreshed) });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// ----- Reject -----
const rejectResult = async (req, res) => {
    try {
        const { id } = req.params;
        const { remarks, institution_id } = req.body;

        const result = await prisma.results.findUnique({ where: { id }, include: { approvals: true } });
        if (!result) return res.status(404).json({ message: "Result not found" });
        if (institution_id && result.institution_id !== institution_id)
            return res.status(403).json({ message: "Cross-institution access denied" });

        await prisma.$transaction([
            prisma.results.update({
                where: { id },
                data: { isPublished: false, published_at: null },
            }),
            prisma.resultApprovals.create({
                data: {
                    result_id: id,
                    institution_id: result.institution_id,
                    status: "rejected",
                    approved_at: null,
                    remarks: remarks || null,
                },
            }),
        ]);

        const refreshed = await prisma.results.findUnique({
            where: { id },
            include: {
                examType: true,
                course: true,
                section: { include: { class: true } },
                student: true,
                teacher: true,
                markSegment: true,
                approvals: { orderBy: { requested_at: "desc" }, take: 1 },
            },
        });

        res.json({ status: "success", data: hydrateResultRow(refreshed) });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// ----- Delete (result + approvals) -----
const deleteResult = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.$transaction([
            prisma.resultApprovals.deleteMany({ where: { result_id: id } }),
            prisma.results.delete({ where: { id } }),
        ]);

        res.json({ status: "success" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


// ----- Bulk actions -----
const bulkAction = async (req, res) => {
    try {
        const { action, ids = [], remarks, institution_id } = req.body;
        if (!["approve", "reject", "delete"].includes(action))
            return res.status(400).json({ message: "Invalid action" });
        if (!Array.isArray(ids) || ids.length === 0)
            return res.status(400).json({ message: "ids[] required" });

        if (action === "delete") {
            await prisma.$transaction([
                prisma.resultApprovals.deleteMany({ where: { result_id: { in: ids } } }),
                prisma.results.deleteMany({ where: { id: { in: ids } } }),
            ]);
            return res.json({ status: "success" });
        }

        // Fetch to validate institution (optional)
        const rows = await prisma.results.findMany({ where: { id: { in: ids } } });
        if (institution_id && rows.some(r => r.institution_id !== institution_id))
            return res.status(403).json({ message: "Cross-institution access denied" });

        if (action === "approve") {
            await prisma.$transaction([
                prisma.results.updateMany({
                    where: { id: { in: ids } },
                    data: { isPublished: true, published_at: now() },
                }),
                prisma.resultApprovals.createMany({
                    data: rows.map(r => ({
                        result_id: r.id,
                        institution_id: r.institution_id,
                        status: "approved",
                        approved_at: now(),
                        remarks: remarks || null,
                    })),
                }),
            ]);
        } else if (action === "reject") {
            await prisma.$transaction([
                prisma.results.updateMany({
                    where: { id: { in: ids } },
                    data: { isPublished: false, published_at: null },
                }),
                prisma.resultApprovals.createMany({
                    data: rows.map(r => ({
                        result_id: r.id,
                        institution_id: r.institution_id,
                        status: "rejected",
                        approved_at: null,
                        remarks: remarks || null,
                    })),
                }),
            ]);
        }

        res.json({ status: "success" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}


export const resutlController = {
    getLookup,
    getResult,
    approveResutl,
    rejectResult,
    deleteResult,
    bulkAction
}