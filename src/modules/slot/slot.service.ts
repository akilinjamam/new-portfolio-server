import mongoose from 'mongoose';
import { TSlot } from './slot.interface';
import { Slot } from './slot.model';
import { convertToMinutes, convertToTimeString } from './slot.utils';

const createSlot = async (payload: TSlot) => {
  const { room, date, startTime, endTime } = payload;

  const durationOfSlot = 60;

  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);

  const totalTimeDuration = endMinutes - startMinutes;

  const slotNumber = totalTimeDuration / durationOfSlot;

  const slots = [];

  for (let i = 0; i < slotNumber; i++) {
    const slotStartMinutes = startMinutes + i * durationOfSlot;
    const slotEndMinutes = slotStartMinutes + durationOfSlot;

    const slot = {
      room,
      date,
      startTime: convertToTimeString(slotStartMinutes),
      endTime: convertToTimeString(slotEndMinutes),
      isBooked: false,
    };

    slots.push(slot);
  }

  const result = await Slot.insertMany(slots);

  return result;
};

const getAllSlots = async (query: Record<string, unknown>) => {
  const { date, roomId } = query;
  let option;

  if (date && roomId) {
    const queryData = {
      $and: [{ date: date }, { room: roomId }],
    };
    option = queryData;
  } else {
    option = {};
  }

  const result = await Slot.find({ isBooked: false })
    .find(option)
    .populate('room');
  return result;
};

export const slotService = {
  createSlot,
  getAllSlots,
};
