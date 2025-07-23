import { Router } from "express";
import { createTeacher, getTeacherIdAndInitialAvailability, uploadTeacherFiles } from "../controllers/i_teacher.controller.js";

const iTeacherRouter = Router();

// For creating a teacher (POST)
iTeacherRouter.post('/:institution_id', uploadTeacherFiles, createTeacher);
// For checking the teacher's id and initial availability (GET)
iTeacherRouter.get('/isAvailable', getTeacherIdAndInitialAvailability);

export default iTeacherRouter;