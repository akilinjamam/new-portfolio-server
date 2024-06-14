import { z } from 'zod';

const slotIdSchema = z.string();

const bookingSchema = z.object({
  body: z.object({
    date: z.string(),
    slots: z.array(slotIdSchema),
    room: z.string(),
    user: z.string(),
    isConfirmed: z.enum(['confirmed', 'unconfirmed', 'canceled']).optional(),
    totalAmount: z.number().optional(),
    isDeleted: z.boolean().default(false),
  }),
});

export const bookingValidationSchema = {
  bookingSchema,
};
