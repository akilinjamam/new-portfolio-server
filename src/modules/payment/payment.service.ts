import { Booking } from '../booking/booking.model';
import { IPaymentData } from './payment.interface';
import { v4 as uuid } from 'uuid';

const makePayment = async (bodyData: IPaymentData) => {
  console.log(bodyData);

  const generateUniqueId = uuid();

  const booking = await Booking.findById('66d549f0d3d6e48c82c8ae72');

  const demoId = '1234';

  const data = {
    total_amount: bodyData.total_amount,
    currency: 'BDT',
    tran_id: generateUniqueId,
    success_url: `https://level-2-24-assignment-3.vercel.app/api/success?bookingId=${booking?._id}`,
    fail_url: `https://level-2-24-assignment-3.vercel.app/api/success?bookingId=${demoId}`,
    cancel_url: 'http://localhost:5000/api/v1/payment/cancel',
    ipn_url: 'http://localhost:3030/ipn',
    shipping_method: 'Courier',
    product_name: 'room service.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: bodyData.CUS_name,
    cus_email: bodyData.CUS_email,
    cus_add1: bodyData.CUS_add1,
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '4000',
    cus_country: 'Bangladesh',
    cus_phone: bodyData.CUS_phone,
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };

  return data;
};
const createSuccess = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(
    id,
    { isConfirmed: 'confirmed' },
    { new: true, runValidators: true },
  );

  return result;
};

export const paymentSevice = {
  createSuccess,
  makePayment,
};
