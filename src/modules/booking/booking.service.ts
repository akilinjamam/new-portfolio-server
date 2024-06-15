import mongoose from 'mongoose';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Slot } from '../slot/slot.model';
import { Room } from '../room/room.model';

const createBooking = async (payload: TBooking) => {
  const { date, slots, room, user } = payload;

  const findRoom = await Room.findById(room).select('pricePerSlot');
  await Slot.updateMany({ _id: slots }, { isBooked: true });
  const totalPrice = (findRoom?.pricePerSlot as number) * slots.length;
  const bookings = new Booking({
    date,
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

  return populateBooking;
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
