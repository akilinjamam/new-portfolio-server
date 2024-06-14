import { NextFunction, Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import { StatusCodes } from 'http-status-codes';
import { AppError } from '../errors/AppError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../../modules/user/user.interface';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req?.headers?.authorization;

    const mainToken = token?.split(' ')[1];

    if (!mainToken) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized');
    }

    const decoded = jwt.verify(
      mainToken,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role } = decoded;

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized!');
    }
    next();
  });
};

export default auth;
