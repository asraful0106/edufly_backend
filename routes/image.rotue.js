import {Router} from "express";
import { getImage } from "../controllers/image.controller.js";

const imageRouter = Router();

// To handale the post iamge
imageRouter.get('/:image_name', (req, res) => {
    getImage(req, res);
});

export default imageRouter;