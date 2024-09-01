import mongoose from 'mongoose';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Slot } from '../slot/slot.model';
import { Room } from '../room/room.model';
import { AppError } from '../../app/errors/AppError';
import { StatusCodes } from 'http-status-codes';

const createBooking = async (payload: TBooking) => {
  const { date, slots, room, user } = payload;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const findRoom = await Room.findById(room).select('pricePerSlot');
    await Slot.updateMany({ _id: slots }, { isBooked: true });
    const totalPrice = (findRoom?.pricePerSlot as number) * slots.length;
    const bookings = new Booking({
      date,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      slots: slots?.map((slot: any) => new mongoose.Types.ObjectId(slot)),
      room: new mongoose.Types.ObjectId(room),
      user: new mongoose.Types.ObjectId(user),
      totalAmount: totalPrice,
      isConfirmed: 'unconfirmed',
      isDeleted: false,
    });

    await bookings.save();

    const populateBooking = await Booking.findById(bookings._id)
      .populate('slots')
      .populate('room')
      .populate('user');

    await session.commitTransaction();
    await session.endSession();

    return populateBooking;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(StatusCodes.BAD_REQUEST, 'Failed!!');
  }
};

const getAllBookings = async () => {
  const result = await Booking.find({ isDeleted: false })
    .populate('slots')
    .populate('room')
    .populate('user');

  return result;
};

const updateBookings = async (id: string, payload: Record<string, unknown>) => {
  const result = await Booking.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteBookings = async (id: string) => {
  const result = await Booking.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const bookingService = {
  createBooking,
  getAllBookings,
  updateBookings,
  deleteBookings,
};
