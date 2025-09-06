import { Router } from "express";
import { iStudentProfileController } from "../controllers/i_student_profile.controller.js";

const iStudentProfileRouter = Router();

iStudentProfileRouter.get("/me", iStudentProfileController.getMe);
iStudentProfileRouter.patch("/me",
    iStudentProfileController.uploadStudentFiles,
    iStudentProfileController.updateMe
);
iStudentProfileRouter.post("/change-password", iStudentProfileController.changePassword);

export default iStudentProfileRouter;
