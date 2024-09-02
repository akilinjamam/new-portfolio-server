/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { paymentSevice } from './payment.service';
import config from '../../app/config';
// @ts-ignore
import SSLCommerzPayment from 'sslcommerz-lts';

const makePayment = catchAsync(async (req, res) => {
  const store_id = config.store_id;
  const store_passwd = config.store_pass;
  const is_live = false;
  console.log(store_id);
  console.log(store_passwd);

  const result = await paymentSevice.makePayment(req.body);

  try {
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sslcz.init(result).then((apiResponse: any) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      // res.send({ url: GatewayPageURL });
      console.log('Redirecting to: ', GatewayPageURL);

      sendRespone(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Payment created successfully',
        data: GatewayPageURL,
      });
    });
  } catch (error) {
    console.log('error is :', error);
  }
});
const createSuccess = catchAsync(async (req, res) => {
  const { bookingId } = req.query;

  const result = await paymentSevice.createSuccess(bookingId as string);

  // sendRespone(res, {
  //   success: true,
  //   statusCode: StatusCodes.OK,
  //   message: 'Payment updated successfully',
  //   data: result,
  // });

  if (result?.user) {
    res.redirect(
      `https://level-2-24-assignment-5-client.vercel.app/success?userId=${result?.user}`,
    );
  }
});

export const paymentController = {
  createSuccess,
  makePayment,
};
