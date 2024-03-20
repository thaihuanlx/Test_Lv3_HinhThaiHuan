import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skills: [String],
  interests: String,
  goals: [String],
});

export default mongoose.model("Profile", profileSchema);
