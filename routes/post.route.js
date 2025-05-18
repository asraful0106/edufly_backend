import { Router } from 'express';
import { createPost } from '../controllers/post.controller.js';

const postRouter = Router();

// For getting the post
postRouter.get('/', (req, res) =>{

});

// For posting the post
postRouter.post('/', async(req, res) => {
    createPost(req, res);
});

export default postRouter;