import { z } from 'zod';

const creatRoomSchema = z.object({
  body: z.object({
    name: z.string(),
    roomNo: z.number(),
    floorNo: z.number(),
    capacity: z.number(),
    pricePerSlot: z.number(),
    amenities: z
      .array(z.string())
      .nonempty('Amenities must contain at least one item'),
    images: z.array(z.string()).nonempty('must have to add images'),
    isDeleted: z.boolean().default(false),
  }),
});

const updateRoomSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    roomNo: z.number().optional(),
    floorNo: z.number().optional(),
    capacity: z.number().optional(),
    pricePerSlot: z.number().optional(),
    amenities: z
      .array(z.string())
      .nonempty('Amenities must contain at least one item')
      .optional(),
  }),
});

export const roomValidationSchema = {
  creatRoomSchema,
  updateRoomSchema,
};
