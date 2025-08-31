import { Router } from "express";
import { courseController } from "../controllers/i_course.controller";

const iCourseRouter = Router();


iCourseRouter.get("/", courseController.getAllCourse);

iCourseRouter.post("/", courseController.createCourse);

iCourseRouter.patch("/:id", courseController.updateCourse);

iCourseRouter.delete("/:id", courseController.deleteCourse);

export default iCourseRouter;