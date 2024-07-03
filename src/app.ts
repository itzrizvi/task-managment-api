import express, { Application } from "express";
import morgan from "morgan";
import helmet from "helmet";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Routes

export default app;