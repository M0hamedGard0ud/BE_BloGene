import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected to database");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
