import prisma from "../database/db.config.js";

const getAllCourse = async(req, res) => {
    try {
        const { institution_id } = req.query;
        const where = institution_id ? { institution_id } : {};
        const data = await prisma.courses.findMany({ where, orderBy: { created_at: "desc" } });
        res.json({ status: "success", data });
    } catch (e) {
        console.error('Error getting course:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const createCourse = async (req, res) => {
    try {
        const { institution_id, course_code, title, description } = req.body;
        if (!institution_id || !course_code || !title)
            return res.status(400).json({ message: "institution_id, course_code, title required" });
        const data = await prisma.courses.create({ data: { institution_id, course_code, title, description } });
        res.status(201).json({ status: "success", data });
    } catch (e) {
        console.error('Error creating course:', e);
        res.status(500).json({ message: e.message }); 
    }
}

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, course_code } = req.body;
        const data = await prisma.courses.update({ where: { id }, data: { title, description, course_code } });
        res.json({ status: "success", data });
    } catch (e) {
        console.error('Error updating course:', e);
         res.status(500).json({ message: e.message }); 
        }
}

const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.courses.delete({ where: { id } });
        res.json({ status: "success" });
    } catch (e) {
        console.error('Error deleting course:', e);
        res.status(500).json({ message: e.message }); 
    }
}

export const courseController = {
    getAllCourse,
    createCourse,
    updateCourse,
    deleteCourse
}