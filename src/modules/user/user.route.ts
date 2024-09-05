import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../app/middleware/validateSchema';
import { userValidationSchema } from './user.validation';
import auth from '../../app/middleware/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.user, USER_ROLE.admin), userController.getUser);
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

router.get('/:id', auth(USER_ROLE.admin), userController.updateUser);

export const userRouter = router;
