import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { ExpService } from './experience.service';

const createExp = catchAsync(async (req, res) => {
  const result = await ExpService.createExp(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Exp is created successfully',
    data: result,
  });
});
const getExp = catchAsync(async (req, res) => {
  const result = await ExpService.getExp();

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Exp is found successfully',
    data: result,
  });
});
const deleteExps = catchAsync(async (req, res) => {
  const result = await ExpService.deleteExp(req?.params?.id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Exp is deleted successfully',
    data: result,
  });
});

const updateExps = catchAsync(async (req, res) => {
  const result = await ExpService.updateExp(req?.params?.id, req?.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Exp is updated successfully',
    data: result,
  });
});

export const ExpController = {
  createExp,
  getExp,
  deleteExps,
  updateExps,
};
