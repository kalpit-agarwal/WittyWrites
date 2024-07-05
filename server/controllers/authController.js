import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password, secret } = req.body;
  if (!name) return res.json({ error: "Name is required" });
  if (!password || password.length < 6)
    return res.json({
      error: "Password is required and should be min 6 characters long",
    });
  if (!secret) return res.json({ error: "Answer is required" });
  if (!email) return res.json({ error: "Email is required" });

  //find tries to find the users(all users) with the  same email in entire database
  //findOne return the first user with the email

  //findone is better in performance

  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.json({ error: "Email is taken" });

    const hashedPassword = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      secret,
    });
    try {
      await user.save();
      return res.json({ ok: true });
    } catch (err) {
      console.log("Register failed", err);
      return res.json({ error: "Try again" });
    }
  } catch (err) {
    console.log("Error", errmessage);
    return res.status(400).send("Error. Try again.");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "No user found" });

    const match = await comparePassword(password, user.password);
    if (!match) return res.json({ error: "Wrong password" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secret = undefined;
    res.json({ token, user });
  } catch (err) {
    console.log("Login failed", err);
    return res.status(400).send("Signin failed");
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.json({ error: "No user found" });
    res.json({ ok: true });
  } catch (err) {
    console.log("Current User failed", err);
    res.sendStatus(400);
  }
};

const forgotPassword = async (req, res) => {
  const { email, newPassword, secret } = req.body;
  if (!newPassword || newPassword.length < 6)
    return res.json({
      error: "Password is required and should be min 6 characters long",
    });
  if (!secret) return res.json({ error: "Answer is required" });
  try {
    const user = await User.findOne({ email, secret });
    if (!user) return res.json({ error: "Email or Answer is wrong" });
    const hashed = await hashPassword(newPassword);
    // await user.save(); another trika
    await User.findByIdAndUpdate(user._id, { password: hashed });
    return res.json({
      success: "Congrats, Now you can login with your new password",
    });
  } catch (err) {
    console.log("Forgot password failed", err);
    return res.status(400).send("Error. Try again.");
  }
};

export { register, login, currentUser, forgotPassword };
