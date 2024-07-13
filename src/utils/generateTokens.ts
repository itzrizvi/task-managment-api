import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const generateAccessToken = (_id: Types.ObjectId) => {
  return jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  });
};

export const generateRefreshToken = (_id: Types.ObjectId) => {
  return jwt.sign({ _id }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  });
};
