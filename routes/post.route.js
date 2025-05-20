import { Router } from 'express';
import { createPost, deleteOnePost, getAllPost, updatePost } from '../controllers/post.controller.js';

const postRouter = Router();

// For getting the post
postRouter.get('/:eiin_id', async (req, res) => {
    getAllPost(req, res);
});

// For creating the post
postRouter.post('/', async (req, res) => {
    createPost(req, res);
});

// For updating post
postRouter.put('/:post_id', async (req, res) => {
    updatePost(req, res);
});

// For deleting post
postRouter.delete('/:post_id', async (req, res) => {
    deleteOnePost(req, res);
});

export default postRouter;