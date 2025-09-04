// backend/src/routes/teacher_results.routes.js
import { Router } from "express";
import prisma from "../database/db.config.js";
import { teacherReultController } from "../controllers/i_teacher_results.controller.js";

const iTeacherResult = Router();
// ------------------ Lookups ------------------
iTeacherResult.get("/lookups", teacherReultController.getLookup);

// Mark segments (per course)
iTeacherResult.get("/segments", teacherReultController.getSegment);

// ------------------ Roster + existing marks ------------------
iTeacherResult.get("/roster", teacherReultController.getRoster);

// ------------------ Save Draft ------------------
iTeacherResult.post("/save-draft", teacherReultController.save);

// ------------------ Submit for Publication ------------------
iTeacherResult.post("/submit", teacherReultController.submit);

// ------------------ Teacher's own list ------------------
iTeacherResult.get("/mine", teacherReultController.getMine);

export default iTeacherResult;
