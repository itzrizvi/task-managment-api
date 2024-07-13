import { Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  refreshToken: string;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

// New interface for user data retrieved from the database
export interface IUserResponse extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  refreshToken: string;
}
