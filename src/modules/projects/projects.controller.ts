import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { projectService } from './projects.service';

const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProject(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project is created successfully',
    data: result,
  });
});
const getProject = catchAsync(async (req, res) => {
  const result = await projectService.getProject();

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project is found successfully',
    data: result,
  });
});
const deleteProjects = catchAsync(async (req, res) => {
  const result = await projectService.deleteProject(req?.params?.id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project is deleted successfully',
    data: result,
  });
});

const updateProjects = catchAsync(async (req, res) => {
  const result = await projectService.updateProject(req?.params?.id, req?.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Project is updated successfully',
    data: result,
  });
});

export const projectController = {
  createProject,
  getProject,
  deleteProjects,
  updateProjects,
};
