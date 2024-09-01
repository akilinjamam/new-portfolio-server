import { Booking } from '../booking/booking.model';

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
};
