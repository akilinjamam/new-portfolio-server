import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { blogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlog(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog is created successfully',
    data: result,
  });
});
const getBlog = catchAsync(async (req, res) => {
  const result = await blogService.getBlogs();

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog is found successfully',
    data: result,
  });
});
const deleteBlogs = catchAsync(async (req, res) => {
  const result = await blogService.deleteBlogs(req?.params?.id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog is deleted successfully',
    data: result,
  });
});

const updateBlogs = catchAsync(async (req, res) => {
  const result = await blogService.updateBlogs(req?.params?.id, req?.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Blog is updated successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  getBlog,
  deleteBlogs,
  updateBlogs,
};
