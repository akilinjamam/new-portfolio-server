/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from './projects.model';

const createProject = async (data: any) => {
  const result = await Project.create(data);

  return result;
};

const getProject = async () => {
  const result = await Project.find({});

  return result;
};
const updateProject = async (id: string, data: any) => {
  const result = await Project.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true },
  );

  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.deleteOne({ _id: id });

  return result;
};

export const projectService = {
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
