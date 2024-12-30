import mongoose, { Schema } from 'mongoose';
import { TProject } from './projects.constant';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
});

export const Project = mongoose.model<TProject>('Project', projectSchema);
