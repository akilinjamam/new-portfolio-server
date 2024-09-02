/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { bookingService } from './booking.service';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../app/config';
// @ts-ignore
import SSLCommerzPayment from 'sslcommerz-lts';
import User from '../user/user.model';
import { v4 as uuidv4 } from 'uuid';

const createBooking = catchAsync(async (req, res) => {
  const result = await bookingService.createBooking(req.body);

  const findUser = await User.findById(req.body.user);
  const generateUniqueId = uuidv4();
  const data = {
    total_amount: 100,
    currency: 'BDT',
    tran_id: generateUniqueId, // use unique tran_id for each api call
    success_url: `https://level-2-24-assignment-3.vercel.app/api/success?bookingId=${result?._id}`,
    fail_url: 'http://localhost:3030/fail',
    cancel_url: 'http://localhost:3030/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: findUser?.name,
    cus_email: findUser?.email,
    cus_add1: findUser?.address,
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: findUser?.phone,
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };

  const is_live = false;

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Booking created successfully',
    data: result,
  });

  try {
    const sslcz = new SSLCommerzPayment(
      config.store_id,
      config.store_pass,
      is_live,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sslcz.init(data).then((apiResponse: any) => {
      // Redirect the user to payment gateway
      const GatewayPageURL = apiResponse.GatewayPageURL;
      res.send({ url: GatewayPageURL });

      // console.log("Redirecting to: ", GatewayPageURL);
    });
  } catch (error) {
    console.log(error);
  }
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
