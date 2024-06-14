import mongoose from 'mongoose';

export type TBooking = {
  date: string;
  slots: mongoose.Types.ObjectId[];
  room: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  totalAmount?: number;
  isConfirmed?: 'confirmed' | 'unconfirmed' | 'canceled';
  isDeleted?: boolean;
};
