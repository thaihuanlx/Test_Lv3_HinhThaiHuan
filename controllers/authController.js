import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const register = async (req, res) => {
  try {
    const {
      email,
      password,
      fullName,
      dateOfBirth,
      placeOfBirth,
      nationality,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      fullName,
      dateOfBirth,
      placeOfBirth,
      nationality,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error("Invalid password");
    const token = jwt.sign({ userId: user._id }, "secret_key");
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
