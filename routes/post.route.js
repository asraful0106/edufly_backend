import { Router } from 'express';
import { createPost, getAllPost } from '../controllers/post.controller.js';

const postRouter = Router();

// For getting the post
postRouter.get('/:eiin_id', async(req, res) =>{
    getAllPost(req, res);
});

// For creating the post
postRouter.post('/', async(req, res) => {
    createPost(req, res);
});

export default postRouter;