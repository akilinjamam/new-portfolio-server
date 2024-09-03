import QueryBuilder from '../../middleware/queryBuilder';
import { searchableFields } from './room.constant';
import { TRoom } from './room.interface';
import { Room } from './room.model';

const createRoom = async (payload: TRoom) => {
  // room data will be added here.
  const result = await Room.create(payload);
  return result;
};

const getSingleRoom = async (id: string) => {
  const result = await Room.findById(id);

  return result;
};
const getAllRoom = async (query: Record<string, unknown>) => {
  const roomQuery = new QueryBuilder(Room.find({ isDeleted: false }), query)
    .search(searchableFields)
    .filter()
    .sort()
    .pagination()
    .fields();

  const meta = await roomQuery.countTotal();
  const data = await roomQuery.modelQuery;

  return {
    meta,
    data,
  };
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
