import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 64,
    },
    secret: {
      type: String,
      required: true,
    },
    about: {},
    photo: {
      type: String,
    },
    following: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
