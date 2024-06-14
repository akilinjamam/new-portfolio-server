import express from 'express';
import { roomValidationSchema } from './room.validation';
import validateRequest from '../../app/middleware/validateSchema';
import { roomController } from './room.controller';
import auth from '../../app/middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(roomValidationSchema.creatRoomSchema),
  roomController.createRoom,
);

router.get('/', roomController.getAllRoom);
router.get('/:id', roomController.getSingleRoom);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(roomValidationSchema.updateRoomSchema),
  roomController.updateRoom,
);
router.delete('/:id', auth(USER_ROLE.admin), roomController.deleteRoom);

export const roomRouter = router;
