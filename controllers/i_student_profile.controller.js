import prisma from "../database/db.config.js";
import fse from "fs-extra";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studentImageUplodDirName = path.join(__dirname, "..", "public", "student_Image");
const studentSignetureUplodDirName = path.join(__dirname, "..", "public", "student_Signature");
fse.ensureDirSync(studentImageUplodDirName);
fse.ensureDirSync(studentSignetureUplodDirName);

// same filter as your create logic
const uploadStudentFiles = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ok = ['image/jpeg', 'image/png', 'image/gif', 'image/avif'].includes(file.mimetype);
        cb(ok ? null : new Error("Only images and gif are allowed!"), ok);
    }
}).fields([{ name: "image", maxCount: 1 }, { name: "signature", maxCount: 1 }]);

const RO_KEYS = new Set([
    "batch_id", "class_id", "section_id", "class_roll",
    "name_eng", "name_bng", "student_id", "teacher_initial",
    "institution_id", "fingerprint", "email", "religion", "gender",
    "position", "role", "status"
]);

const EDITABLE = new Set([
    "phone_number", "date_of_birth", "present_adress", "parmanent_adress", "blood_group"
]);

const pickEditable = (body) => {
    const out = {};
    for (const k of Object.keys(body || {})) {
        if (EDITABLE.has(k) && body[k] !== undefined) {
            out[k] = k === "date_of_birth" && body[k] ? new Date(body[k]) : body[k];
        }
    }
    return out;
};

async function getMe(req, res) {
    try {
        const { student_id } = req.query; // UUID
        if (!student_id) return res.status(400).json({ message: "student_id is required" });

        const s = await prisma.students.findUnique({
            where: { id: student_id },
            include: {
                batch: { select: { id: true, batch_code: true } },
                class: {
                    select: {
                        id: true, title: true, batch_code: true,
                        course: { select: { id: true, title: true, course_code: true } }
                    }
                },
                section: { select: { id: true, section_name: true } }
            }
        });
        if (!s) return res.status(404).json({ message: "Student not found" });

        res.json({ status: "success", data: s });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

async function updateMe(req, res) {
    try {
        const student_id = req.body.student_id; // UUID
        if (!student_id) return res.status(400).json({ message: "student_id required" });

        // ensure record exists
        const s = await prisma.students.findUnique({ where: { id: student_id } });
        if (!s) return res.status(404).json({ message: "Student not found" });

        // prevent read-only field tampering
        for (const k of Object.keys(req.body || {})) {
            if (RO_KEYS.has(k)) return res.status(403).json({ message: `Field '${k}' cannot be updated by student` });
        }

        const data = pickEditable(req.body);

        // handle files (move to proper folders, save final filename with extension)
        if (req.files?.image?.[0]) {
            const src = req.files.image[0];
            const fileName = `${src.filename}${path.extname(src.originalname)}`;
            await fse.move(src.path, path.join(studentImageUplodDirName, fileName));
            data.image = fileName;
        }
        if (req.files?.signature?.[0]) {
            const src = req.files.signature[0];
            const fileName = `${src.filename}${path.extname(src.originalname)}`;
            await fse.move(src.path, path.join(studentSignetureUplodDirName, fileName));
            data.signature = fileName;
        }

        const updated = await prisma.students.update({
            where: { id: student_id },
            data,
            include: {
                batch: { select: { id: true, batch_code: true } },
                class: {
                    select: {
                        id: true, title: true, batch_code: true,
                        course: { select: { id: true, title: true, course_code: true } }
                    }
                },
                section: { select: { id: true, section_name: true } }
            }
        });

        res.json({ status: "success", data: updated });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

async function changePassword(req, res) {
    try {
        const { student_id, old_password, new_password } = req.body;
        if (!student_id || !new_password) return res.status(400).json({ message: "student_id and new_password required" });

        const s = await prisma.students.findUnique({ where: { id: student_id } });
        if (!s) return res.status(404).json({ message: "Student not found" });

        // NOTE: you’re storing plain text. Replace with bcrypt in real use.
        if (old_password && s.password !== old_password) {
            return res.status(400).json({ message: "Current password is incorrect" });
        }

        await prisma.students.update({ where: { id: student_id }, data: { password: new_password } });
        res.json({ status: "success" });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export const iStudentProfileController = {
    uploadStudentFiles,
    getMe,
    updateMe,
    changePassword
};
