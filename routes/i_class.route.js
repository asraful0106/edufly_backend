import { Router } from "express";
import { classController } from "../controllers/i_class.controller";

const iClassRouter = Router();

iClassRouter.get("/", classController.getAllClass);
iClassRouter.post("/", classController.createClass);
iClassRouter.patch("/classes/:id", classController.updateClass);
iClassRouter.delete("/classes/:id", classController.deleteClass);

export default iClassRouter;