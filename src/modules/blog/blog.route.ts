import express from 'express';
import { blogController } from './blog.controller';

const route = express.Router();

route.post('/create-blog', blogController.createBlog);
route.get('/', blogController.getBlog);
route.patch('/:id', blogController.updateBlogs);
route.patch('/:id', blogController.deleteBlogs);

export const blogRouter = route;
