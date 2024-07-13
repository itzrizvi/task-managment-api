import express, { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";
import { authRoutes } from "./routes";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Routes
app.use("/api/auth", authRoutes);

export default app;
