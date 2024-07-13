import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const generateAccessToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  });
};

export const generateRefreshToken = (id: Types.ObjectId) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
  });
};
