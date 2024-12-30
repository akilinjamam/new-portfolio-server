import mongoose, { Schema } from 'mongoose';
import { TSkills } from './skills.constant';

const skillSchema = new Schema<TSkills>({
  skill: { type: String, required: true },
  logo: { type: String, required: true },
});

export const Skill = mongoose.model<TSkills>('Skill', skillSchema);
