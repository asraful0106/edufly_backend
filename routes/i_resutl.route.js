import { Router } from "express";
import { resutlController } from "../controllers/i_result.controller.js";

const resultRouter = Router();
const now = () => new Date();

// ----- Lookups (courses, exam types) -----
resultRouter.get("/lookups", resutlController.getLookup);
// ----- List results with filters -----
resultRouter.get("/", resutlController.getResult);
// ----- Approve (publish) -----
resultRouter.post("/:id/approve", resutlController.approveResutl);
// ----- Reject -----
resultRouter.post("/:id/reject", resutlController.rejectResult);
// ----- Delete (result + approvals) -----
resultRouter.delete("/:id", resutlController.deleteResult);
// ----- Bulk actions -----
resultRouter.post("/bulk", resutlController.bulkAction);

export default resultRouter;
