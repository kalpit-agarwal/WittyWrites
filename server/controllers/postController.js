import Post from "../models/post.js";
import cloudinary from "cloudinary";

export const createPost = async (req, res) => {
  const { content, image } = req.body;
  if (!content) {
    return res.json({ error: "Content is required" });
  }
  try {
    const post = new Post({
      content,
      image,
      postedBy: req.user._id,
    });
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

export const uploadImage = async (req, res) => {
  await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postsByUser = async (req, res) => {
  try {
    // const posts = await Post.find({ postedBy: req.user._id })
    const posts = await Post.find()
      .populate("postedBy", "_id name image")
      .limit(10)
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const userPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params._id);

    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  const { content, image } = req.body;
  if (!content) {
    return res.json({ error: "Content is required" });
  }
  try {
    const post = await Post.findByIdAndUpdate(
      req.params._id,
      { content, image },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params._id);
    //removing the image from cloudinary
    await cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });
    if (post.image && post.image.public_id) {
      await cloudinary.uploader.destroy(post.image.public_id);
    }
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};
