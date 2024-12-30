/* eslint-disable @typescript-eslint/no-explicit-any */

import { Skill } from './skills.model';

const createSkill = async (data: any) => {
  const result = await Skill.create(data);

  return result;
};

const getSkill = async () => {
  const result = await Skill.find({});

  return result;
};
const updateSkill = async (id: string, data: any) => {
  const result = await Skill.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );

  return result;
};

const deleteSkill = async (id: string) => {
  const result = await Skill.deleteOne({ _id: id });

  return result;
};

export const skillService = {
  createSkill,
  getSkill,
  updateSkill,
  deleteSkill,
};
