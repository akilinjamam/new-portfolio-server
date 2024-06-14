import express from 'express';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../app/middleware/validateSchema';
import { bookingValidationSchema } from './booking.validation';
import { bookingController } from './booking.controller';
import auth from '../../app/middleware/auth';
const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(bookingValidationSchema.bookingSchema),
  bookingController.createBooking,
);

export const bookingRouter = router;
