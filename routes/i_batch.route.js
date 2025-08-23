import { Router } from "express";
import { iBatchController } from "../controllers/i_batch.controller.js";

const iBatchRoute = Router();

// For getting all Batch
iBatchRoute.get("/", iBatchController.getAllBatchCode);
// For creating new batch
iBatchRoute.post("/", iBatchController.createNewBatch);
// For cheking is batch code is unique
iBatchRoute.get("/is-available", iBatchController.isBatchUnique);

export default iBatchRoute;