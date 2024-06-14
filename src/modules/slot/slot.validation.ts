import { z } from 'zod';

const createSlotsRequestSchema = z.object({
  body: z.object({
    room: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    isBooked: z.boolean().default(false),
  }),
});

export const slotValidationSchema = {
  createSlotsRequestSchema,
};
