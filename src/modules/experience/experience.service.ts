import { Exp } from './experience.model';

/* eslint-disable @typescript-eslint/no-explicit-any */
const createExp = async (data: any) => {
  const result = await Exp.create(data);

  return result;
};

const getExp = async () => {
  const result = await Exp.find({});

  return result;
};
const updateExp = async (id: string, data: any) => {
  const result = await Exp.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );

  return result;
};

const deleteExp = async (id: string) => {
  const result = await Exp.deleteOne({ _id: id });

  return result;
};

export const ExpService = {
  createExp,
  getExp,
  updateExp,
  deleteExp,
};
