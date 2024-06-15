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
router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user),
  bookingController.getAllBookings,
);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(bookingValidationSchema.updatebookingSchema),
  bookingController.updateBooking,
);
router.delete('/:id', auth(USER_ROLE.admin), bookingController.deleteBooking);
export const bookingRouter = router;
