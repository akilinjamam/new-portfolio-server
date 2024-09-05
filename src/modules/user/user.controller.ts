import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../app/utils/catchAsync';
import sendRespone from '../../app/utils/sendRespone';
import { userSerice } from './user.service';
import config from '../../app/config';

const createUser = catchAsync(async (req, res) => {
  const result = await userSerice.createUser(req.body);

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});
const getUser = catchAsync(async (req, res) => {
  const result = await userSerice.getUser();

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const createUserLogin = catchAsync(async (req, res) => {
  const result = await userSerice.createUserLogin(req.body);

  const { token, findUser } = result;

  res.cookie('accessToken', token, {
    secure: config.NODE_ENV === 'development',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 5,
  });

  sendRespone(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'User logged in successfully',
    token,
    data: findUser,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const result = await userSerice.updateUser(req.params.id, req.body);

  sendRespone(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

export const userController = {
  createUser,
  createUserLogin,
  getUser,
  updateUser,
};
