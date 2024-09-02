// import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
// import sendRespone from '../../app/utils/sendRespone';
import { paymentSevice } from './payment.service';

const createSuccess = catchAsync(async (req, res) => {
  const { bookingId } = req.query;

  await paymentSevice.createSuccess(bookingId as string);

  res.redirect('https://level-2-24-assignment-5-client.vercel.app/success');

  // const userId = result?.user;
  // if (userId) {
  //   res.redirect(
  //     `https://level-2-24-assignment-5-client.vercel.app/success?userId=${userId}`,
  //   );
  // }

  // sendRespone(res, {
  //   success: true,
  //   statusCode: StatusCodes.OK,
  //   message: 'Payment updated successfully',
  //   data: result,
  // });
});

export const paymentController = {
  createSuccess,
};
