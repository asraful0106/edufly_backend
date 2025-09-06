import prisma from "../database/db.config.js";
import fse from "fs-extra";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

/* ---------- setup dirs exactly like your teacher-create ---------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const TEACHER_IMG_DIR = path.join(PUBLIC_DIR, "teacher_Image");
const TEACHER_SIG_DIR = path.join(PUBLIC_DIR, "teacher_Signeture");

fse.ensureDirSync(TEACHER_IMG_DIR);
fse.ensureDirSync(TEACHER_SIG_DIR);

/* ---------- multer (tmp), we move manually ---------- */
const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/avif"];
const tmpUpload = multer({
    storage: multer.diskStorage({}), // tmp folder (OS)
    fileFilter: (req, file, cb) => {
        if (allowedTypes.includes(file.mimetype)) cb(null, true);
        else cb(new Error("Only JPG/PNG/GIF/AVIF images are allowed"), false);
    },
});

export const uploadSingle = tmpUpload.single("file");

/* ---------- helpers ---------- */
// const toPublicUrl = (name, bucket) => {
//     if (!name) return "";
//     // if already a url or path, keep
//     if (name.startsWith("http") || name.includes("/")) return name;
//     return `/${bucket}/${name}`;
// };

const moveUploaded = async (file, bucketDir) => {
    // keep same naming logic you used during creation
    const ext = path.extname(file.originalname);
    const finalName = `${file.filename}${ext}`;
    const target = path.join(bucketDir, finalName);
    await fse.move(file.path, target, { overwrite: true });
    return finalName; // store filename only in DB
};

const now = () => new Date();

/* ========= GET profile ========= */
export const getMe = async (req, res) => {
    try {
        const { teacher_id } = req.query;
        if (!teacher_id) return res.status(400).json({ message: "teacher_id is required" });

        // Support both UUID (id) and human code (teacher_id)
        const teacher = await prisma.teachers.findFirst({
            where: { OR: [{ id: teacher_id }, { teacher_id: teacher_id }] },
            // where: {id: teacher_id}
        });
        if (!teacher) return res.status(404).json({ message: "Teacher not found" });

        const [homeroomSections, homeroomClasses, assignedCourses, pendingApprovals, degrees, achievements] =
            await Promise.all([
                prisma.sections.count({ where: { homeroom_teacher_id: teacher.id } }),
                prisma.classes.count({ where: { homeroom_teacher_id: teacher.id } }),
                prisma.sectionCourseTeachers.count({ where: { teacher_id: teacher.id } }),
                prisma.resultApprovals.count({
                    where: { status: "pending", result: { teacher_id: teacher.id } },
                }),
                prisma.teacherDegree.findMany({
                    where: { teacher_id: teacher.id },
                    orderBy: { passing_year: "desc" },
                }),
                prisma.teacherAchivment.findMany({
                    where: { teacher_id: teacher.id },
                    orderBy: { year: "desc" },
                }),
            ]);

        res.json({
            status: "success",
            data: {
                teacher,
                stats: { homeroomSections, homeroomClasses, assignedCourses, pendingApprovals },
                degrees,
                achievements,
            },
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* ========= UPDATE profile (allowed fields only) ========= */
export const updateMe = async (req, res) => {
    try {
        const { id } = req.params;
        // Only allow these keys to be updated by a teacher
        const allowed = [
            "about",
            "phone_number",
            "date_of_birth",
            "present_adress",
            "parmanent_adress",
            "blood_group",
        ];
        const data = {};
        for (const k of allowed) if (k in req.body) data[k] = req.body[k];

        if ("date_of_birth" in data && data.date_of_birth) {
            data.date_of_birth = new Date(data.date_of_birth);
        } else if ("date_of_birth" in data && !data.date_of_birth) {
            data.date_of_birth = null;
        }

        const updated = await prisma.teachers.update({ where: { id }, data });
        // decorate with public urls for UI
        // updated.image = toPublicUrl(updated.image, "teacher_Image");
        // updated.signature = toPublicUrl(updated.signature, "teacher_Signeture");

        res.json({ status: "success", data: updated });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* ========= UPLOAD avatar ========= */
export const uploadAvatar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.file) return res.status(400).json({ message: "file is required" });

        const teacher = await prisma.teachers.findUnique({ where: { id } });
        if (!teacher) return res.status(404).json({ message: "Teacher not found" });

        // move into /public/teacher_Image
        const filename = await moveUploaded(req.file, TEACHER_IMG_DIR);

        // delete old (if it was a local filename, not URL)
        if (teacher.image && !teacher.image.includes("/") && !teacher.image.startsWith("http")) {
            const oldPath = path.join(TEACHER_IMG_DIR, teacher.image);
            if (await fse.pathExists(oldPath)) await fse.remove(oldPath);
        }

        await prisma.teachers.update({ where: { id }, data: { image: filename } });

        res.json({
            status: "success",
            // data: { filename, path: toPublicUrl(filename, "teacher_Image") },
            data: { filename, path: filename },
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* ========= UPLOAD signature ========= */
export const uploadSignature = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.file) return res.status(400).json({ message: "file is required" });

        const teacher = await prisma.teachers.findUnique({ where: { id } });
        if (!teacher) return res.status(404).json({ message: "Teacher not found" });

        const filename = await moveUploaded(req.file, TEACHER_SIG_DIR);

        if (teacher.signature && !teacher.signature.includes("/") && !teacher.signature.startsWith("http")) {
            const oldPath = path.join(TEACHER_SIG_DIR, teacher.signature);
            if (await fse.pathExists(oldPath)) await fse.remove(oldPath);
        }

        await prisma.teachers.update({ where: { id }, data: { signature: filename } });

        res.json({
            status: "success",
            // data: { filename, path: toPublicUrl(filename, "teacher_Signeture") },
            data: { filename, path: filename },
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* ========= CHANGE password (simple) ========= */
export const changePassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { current_password, new_password } = req.body;
        if (!current_password || !new_password)
            return res.status(400).json({ message: "current_password, new_password required" });

        const t = await prisma.teachers.findUnique({ where: { id } });
        if (!t) return res.status(404).json({ message: "Teacher not found" });

        // NOTE: replace with proper hashing in production
        if (t.password !== current_password) return res.status(401).json({ message: "Invalid current password" });

        await prisma.teachers.update({ where: { id }, data: { password: new_password } });
        res.json({ status: "success" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* ========= Degrees ========= */
export const addDegree = async (req, res) => {
    try {
        const { id } = req.params; // teacher id
        const { title, passing_year } = req.body;
        if (!title || !passing_year) return res.status(400).json({ message: "title, passing_year required" });

        const row = await prisma.teacherDegree.create({
            data: { teacher_id: id, title, passing_year: new Date(passing_year) },
        });
        res.status(201).json({ status: "success", data: row });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
export const updateDegree = async (req, res) => {
    try {
        const { degId } = req.params;
        const { title, passing_year } = req.body;
        const row = await prisma.teacherDegree.update({
            where: { id: degId },
            data: { ...(title ? { title } : {}), ...(passing_year ? { passing_year: new Date(passing_year) } : {}) },
        });
        res.json({ status: "success", data: row });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
export const deleteDegree = async (req, res) => {
    try {
        const { degId } = req.params;
        await prisma.teacherDegree.delete({ where: { id: degId } });
        res.json({ status: "success" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

/* ========= Achievements ========= */
export const addAchievement = async (req, res) => {
    try {
        const { id } = req.params; // teacher id
        const { title, description, year } = req.body;
        if (!title || !year) return res.status(400).json({ message: "title, year required" });

        const row = await prisma.teacherAchivment.create({
            data: { teacher_id: id, title, description: description || "", year: new Date(year) },
        });
        res.status(201).json({ status: "success", data: row });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
export const updateAchievement = async (req, res) => {
    try {
        const { achId } = req.params;
        const { title, description, year } = req.body;
        const row = await prisma.teacherAchivment.update({
            where: { id: achId },
            data: {
                ...(title ? { title } : {}),
                ...(description != null ? { description } : {}),
                ...(year ? { year: new Date(year) } : {}),
            },
        });
        res.json({ status: "success", data: row });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
export const deleteAchievement = async (req, res) => {
    try {
        const { achId } = req.params;
        await prisma.teacherAchivment.delete({ where: { id: achId } });
        res.json({ status: "success" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};
