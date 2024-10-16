import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "../db.js"; 
import userRouter from "./routes/user.js";

// Load environment variables
dotenv.config();

  // Connect to MongoDB
  await connectToDB();

  const app = express();
  const port = process.env.PORT || 7000;

  // Middleware for JSON parsing
  app.use(express.json());

  // Use the userRouter
  app.use("/api/user", userRouter);

  app.listen(port, () => {
    console.log(`The server 🙈 is listening on port ${port}`);
  });
