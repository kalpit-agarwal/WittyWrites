import express from "express";
import { requireSignin, canEditDeletePost } from "../middlewares/auth.js";
import formidable from "express-formidable";
import {
  createPost,
  uploadImage,
  postsByUser,
  userPost,
  updatePost,
  deletePost,
  newsFeed,
  likePost,
  unlikePost,
  addComment,
  removeComment,
} from "../controllers/postController.js";
const router = express.Router();

router.post("/create-post", requireSignin, createPost);
router.post(
  "/upload-image",
  requireSignin,
  formidable({ maxFileSize: 32 * 1024 * 1024 }),
  uploadImage
);
router.get("/user-posts", requireSignin, postsByUser);
router.get("/user-post/:_id", requireSignin, userPost);
router.put("/update-post/:_id", requireSignin, canEditDeletePost, updatePost);
//canEditDeletePost is a middleware that checks if the user is the owner of the post or not vrna koi bhi change krlega after logging in

router.delete(
  "/delete-post/:_id",
  requireSignin,
  canEditDeletePost,
  deletePost
);

router.get("/news-feed", requireSignin, newsFeed);
router.put("/like-post", requireSignin, likePost);
router.put("/unlike-post", requireSignin, unlikePost);

router.put("/add-comment", requireSignin, addComment);
router.put("/remove-comment", requireSignin, removeComment);

export default router;
