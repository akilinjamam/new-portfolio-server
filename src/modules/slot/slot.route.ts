import express from 'express';
import validateRequest from '../../app/middleware/validateSchema';
import auth from '../../app/middleware/auth';
import { USER_ROLE } from '../user/user.constant';
import { slotValidationSchema } from './slot.validation';
import { slotController } from './slot.controller';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(slotValidationSchema.createSlotsRequestSchema),
  slotController.createSlot,
);
router.get('/availability', slotController.getAllSlot);
router.put('/', slotController.updateSlot);
router.delete('/:id', slotController.deleteSlot);

export const slotRouter = router;
