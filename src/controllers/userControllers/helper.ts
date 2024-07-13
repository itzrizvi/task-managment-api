import { Response } from "express";
import { IUserResponse } from "../../types";
import {
  errorResponse,
  generateAccessToken,
  generateRefreshToken,
  successResponse
} from "../../utils";

export const sendTokenResponse = (
  user: IUserResponse,
  statusCode: number,
  res: Response,
  message: string = "Token generated successfully"
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

    successResponse(res, statusCode, message, {
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
