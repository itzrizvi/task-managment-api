import { NextFunction, Request, Response } from "express";
import { IUser } from "../types";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { errorResponse } from "../utils";

interface AuthRequest extends Request {
  user?: IUser;
}

export const protector = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req?.headers?.authorization &&
    req?.headers?.authorization?.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRE as string
      ) as { _id: string };

      req.user = (await User.findById(decodedToken._id).select(
        "-password"
      )) as IUser;

      next();
    } catch (error) {
      console.log("Error: F(protector): ", error);
      errorResponse(res, 401, "Not authorized, please try again.");
    }
  }

  if (!token) {
    errorResponse(res, 401, "Not authorized, please try again.");
  }
};
