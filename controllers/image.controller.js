import path from "path";
import { fileURLToPath } from 'url';
import fse from "fs-extra";

// Get current directory path using ES module method
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imageDir = path.join(__dirname, "..", "public", "post");
const teacherImageDir = path.join(__dirname, "..", "public", "teacher_Image");
const teacherSignetureImageDir = path.join(__dirname, "..", "public", "teacher_Signeture");
const studentImageUplodDirName = path.join(__dirname, "..", "public", "student_Image");
const studentSignetureUplodDirName = path.join(__dirname, "..", "public", "student_Signature");

// Ensure the directories exist
fse.ensureDirSync(imageDir);
fse.ensureDirSync(teacherImageDir);
fse.ensureDirSync(teacherSignetureImageDir);

const getImage = async (req, res) => {
    const { image_name } = req.params;

    // Validate image_name to avoid directory traversal
    // if (!/^[a-zA-Z0-9._-]+$/.test(image_name)) {
    //     return res.status(400).json({ message: "Invalid filename!" });
    // }

    const originalPath = path.join(imageDir, image_name);
    const ext = path.extname(image_name).slice(1).toLowerCase();

    const mimeTypes = {
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'webp': 'image/webp',
        'avif': 'image/avif',
        'mp4': 'video/mp4'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    if (!fse.existsSync(originalPath)) {
        return res.status(404).json({ message: "File not found!" });
    }

    try {
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', 'inline');
        return fse.createReadStream(originalPath).pipe(res);
    } catch (err) {
        console.error("Error processing image:", err);
        return res.status(500).json({ message: "Error processing image" });
    }
};

const getTeacherImage = async (req, res) => {
    const { image_name } = req.params;

    // Validate image_name to avoid directory traversal
    // if (!/^[a-zA-Z0-9._-]+$/.test(image_name)) {
    //     return res.status(400).json({ message: "Invalid filename!" });
    // }

    const originalPath = path.join(teacherImageDir, image_name);
    const ext = path.extname(image_name).slice(1).toLowerCase();

    const mimeTypes = {
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'webp': 'image/webp',
        'avif': 'image/avif',
        'mp4': 'video/mp4'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    if (!fse.existsSync(originalPath)) {
        return res.status(404).json({ message: "File not found!" });
    }

    try {
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', 'inline');
        return fse.createReadStream(originalPath).pipe(res);
    } catch (err) {
        console.error("Error processing image:", err);
        return res.status(500).json({ message: "Error processing image" });
    }
};

const getTeacherSignetureImage = async (req, res) => {
    const { image_name } = req.params;

    const originalPath = path.join(teacherSignetureImageDir, image_name);
    const ext = path.extname(image_name).slice(1).toLowerCase();

    const mimeTypes = {
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'webp': 'image/webp',
        'avif': 'image/avif',
        'mp4': 'video/mp4'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    if (!fse.existsSync(originalPath)) {
        return res.status(404).json({ message: "File not found!" });
    }

    try {
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', 'inline');
        return fse.createReadStream(originalPath).pipe(res);
    } catch (err) {
        console.error("Error processing image:", err);
        return res.status(500).json({ message: "Error processing image" });
    }
};

const getStudentImage = async (req, res) => {

    const { image_name } = req.params;
    const originalPath = path.join(studentImageUplodDirName, image_name);
    const ext = path.extname(image_name).slice(1).toLowerCase();

    const mimeTypes = {
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'webp': 'image/webp',
        'avif': 'image/avif',
        'mp4': 'video/mp4'
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    if (!fse.existsSync(originalPath)) {
        return res.status(404).json({ message: "File not found!" });
    }

    try {
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', 'inline');
        return fse.createReadStream(originalPath).pipe(res);
    } catch (err) {
        console.error("Error processing image:", err);
        return res.status(500).json({ message: "Error processing image" });
    }
}

export const imageController = { getImage, getTeacherImage, getTeacherSignetureImage, getStudentImage };
