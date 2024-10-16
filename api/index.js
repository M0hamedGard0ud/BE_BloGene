import express from "express";
import dotenv from "dotenv";
import { connectToDB } from "../db.js";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import errorHandler from "./middlewares/errorHandler.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
await connectToDB();

const app = express();
const port = process.env.PORT || 7000;

// Middleware for JSON parsing
app.use(express.json());


// Use the Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


// Middleware for Error handling 
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});

