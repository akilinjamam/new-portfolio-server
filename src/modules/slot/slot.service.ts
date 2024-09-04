import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../app/errors/AppError';
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

const updateSlots = async (payload: Record<string, unknown>) => {
  const { oldDate, room, newDate } = payload;
  const findUpdatableSlotIdsAccordingToRoomAndDate = await Slot.find({
    date: oldDate,
    room: room,
  });

  const allUpdatableSlotIds = findUpdatableSlotIdsAccordingToRoomAndDate.map(
    (item) => item._id,
  );

  // check new date is available or not

  const checkAvailableDateForSlot = await Slot.findOne({ date: newDate });

  if (checkAvailableDateForSlot) {
    throw new AppError(
      StatusCodes.FORBIDDEN,
      'Sorry this Date is Already booked for another meeting room',
    );
  }

  const result = await Slot.updateMany(
    { _id: { $in: allUpdatableSlotIds } },
    { $set: { date: newDate } },
  );

  return result;
};

const deleteSlot = async (id: string) => {
  const result = await Slot.deleteOne({ _id: id });

  return result;
};

export const slotService = {
  createSlot,
  getAllSlots,
  updateSlots,
  deleteSlot,
};
