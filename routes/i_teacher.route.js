import { Router } from "express";
import { createTeacher, deleteTeacher, getAllTeacher, getTeacherIdAndInitialAvailability, uploadTeacherFiles } from "../controllers/i_teacher.controller.js";

const iTeacherRouter = Router();



// For checking the teacher's id and initial availability (GET)
iTeacherRouter.get('/isAvailable', getTeacherIdAndInitialAvailability);
// For deleting the teacher
iTeacherRouter.delete('/delete/:teacher_id', deleteTeacher);
// For Getting all the Teacher
// iTeacherRouter.get("/:institution_id", getAllTeacher);
iTeacherRouter.get("/", getAllTeacher);
// For creating a teacher (POST)
iTeacherRouter.post('/:institution_id', uploadTeacherFiles, createTeacher);

export default iTeacherRouter;