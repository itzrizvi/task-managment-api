import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User";
import {
  errorResponse,
  generateAccessToken,
  generateRefreshToken,
  successResponse
} from "../utils";
import { IUserResponse } from "../types";

const sendTokenResponse = (
  user: IUserResponse,
  statusCode: number,
  res: Response
) => {
  try {
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    successResponse(res, statusCode, "Token generated successfully", {
      _id: user._id,
      name: user.name,
      email: user.email,
      accessToken
    });
  } catch (error) {
    console.log("Error: F(sendTokenResponse): ", error);
    errorResponse(res, statusCode, "Server error");
  }
};
