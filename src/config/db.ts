import mongoose from "mongoose";

// DB Connection Function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "").then(() => {
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log("MONGO CONNECT ERR: ", error);
    process.exit(1);
  }
};

export default connectDB;
