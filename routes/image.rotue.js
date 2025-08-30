import {Router} from "express";
import {imageController} from "../controllers/image.controller.js"

const imageRouter = Router();

// To handale the post iamge
imageRouter.get('/:image_name', (req, res) => {
    getImage(req, res);
});
// To handale the teacher iamge
imageRouter.get('/teacher/:image_name', imageController.getTeacherImage);
// To handale the teacher signeture iamge
imageRouter.get('/teacher-signeture/:image_name', imageController.getTeacherSignetureImage);
// To handale the student iamge
imageRouter.get('/student/:image_name', imageController.getStudentImage);
// To handale the student signeture iamge
// imageRouter.get('/student-signeture/:image_name', imageController.getStudentSignetureImage);

export default imageRouter;