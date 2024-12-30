import mongoose, { Schema } from 'mongoose';
import { TBlogs } from './blog.constant';

const blogSchema = new Schema<TBlogs>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String },
});

export const Blog = mongoose.model<TBlogs>('Blog', blogSchema);
