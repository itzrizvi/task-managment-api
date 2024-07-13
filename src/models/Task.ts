import mongoose, { Schema } from "mongoose";
import { ITask } from "../types";

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
