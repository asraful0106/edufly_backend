import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import {
    getMe,
    updateMe,
    uploadAvatar,
    uploadSignature,
    changePassword,
    addDegree,
    updateDegree,
    deleteDegree,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    uploadSingle,
} from "../controllers/i_teacher_profile.controller.js";

const iTeacherProfileRoute = Router();

// /* Optional: serve public files (if not already in your app.js/server.js) */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// router.use(
//     "/public",
//     express.static(path.join(__dirname, "..", "public"), { maxAge: "7d", index: false })
// );

/* -------- profile -------- */
iTeacherProfileRoute.get("/me", getMe);
iTeacherProfileRoute.patch("/me/:id", updateMe);

/* -------- uploads (same dirs as creation) -------- */
iTeacherProfileRoute.post("/me/:id/avatar", uploadSingle, uploadAvatar);
iTeacherProfileRoute.post("/me/:id/signature", uploadSingle, uploadSignature);

/* -------- password -------- */
iTeacherProfileRoute.post("/me/:id/password", changePassword);

/* -------- degrees -------- */
iTeacherProfileRoute.post("/me/:id/degrees", addDegree);
iTeacherProfileRoute.patch("/me/:id/degrees/:degId", updateDegree);
iTeacherProfileRoute.delete("/me/:id/degrees/:degId", deleteDegree);

/* -------- achievements -------- */
iTeacherProfileRoute.post("/me/:id/achievements", addAchievement);
iTeacherProfileRoute.patch("/me/:id/achievements/:achId", updateAchievement);
iTeacherProfileRoute.delete("/me/:id/achievements/:achId", deleteAchievement);

export default iTeacherProfileRoute;
