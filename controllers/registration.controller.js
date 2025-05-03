import prisma from "../database/db.config.js";
import { InstitutionType } from "@prisma/client";
import fse from 'fs-extra';
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

// Getting file 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const regUplodDirName = path.join(__dirname, "..", "public", "reg_uploads");

// Ensure the directory exist
fse.ensureDirSync(regUplodDirName);

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: regUplodDirName,
    filename: (reg, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

const newRegistration = async (req, res) => {
    // Implementation for new registration
    upload.single('document_proof')(req, res, async (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ messege: "Failed to uplod file!" });
        }
        if (!req.file) {
            return res.status(400).json({ messege: "Unable to get the file." });
        }

        // Getting the data from user
        const { eiin, name_eng, name_bng, phone_number, email } = req.body;

        if (!eiin) {
            const uuid = crypto.randomBytes(6).toString('hex');
            // set when client has no eiin number
            eiin = uuid;
        }

        // Return error if all the information is not given
        if (!name_eng || !name_bng || !phone_number || !email) {
            return req.status(424).json({ messege: "All the information is needed!" });
        }

        const image_path = req.file.filename;

        try {
            const institution = await prisma.institutions.create({
                data: {
                    eiin,
                    name_eng,
                    name_bng,
                    phone_number,
                    email,
                    document_proof: image_path
                }
            });
            return res.status(201).json({ institution });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ messege: "Inernal Server Error!" });
        }
    });
};

const registerationInfo = async (req, res) => {

    // Function to transform using regex replacements
    const transformWithRegex = (value) => {
        // Use regex to replace substrings dynamically based on patterns
        return value
            .replace(/school__college/, "School & College")   // Replace school__college
            .replace(/school/, "School")                      // Replace school
            .replace(/college/, "College")                    // Replace college
            .replace(/madrasha/, "Madrasha")                  // Replace madrasha
            .replace(/coaching_center/, "Coaching Center")    // Replace coaching_center
            .replace(/primary_School/, "Primary School")      // Replace primary_school
            .replace(/others/, "Others");                     // Replace others
    };

    // Convert data dynamically using the regex-based function
    const instutation_type = Object.values(InstitutionType).map(transformWithRegex);

    res.status(200).json(instutation_type);
};

export { newRegistration, registerationInfo };