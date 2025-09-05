import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/auth.js';


const authRouter = Router();
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/me', requireAuth, authController.me);


export default authRouter;