import { Request, Response } from "express";
import User from "../../models/User";
import { IUserResponse } from "../../types";
import { errorResponse } from "../../utils";
import { sendTokenResponse } from "./helper";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 400, "User already exists.");
    }

    const user = new User({ name, email, password });
    await user.save();

    sendTokenResponse(
      user as IUserResponse,
      201,
      res,
      "Welcome, you are successfully registered."
    );
  } catch (error) {
    console.log("Error: F(registerUser): ", error);
    errorResponse(
      res,
      500,
      "Registration failed, please try again with correct information."
    );
  }
};
