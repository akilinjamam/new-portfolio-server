import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../app/middleware/validateSchema';
import { userValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(userValidationSchema.createUserSchema),
  userController.createUser,
);
router.post(
  '/login',
  validateRequest(userValidationSchema.createUserLoginSchema),
  userController.createUserLogin,
);

export const userRouter = router;
