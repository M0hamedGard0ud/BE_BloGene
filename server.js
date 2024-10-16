import express from "express";
import { connectToDB } from "./db.js";
import dotenv from "dotenv";


// Load environment variables
dotenv.config();

// Connect to MongoDB
await connectToDB();

const app = express();
const port = process.env.PORT || 6000;


app.listen(port, () => {
    console.log(`The server 🙈 is listening on port ${port}`);
  });
