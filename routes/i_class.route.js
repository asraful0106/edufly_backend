import { Router } from "express";
import { classController } from "../controllers/i_class.controller.js";

const iClassRouter = Router();

iClassRouter.get("/", classController.getAllClass);
iClassRouter.post("/", classController.createClass);
iClassRouter.patch("/:id", classController.updateClass);
iClassRouter.delete("/:id", classController.deleteClass);

export default iClassRouter;