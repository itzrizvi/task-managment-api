import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

// Env Config
dotenv.config();

const PORT = process.env.PORT || 5000;

// Listen Server App
app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT ${PORT}`);
});

// Connect Database
connectDB();
