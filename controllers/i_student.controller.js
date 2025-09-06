import prisma from "../database/db.config.js";
import fse from "fs-extra";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Getting file 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studentImageUplodDirName = path.join(__dirname, "..", "public", "student_Image");
const studentSignetureUplodDirName = path.join(__dirname, "..", "public", "student_Signature");

// Ensure the directories exist
fse.ensureDirSync(studentImageUplodDirName);
fse.ensureDirSync(studentSignetureUplodDirName);

// Configure multer for file upload teacher image
const storageForStudentImage = multer.diskStorage({
    destination: studentImageUplodDirName,
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

// Configure multer for file upload teacher signature
const storageForStudentSigneture = multer.diskStorage({
    destination: studentSignetureUplodDirName,
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

// For upload student Image and Signature
const uploadStudentFiles = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/avif'];
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

// For creating student
const createStudent = async (req, res) => {
    const institution_id = req.params.institution_id;


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

    const batch_id = req.body.batch_id;

    if(!batch_id){
        return res.status(400).json({message: "Batch Id is required!"});
    }

    const isBatchExist = await prisma.batches.findUnique({
        where:{
            id: batch_id
        }
    });

    if(!isBatchExist){
        return res.status(400).json({message: "Batch is not found!"});
    }

    /*

  batch_id         String
  class_roll       String
  name_eng         String
  name_bng         String
  student_id       String
  image            String
  email            String        @unique
  phone_number     String
  password         String
  religion         Religion      @default(islam)
  gender           Gender        @default(male)
  date_of_birth    DateTime
  present_adress   String?
  parmanent_adress String?
  signature        String?
  blood_group      String?
  role             Role     

    */

    try {
        // Destructure form data
        const {
            name_eng,
            name_bng,
            student_id,
            batch_id,
            class_roll,
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

        // Validate required fields
        if (!name_eng || !name_bng || !student_id||
            !email || !phone_number || !date_of_birth || !req.files?.image) {
            console.log("Field required!");
            return res.status(400).json({
                status: 'error',
                message: 'Missing required fields or profile iamge.'
            });
        }

        // Handle file uploads
        const imagePath = req.files.image ? `${req.files.image[0].filename}${path.extname(req.files.image[0].originalname)}` : null;
        // const signaturePath = req.files.signature ? `${req.files.signature[0].filename}${path.extname(req.files.image[0].originalname)}` : null;
        const signaturePath = req.files.signature ? `${req.files.signature[0].filename}${path.extname(req.files.signature[0].originalname)}` : null;

        // Move files to correct directories (since we used temporary storage)
        if (req.files.image) {
            const tempPath = req.files.image[0].path;
            // Extract the file extension from the original filename
            const fileExtension = path.extname(req.files.image[0].originalname);
            const fileNameWithExtensiton = `${req.files.image[0].filename}${fileExtension}`
            // const targetPath = path.join(teacherImageUplodDirName, req.files.image[0].
            // filename);
            const targetPath = path.join(studentImageUplodDirName, fileNameWithExtensiton);
            await fse.move(tempPath, targetPath);
        }
        if (req.files.signature) {
            const tempPath1 = req.files.signature[0].path;
            // Extract the file extension from the original filename
            const fileExtension1 = path.extname(req.files.signature[0].originalname);
            const fileNameWithExtensiton1 = `${req.files.signature[0].filename}${fileExtension1}`
            const targetPath1 = path.join(studentSignetureUplodDirName, fileNameWithExtensiton1);
            await fse.move(tempPath1, targetPath1);
        }

        // Create new student record
        const newTeacher = await prisma.students.create({
            data: {
                institution_id,
                name_eng,
                name_bng,
                student_id,
                batch_id,
                class_roll,
                image: imagePath,
                email,
                phone_number,
                password: student_id,
                religion: religion,
                gender: gender,
                date_of_birth: new Date(date_of_birth),
                present_adress,
                parmanent_adress,
                signature: signaturePath,
                position,
                blood_group,
                role: role || 'student'
            }
        });

        return res.status(201).json({
            status: 'success',
            message: 'Student created successfully',
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

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const { student_id } = req.params;
        const { institution_id } = req.body;

        if (!student_id && institution_id) {
            return res.status(400).json({
                status: 'error',
                message: 'Student and institution ID is required'
            });
        }

        console.log(student_id, institution_id);

        await prisma.students.delete({
            where: {
                institution_id,
                id: teacher_id
            }
        });

        res.status(200).json({
            success: true,
            status: 'success',
            message: 'Student deleted successfully'
        });

    } catch (err) {
        console.error('Error creating teacher:', err);
        return res.status(500).json({
            success: false,
            status: 'error',
            message: 'Failed to delete teacher',
            error: err.message
        });
    }
}

// Get all student
const getAllStudent = async (req, res) => {
    try {
        const institution_id = req.params.institution_id;
        if (!institution_id) {
            return res.status(400).json({
                status: 'error',
                message: 'Institution ID is required',
                data: null
            });
        }
        const students = await prisma.students.findMany({
            where: { institution_id },
            select: {
                id: true,
                name_eng: true,
                name_bng: true,
                student_id: true,
                batch_id: true,
                class_id: true,
                section_id: true,
                class_roll: true,
                email: true,
                image: true,
                phone_number: true,
                date_of_birth: true,
                religion: true,
                gender: true,
                present_adress: true,
                parmanent_adress: true,
                blood_group: true,
                status: true,
                role: true,
                created_at: true,
                // grab only the code from the related batch
                batch: {
                    select: { batch_code: true },
                },
            },
        });
        return res.status(200).json({
            status: 'success',
            message: 'Student retrieved successfully',
            data: students
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 'error',
            message: 'Internal Server Error!',
            data: null
        });
    }
}

const getStudentAvaiability = async (req, res) => {
    try {
        const { institution_id, student_id } = req.body;

        if (!institution_id) {
            return res.status(400).json({
                status: "error",
                message: "Institution id is not porvided."
            });
        }

        if (!student_id) {
            return res.status(400).json({
                status: "error",
                message: "Student Id is required!"
            });
        }

        const studentIdAvaiability = await prisma.students.findFirst({
            where: {
                institution_id,
                student_id
            }
        });

        if (studentIdAvaiability) {
            return res.status(200).json({
                status: "success",
                message: "Student Id is already exist",
                sid_exist: true
            });
        }

        res.status(200).json({
            status: "ok",
            message: "Student Id is avialable.",
            sid_exist: false
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            messgae: "Internal Server Error!"
        });
    }
}

const updatePlacement = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await prisma.students.findUnique({ where: { id } });
        if (!student) return res.status(404).json({ message: "Student not found." });

        const { batch_id, class_id, section_id } = await validatePlacement({
            institution_id: student.institution_id,
            batch_id: req.body.batch_id,
            class_id: req.body.class_id,
            section_id: req.body.section_id,
        });

        const updated = await prisma.students.update({
            where: { id },
            data: {
                batch_id: batch_id ?? student.batch_id,
                class_id: class_id ?? null,
                section_id: section_id ?? null,
            },
            include: {
                batch: { select: { id: true, batch_code: true } },
                class: {
                    select: {
                        id: true,
                        title: true,
                        batch_code: true,
                        course: { select: { id: true, title: true, course_code: true } },
                    },
                },
                section: { select: { id: true, section_name: true } },
            },
        });

        res.json({ status: "success", data: updated });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

const getMe = async (req, res) => {
    const { student_id } = req.query;
    if(!student_id){
        return res.status(404).json({message: "Student id is required!"});
    }
    const studentInfo = await prisma.students.findUnique({
        where: {
            id: student_id
        }
    });

    if(!studentInfo){
        return res.status(400).json({
            message: "Student not found!"
        })
    }

    res.status(200).json({
        status: true,
        message: "Student retirve successfully!",
        data: studentInfo
    });
}

export const iStudentController = {
    getStudentAvaiability,
    getAllStudent,
    deleteStudent,
    createStudent,
    uploadStudentFiles,
    updatePlacement,
    getMe
}