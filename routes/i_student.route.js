import { Router } from "express";
import { iStudentController } from "../controllers/i_student.controller.js";

const iStudentRouter = Router();

// For getting uniqe status of student id
iStudentRouter.get("/is-available", iStudentController.getStudentAvaiability);
// For Getting all the Student
iStudentRouter.get("/:institution_id", iStudentController.getAllStudent);
//For creating student
iStudentRouter.post("/:institution_id",iStudentController.uploadStudentFiles, iStudentController.createStudent);
//For creating student
iStudentRouter.delete("/delete/:student_id", iStudentController.deleteStudent);
// For updating placement
iStudentRouter.patch("/:id/placement", iStudentController.updatePlacement);


export default iStudentRouter;