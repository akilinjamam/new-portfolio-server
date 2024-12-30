import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { skillService } from './skills.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkill(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill is created successfully',
    data: result,
  });
});
const getSkill = catchAsync(async (req, res) => {
  const result = await skillService.getSkill();

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill is found successfully',
    data: result,
  });
});
const deleteSkills = catchAsync(async (req, res) => {
  const result = await skillService.deleteSkill(req?.params?.id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill is deleted successfully',
    data: result,
  });
});

const updateSkills = catchAsync(async (req, res) => {
  const result = await skillService.updateSkill(req?.params?.id, req?.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Skill is updated successfully',
    data: result,
  });
});

export const skillController = {
  createSkill,
  getSkill,
  deleteSkills,
  updateSkills,
};
