// import prisma from "../database/db.config.js";
// import fse from "fs-extra";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";


// // Getting file 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const postUplodDirName = path.join(__dirname, "..", "public", "post");

// // Ensure the directory exist
// fse.ensureDirSync(postUplodDirName);

// // Configure multer for file upload
// const storage = multer.diskStorage({
//     destination: postUplodDirName,
//     filename: (reg, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// });

// // const upload = multer({ storage });
// const upload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/mpeg'];
//         if (allowedTypes.includes(file.mimetype)) {
//             cb(null, true);
//         } else {
//             cb(new Error('Only images and videos are allowed!'), false);
//         }
//     }
// });

// // For getting the post
// const getAllPost = async (req, res) => {
//     try {
//         const institution_id = req.params.eiin_id;
//         if (!institution_id) {
//             return res.status(400).json({ message: "All the filed are required!" });
//         }
//         // Check if institution exists
//         const institutionEiin = await prisma.institutions.findUnique({
//             where: {
//                 eiin: institution_id,
//             },
//         });
//         if (!institutionEiin) {
//             return res.status(404).json({ message: "Institution is not exist!" });
//         }

//         const post = await prisma.posts.findMany({
//             where: {
//                 institution_id
//             },
//             include: {
//                 images: true,
//             }
//         });
//         res.status(200).json(post);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal server error!" });
//     }
// }

// // For creating the post
// const createPost = async (req, res) => {
//     upload.array('fileInputField', 30)(req, res, async (err) => {
//         if (err) {
//             return res.status(400).json({ message: "File not found!" });
//         };
//         try {
//             const { institution_id, title, description } = req.body;
//             // Validateing the filed
//             if (!institution_id || !title) {
//                 // Clean up uploaded files
//                 if (req.files) {
//                     await Promise.all(
//                         req.files.map(file => fse.remove(file.path))
//                     );
//                 }
//                 return res.status(400).json({ message: "All the information is needed!" });
//             }

//             // Check if institution exists
//             const institutionEiin = await prisma.institutions.findUnique({
//                 where: {
//                     eiin: institution_id,
//                 },
//             });
//             if (!institutionEiin) {
//                 // Clean up uploaded files
//                 if (req.files) {
//                     await Promise.all(
//                         req.files.map(file => fse.remove(file.path))
//                     );
//                 }
//                 return res.status(404).json({ message: "Institution is not found!" });
//             }

//             // Create post with image if any
//             const postData = {
//                 institution_id,
//                 title,
//                 description,
//                 images: req.files ? {
//                     create: req.files.map(file => ({
//                         image_link: file.filename
//                     }))
//                 } : undefined
//             };
//             const post = await prisma.posts.create({
//                 data: postData,
//                 include: {
//                     images: true,
//                 }
//             });

//             res.status(201).json(post);

//         } catch (err) {
//             // Clean up uploaded files
//             if (req.files) {
//                 await Promise.all(
//                     req.files.map(file => fse.remove(file.path))
//                 );
//             }
//             console.error('Error creating post:', err);
//             res.status(500).json({ message: 'Internal server error' });
//         }
//     });
// }

// // For updating the post 
// const updatePost = async (req, res) => {
//     const { post_id } = req.params;
//     const { title, description } = req.body;

//     if (!post_id) {
//         return res.status(400).json({ message: "Post id is requied!" });
//     }

//     try {
//         const post = await prisma.posts.findUnique({
//             where: {
//                 id: post_id
//             }
//         });
//         if (!post) {
//             return res.status(400).json({ message: "Post is not found!" });
//         }

//         const updatedPost = await prisma.posts.update({
//             where: {
//                 id: post_id,
//                 title,
//                 description,
//             }
//         });
//         res.status(200).json({ updatedPost });

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal server error!" });
//     }
// };

// // For deleting the post
// const deleteOnePost = async (req, res) => {
//     const { post_id } = req.params;
//     if (!post_id) {
//         return res.status(400).json({ message: "Post id is required!" });
//     }

//     try {
//         const isPost = await prisma.posts.findUnique({
//             where: {
//                 id: post_id
//             }
//         });
//         if (!isPost) {
//             return res.status(400).json({ message: "Post not found!" });
//         }

//         const deletedPost = await prisma.posts.delete({
//             where: {
//                 id: post_id
//             }
//         });
//         res.status(200).json(deletedPost);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal server error!" });
//     }
// }

// export { getAllPost, createPost, updatePost, deleteOnePost }


// post.controller.js
import prisma from "../database/db.config.js";
import fse from "fs-extra";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const postUplodDirName = path.join(__dirname, "..", "public", "post");

fse.ensureDirSync(postUplodDirName);

const storage = multer.diskStorage({
    destination: postUplodDirName,
    filename: (reg, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "video/mp4",
            "video/mpeg",
        ];
        if (allowedTypes.includes(file.mimetype)) cb(null, true);
        else cb(new Error("Only images and videos are allowed!"), false);
    },
});

// GET /post/:eiin_id
const getAllPost = async (req, res) => {
    try {
        const institution_id = String(req.params.eiin_id);
        if (!institution_id) {
            return res.status(400).json({ message: "All the filed are required!" });
        }

        const institutionEiin = await prisma.institutions.findUnique({
            where: { eiin: institution_id },
        });
        if (!institutionEiin) {
            return res.status(404).json({ message: "Institution is not exist!" });
        }

        const post = await prisma.posts.findMany({
            where: { institution_id },
            orderBy: { created_at: "desc" },
            include: { images: true },
        });

        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error!" });
    }
};

// POST /post
const createPost = async (req, res) => {
    upload.array("fileInputField", 30)(req, res, async (err) => {
        if (err) return res.status(400).json({ message: "File not found!" });

        try {
            const { institution_id, title, description } = req.body;
            if (!institution_id || !title) {
                if (req.files) {
                    await Promise.all(req.files.map((file) => fse.remove(file.path)));
                }
                return res
                    .status(400)
                    .json({ message: "All the information is needed!" });
            }

            const institutionEiin = await prisma.institutions.findUnique({
                where: { eiin: String(institution_id) },
            });
            if (!institutionEiin) {
                if (req.files) {
                    await Promise.all(req.files.map((file) => fse.remove(file.path)));
                }
                return res.status(404).json({ message: "Institution is not found!" });
            }

            const post = await prisma.posts.create({
                data: {
                    institution_id: String(institution_id),
                    title,
                    description: description ?? "",
                    images: req.files?.length
                        ? {
                            create: req.files.map((file) => ({
                                image_link: file.filename,
                            })),
                        }
                        : undefined,
                },
                include: { images: true },
            });

            res.status(201).json(post);
        } catch (err) {
            if (req.files) {
                await Promise.all(req.files.map((file) => fse.remove(file.path)));
            }
            console.error("Error creating post:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });
};

// PUT /post/:post_id
const updatePost = async (req, res) => {
    const { post_id } = req.params;
    const { title, description } = req.body;

    if (!post_id) {
        return res.status(400).json({ message: "Post id is requied!" });
    }

    try {
        const post = await prisma.posts.findUnique({ where: { id: post_id } });
        if (!post) {
            return res.status(404).json({ message: "Post is not found!" });
        }

        const updatedPost = await prisma.posts.update({
            where: { id: post_id },
            data: {
                ...(title !== undefined ? { title } : {}),
                ...(description !== undefined ? { description } : {}),
            },
            include: { images: true },
        });

        res.status(200).json(updatedPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error!" });
    }
};

// DELETE /post/:post_id
const deleteOnePost = async (req, res) => {
    const { post_id } = req.params;
    if (!post_id) {
        return res.status(400).json({ message: "Post id is required!" });
    }

    try {
        const isPost = await prisma.posts.findUnique({ where: { id: post_id } });
        if (!isPost) {
            return res.status(404).json({ message: "Post not found!" });
        }

        // If you also want to remove images from disk:
        const images = await prisma.images.findMany({
            where: { post_id },
            select: { image_link: true },
        });
        await prisma.images.deleteMany({ where: { post_id } });

        const deletedPost = await prisma.posts.delete({ where: { id: post_id } });

        await Promise.all(
            images.map(({ image_link }) =>
                fse
                    .remove(path.join(postUplodDirName, image_link))
                    .catch(() => Promise.resolve())
            )
        );

        res.status(200).json(deletedPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error!" });
    }
};

export { getAllPost, createPost, updatePost, deleteOnePost };
