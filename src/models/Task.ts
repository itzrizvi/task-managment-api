import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "To Do" },
    assignedTo: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<ITask>("Task", TaskSchema);
