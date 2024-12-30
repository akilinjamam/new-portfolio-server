import { Blog } from './blog.model';

/* eslint-disable @typescript-eslint/no-explicit-any */
const createBlog = async (data: any) => {
  const result = await Blog.create(data);

  return result;
};

const getBlogs = async () => {
  const result = await Blog.find({});

  return result;
};
const updateBlogs = async (id: string, data: any) => {
  const result = await Blog.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );

  return result;
};

const deleteBlogs = async (id: string) => {
  const result = await Blog.deleteOne({ _id: id });

  return result;
};

export const blogService = {
  createBlog,
  getBlogs,
  updateBlogs,
  deleteBlogs,
};
