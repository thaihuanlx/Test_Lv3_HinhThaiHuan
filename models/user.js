import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  fullName: String,
  dateOfBirth: String,
  placeOfBirth: String,
  nationality: String,
  password: String,
});

export default mongoose.model("User", userSchema);
