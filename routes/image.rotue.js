import {Router} from "express";
import { getImage, getTeacherImage, getTeacherSignetureImage } from "../controllers/image.controller.js";

const imageRouter = Router();

// To handale the post iamge
imageRouter.get('/:image_name', (req, res) => {
    getImage(req, res);
});
// To handale the teacher iamge
imageRouter.get('/teacher/:image_name', getTeacherImage);
// To handale the teacher signeture iamge
imageRouter.get('/teacher-signeture/:image_name', getTeacherSignetureImage);

export default imageRouter;