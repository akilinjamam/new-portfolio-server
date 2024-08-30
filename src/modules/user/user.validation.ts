import { z } from 'zod';

const createUserSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email('Invalid email address'),
    password: z.string(),
    phone: z.string(),
    address: z.string(),
    role: z.enum(['user', 'admin']).optional(),
  }),
});
const createUserLoginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string(),
  }),
});

export const userValidationSchema = {
  createUserSchema,
  createUserLoginSchema,
};
