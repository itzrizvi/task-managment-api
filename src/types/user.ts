import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  refreshToken: string;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}
