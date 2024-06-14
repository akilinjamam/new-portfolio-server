import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { bookingService } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBooking(req.body);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
};
