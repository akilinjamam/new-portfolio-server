import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { bookingService } from './booking.service';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../app/config';

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBooking(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const token = req?.headers?.authorization;
  const mainToken = token?.split(' ')[1];

  const decoded = jwt.verify(
    mainToken as string,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  const { role } = decoded;

  const alteredMessage =
    role === 'admin'
      ? 'All bookings retrieved successfully'
      : 'User bookings retrieved successfully';

  const result = await bookingService.getAllBookings();

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: alteredMessage,
    data: result,
  });
});

const updateBooking = catchAsync(async (req, res) => {
  const result = await bookingService.updateBookings(
    req?.params?.id,
    req?.body,
  );

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Booking updated successfully',
    data: result,
  });
});

const deleteBooking = catchAsync(async (req, res) => {
  const result = await bookingService.deleteBookings(req?.params?.id);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Booking deleted successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getAllBookings,
  updateBooking,
  deleteBooking,
};
