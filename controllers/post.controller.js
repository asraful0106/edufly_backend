import prisma from "../database/db.config.js";
import fse from "fs-extra";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";


// Getting file 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postUplodDirName = path.join(__dirname, "..", "public", "post");

// Ensure the directory exist
fse.ensureDirSync(postUplodDirName);

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: postUplodDirName,
    filename: (reg, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

// const upload = multer({ storage });
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/mpeg'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only images and videos are allowed!'), false);
        }
    }
});

const createPost = async (req, res) => {
    upload.array('fileInputField', 30)(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: "File not found!" });
        };
        try {
            const { institution_id, title, description } = req.body;
            // Validateing the filed
            if (!institution_id || !title) {
                // Clean up uploaded files
                if (req.files) {
                    await Promise.all(
                        req.files.map(file => fse.remove(file.path))
                    );
                }
                return res.status(400).json({ message: "All the information is needed!" });
            }

            // Check if institution exists
            const institutionEiin = await prisma.institutions.findUnique({
                where: {
                    eiin: institution_id,
                },
            });
            if (!institutionEiin) {
                // Clean up uploaded files
                if (req.files) {
                    await Promise.all(
                        req.files.map(file => fse.remove(file.path))
                    );
                }
                return res.status(404).json({ message: "Institution is not found!" });
            }

            // Create post with image if any
            const postData = {
                institution_id,
                title,
                description,
                images: req.files ? {
                    create: req.files.map(file => ({
                        image_link: file.filename
                    }))
                } : undefined
            };
            const post = await prisma.posts.create({
                data: postData,
                include: {
                    images: true,
                }
            });

            res.status(201).json(post);

        } catch (err) {
            // Clean up uploaded files
            if (req.files) {
                await Promise.all(
                    req.files.map(file => fse.remove(file.path))
                );
            }
            console.error('Error creating post:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}

export { createPost }