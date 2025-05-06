import { Router } from 'express';
import { eiiSearch } from '../controllers/search.controller.js';

const searchRouter = Router();

searchRouter.get('/eiin/:id', async (req, res) =>{
    eiiSearch(req, res);
});

export default searchRouter;