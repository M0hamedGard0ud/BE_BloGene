import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User with this email already exists");
      error.statusCode = 409;
      throw error;
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      const error = new Error("Username already taken");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
      user: { username, email },
    });
  } catch (error) {
    next(error);
  }
};
