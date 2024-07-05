import express from "express";
import {
  register,
  login,
  currentUser,
  forgotPassword,
} from "../controllers/authController.js";
import { requireSignin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
//made this current user jisse hr koi local storage me kuch bhi daalkr dashboard  pr na jaa ske...agr token sahi h..to hi jaane do kuch bhi kaam keliye kahi bhi even after login

router.post("/forgot-password", forgotPassword);

export default router;
