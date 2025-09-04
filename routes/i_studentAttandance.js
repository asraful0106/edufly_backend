import { Router } from "express";
import prisma from "../database/db.config.js";
import { studentAttendanceController } from "../controllers/i_sutdent.controller.js";

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
