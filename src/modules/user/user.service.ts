import { StatusCodes } from 'http-status-codes';
import config from '../../app/config';
import { AppError } from '../../app/errors/AppError';
import { TUser } from './user.interface';
import User from './user.model';
import { createToken } from './user.utils';

const createUser = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};
const getUser = async () => {
  const result = await User.find({});

  return result;
};

const createUserLogin = async (payload: TUser) => {
  const findUser = await User.findOne({ email: payload?.email });

  if (!findUser) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'user not found');
  }
  if (findUser?.password !== payload?.password) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'password did not match ');
  }

  let token;

  if (findUser) {
    const jwtPayload = {
      email: findUser?.email,
      role: findUser?.role,
    };
    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expiresIn as string,
    );

    token = accessToken;
  } else {
    throw new AppError(StatusCodes.NOT_FOUND, 'user not found ');
  }

  return {
    token,
    findUser,
  };
};

const updateUser = async (id: string, payload: Record<string, unknown>) => {
  const result = await User.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

export const userSerice = {
  createUser,
  createUserLogin,
  getUser,
  updateUser,
};
