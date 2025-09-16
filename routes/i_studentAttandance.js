// routes/i_studentAttandance.js
import { Router } from "express";
import { studentAttendanceController } from "../controllers/i_studentAttendance.controller.js";

const iStudentAttandance = Router();

// ---------- lookups for a teacher ----------
iStudentAttandance.get("/lookups", studentAttendanceController.getLookup);

// ---------- helper: available courses for a scope ----------
iStudentAttandance.get("/available-courses", studentAttendanceController.getAvailableCourse);

// ---------- roster ----------
iStudentAttandance.get("/roster", studentAttendanceController.getRoster);

// ---------- save / upsert ----------
iStudentAttandance.post("/save", studentAttendanceController.save);

// ---------- analytics ----------
iStudentAttandance.get("/analytics", studentAttendanceController.analytics);

export default iStudentAttandance;
