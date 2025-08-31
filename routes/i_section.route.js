import { Router } from "express";
import { sectionController } from "../controllers/i_section.controller.js";

const iSectionRouter = Router();

iSectionRouter.get("/", sectionController.getAllSection);
iSectionRouter.post("/", sectionController.createSection);
iSectionRouter.patch("/:id", sectionController.updateSection);
iSectionRouter.delete("/:id", sectionController.deleteSection);
// Optional: replace teaching map in one call
iSectionRouter.put("/:id/teaching", sectionController.replaceTeaching);

export default iSectionRouter;