import { Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}
