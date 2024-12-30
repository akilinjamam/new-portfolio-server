import mongoose, { Schema } from 'mongoose';
import { TExp } from './experience.constant';

const expSchema = new Schema<TExp>({
  exp: { type: String, required: true },
});

export const Exp = mongoose.model<TExp>('Exp', expSchema);
