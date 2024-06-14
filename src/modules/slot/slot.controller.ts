import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { slotService } from './slot.service';

const createSlot = catchAsync(async (req, res) => {
  const result = await slotService.createSlot(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Slots created successfully',
    data: result,
  });
});
const getAllSlot = catchAsync(async (req, res) => {
  const result = await slotService.getAllSlots(req.query);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const slotController = {
  createSlot,
  getAllSlot,
};
