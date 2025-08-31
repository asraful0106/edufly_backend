import { Router } from "express";
import { iBatchController } from "../controllers/i_batch.controller.js";

const iBatchRoute = Router();

// For getting all Batch
iBatchRoute.get("/", iBatchController.getAllBatchCode);
// For creating new batch
iBatchRoute.post("/", iBatchController.createNewBatch);
// For cheking is batch code is unique
iBatchRoute.get("/is-available", iBatchController.isBatchUnique);
// For updating the batch
r.patch("/:id", iBatchController.updateBatch);
// For deleting the batch
r.delete("/:id", iBatchController.deleteBatch);


export default iBatchRoute;