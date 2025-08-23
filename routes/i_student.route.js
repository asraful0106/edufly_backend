import { Router } from "express";
import { iStudentController } from "../controllers/i_student.controller.js";

const iStudentRouter = Router();

// For getting uniqe status of student id
iStudentRouter.get("/is-available", iStudentController.getStudentAvaiability);
// For Getting all the Student
iStudentRouter.get("/:institution_id", iStudentController.getAllStudent);

export default iStudentRouter;