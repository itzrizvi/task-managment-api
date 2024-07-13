import { Document, Types } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

// New interface for user data retrieved from the database
export interface ITaskResponse extends ITask {
  _id: Types.ObjectId;
}
