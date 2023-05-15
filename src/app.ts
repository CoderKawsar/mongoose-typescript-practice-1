import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;

// Breakdown

// interface =>interface.ts
// Schema, model => model.ts
// route
// route function => controller.ts
// Database Query Function => service.ts
