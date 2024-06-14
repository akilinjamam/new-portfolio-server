import { TRoom } from './room.interface';
import { Room } from './room.model';

const createRoom = async (payload: TRoom) => {
  const result = await Room.create(payload);

  return result;
};

const getSingleRoom = async (id: string) => {
  const result = await Room.findById(id);

  return result;
};
const getAllRoom = async () => {
  const result = await Room.find({ isDeleted: false });

  return result;
};
const updateRoom = async (id: string, payload: Partial<TRoom>) => {
  const result = await Room.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteRoom = async (id: string) => {
  const result = await Room.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};

export const roomService = {
  createRoom,
  getSingleRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};
