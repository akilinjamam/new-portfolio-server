import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { userSerice } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await userSerice.createUser(req.body);

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const createUserLogin = catchAsync(async (req, res) => {
  const result = await userSerice.createUserLogin(req.body);

  const { token, findUser } = result;

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User logged in successfully',
    token,
    data: findUser,
  });
});

export const userController = {
  createUser,
  createUserLogin,
};
