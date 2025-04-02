import prisma from "../database/db.config.js";
import { Instutation_type } from "@prisma/client";

const newRegistration = async (req, res) => {
    // Implementation for new registration
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
    const instutation_type = Object.values(Instutation_type).map(transformWithRegex);
    
    res.status(200).json(instutation_type);
};

export { newRegistration, registerationInfo };