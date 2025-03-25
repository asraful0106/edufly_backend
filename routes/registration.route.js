import { Router } from "express";
import { newRegistration } from "../controllers/registration.controller.js";

const registerRouter = Router();

// For Registaring a new Instuteation
registerRouter.post("/", async (req, res) => {
    newRegistration(req, res);// calling the function for registration
});

export default registerRouter;