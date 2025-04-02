import { Router } from "express";
import { newRegistration, registerationInfo } from "../controllers/registration.controller.js";

const registerRouter = Router();

// For Registaring a new Instuteation
registerRouter.post("/", async (req, res) => {
    newRegistration(req, res);// calling the function for registration
});

registerRouter.get("/info", async(req, res) =>{
    registerationInfo(req, res);
});

export default registerRouter;