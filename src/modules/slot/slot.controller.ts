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

  if (result?.length === 0 || !result) {
    return sendRespone(res, {
      success: false,
      statusCode: StatusCodes.NOT_FOUND,
      message: 'No Data Found',
      data: [],
    });
  }

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});
const updateSlot = catchAsync(async (req, res) => {
  const bodyData = req.body;
  const result = await slotService.updateSlots(bodyData);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'slot date updated successfully',
    data: result,
  });
});

const deleteSlot = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await slotService.deleteSlot(id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'slot date deleted successfully',
    data: result,
  });
});

export const slotController = {
  createSlot,
  getAllSlot,
  updateSlot,
  deleteSlot,
};
