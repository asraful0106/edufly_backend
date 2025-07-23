import prisma from "../database/db.config.js";
import fse from "fs-extra";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Getting file 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const teacherImageUplodDirName = path.join(__dirname, "..", "public", "teacher_Image");
const teachersignetureUplodDirName = path.join(__dirname, "..", "public", "teacher_Signeture");

// Ensure the directories exist
fse.ensureDirSync(teacherImageUplodDirName);
fse.ensureDirSync(teachersignetureUplodDirName);

// Configure multer for file upload teacher image
const storageForTeacherImage = multer.diskStorage({
    destination: teacherImageUplodDirName,
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

// Configure multer for file upload teacher signature
const storageForTeacherSigneture = multer.diskStorage({
    destination: teachersignetureUplodDirName,
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

// For upload teacher Image and Signature
const uploadTeacherFiles = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only images and gif are allowed!'), false);
        }
    }
}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'signature', maxCount: 1 }
]);

// For creating teacher
const createTeacher = async (req, res) => {
    const institution_id = req.params.institution_id;

    // Log incoming data for debugging
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);
    console.log("req.params.institution_id:", institution_id);

    if (!institution_id) {
        console.log("Institution Err: ", institution_id);
        return res.status(400).json({ message: "Please provide institution id" });
    }

    const isInstitutionExist = await prisma.institutions.findUnique({
        where: {
            eiin: institution_id
        }
    });

    if (!isInstitutionExist) {
        console.log("Institution does not exist: ", isInstitutionExist);
        return res.status(400).json({ message: "Institution does not exist" });
    };

    try {
        // Destructure form data
        const {
            name_eng,
            name_bng,
            teacher_id,
            teacher_initial,
            email,
            phone_number,
            religion,
            gender,
            date_of_birth,
            present_adress,
            parmanent_adress,
            position,
            blood_group,
            role
        } = req.body;

        console.log("req2: ", req.body);

        // Validate required fields
        if (!name_eng || !name_bng || !teacher_id || !teacher_initial ||
            !email || !phone_number || !date_of_birth || !req.files?.image) {
            console.log("Field required!");
            return res.status(400).json({
                status: 'error',
                message: 'Missing required fields or profile iamge.'
            });
        }

        // Handle file uploads
        const imagePath = req.files.image ? `/teacher_Image/${req.files.image[0].filename}` : null;
        const signaturePath = req.files.signature ? `/teacher_Signeture/${req.files.signature[0].filename}` : null;

        // Move files to correct directories (since we used temporary storage)
        if (req.files.image) {
            const tempPath = req.files.image[0].path;
            const targetPath = path.join(teacherImageUplodDirName, req.files.image[0].filename);
            await fse.move(tempPath, targetPath);
        }
        if (req.files.signature) {
            const tempPath = req.files.signature[0].path;
            const targetPath = path.join(teachersignetureUplodDirName, req.files.signature[0].filename);
            await fse.move(tempPath, targetPath);
        }

        // Create new teacher record
        const newTeacher = await prisma.teachers.create({
            data: {
                institution_id,
                name_eng,
                name_bng,
                teacher_id,
                teacher_initial,
                image: imagePath,
                email,
                phone_number,
                password: teacher_id,
                religion: religion,
                gender: gender,
                date_of_birth: new Date(date_of_birth),
                present_adress,
                parmanent_adress,
                signature: signaturePath,
                position,
                blood_group,
                role: role || 'teacher'
            }
        });

        return res.status(201).json({
            status: 'success',
            message: 'Teacher created successfully',
            data: newTeacher
        });

    } catch (error) {
        console.error('Error creating teacher:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Failed to create teacher',
            error: error.message
        });
    }
};

// Get all teachers
const getAllTeacher = async (req, res) => {
    try {
        const institution_id = req.params.institution_id;
        if (!institution_id) {
            return res.status(400).json({
                status: 'error',
                message: 'Institution ID is required',
                data: null
            });
        }
        const teachers = await prisma.teachers.findMany({
            where: {
                institution_id
            }
        });
        return res.status(200).json({
            status: 'success',
            message: 'Teachers retrieved successfully',
            data: teachers
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error!',
            data: null
        });
    }
}

// get Teacher ID and Teacher Initial availability
const getTeacherIdAndInitialAvailability = async (req, res) => {
    try {
        const { institution_id, teacehr_id, teacher_initial } = req.query;

        if (!institution_id) {
            return res.status(404).json({
                status: 'error',
                message: 'No institution is found.',
            });
        }

        if (!teacehr_id && !teacher_initial) {
            return res.status(404).json({
                status: 'error',
                message: 'No teacher_id and teacher_initial found.',
            });
        }
        // Teacher Id is given
        if (teacehr_id) {
            const teacherIdAvailability = await prisma.teachers.findFirst({
                where: {
                    institution_id: institution_id, teacher_id: teacehr_id,
                },

            });
            if (teacherIdAvailability) {
                return res.status(200).json({
                    status: 'success',
                    message: 'Teacher ID already exists',
                    tid_exist: true,
                });
            }
            res.status(200).json({
                status: 'ok',
                message: 'Teacher ID is available.',
                tid_exist: false,
            })
        }
        // Teacher Initial is given
        if (teacher_initial) {
            const teacherInitialAvailability = await prisma.teachers.findFirst({
                where: {
                    institution_id: institution_id, teacher_initial: teacher_initial,
                },
            });
            if (teacherInitialAvailability) {
                return res.status(200).json({
                    status: 'success',
                    message: 'Teacher Initial already exists.',
                    tinitial_exist: true
                });
            }
            res.status(200).json({
                status: 'ok',
                message: 'Teacher Initial is available.',
                tinitial_exist: false
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
        console.log(err);
    }
}

export {
    createTeacher,
    uploadTeacherFiles,
    getTeacherIdAndInitialAvailability,
    getAllTeacher
};