import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { paymentSevice } from './payment.service';

const createSuccess = catchAsync(async (req, res) => {
  const { bookingId } = req.query;

  const result = await paymentSevice.createSuccess(bookingId as string);

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Payment updated successfully',
    data: result,
  });

  const userId = result?.user;
  if (userId) {
    res.redirect(
      `https://level-2-24-assignment-5-client.vercel.app/success?userId=${userId}`,
    );
  }
});

export const paymentController = {
  createSuccess,
};
