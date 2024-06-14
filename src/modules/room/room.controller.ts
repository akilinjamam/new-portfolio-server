import { StatusCodes } from 'http-status-codes';
import sendRespone from '../../app/utils/sendRespone';
import catchAsync from '../../app/utils/catchAsync';
import { roomService } from './room.service';

const createRoom = catchAsync(async (req, res) => {
  const result = await roomService.createRoom(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Room added successfully',
    data: result,
  });
});

const getSingleRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await roomService.getSingleRoom(id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Room retrieved successfully',
    data: result,
  });
});

const getAllRoom = catchAsync(async (req, res) => {
  const result = await roomService.getAllRoom();

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Room retrieved successfully',
    data: result,
  });
});

const updateRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await roomService.updateRoom(id, req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Room updated successfully',
    data: result,
  });
});
const deleteRoom = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await roomService.deleteRoom(id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Room deleted successfully',
    data: result,
  });
});

export const roomController = {
  createRoom,
  getSingleRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};
