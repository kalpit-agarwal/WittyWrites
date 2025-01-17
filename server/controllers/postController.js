import Post from "../models/post.js";
import cloudinary from "cloudinary";
import User from "../models/user.js";

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
    const postWithUser = await Post.findById(post._id).populate(
      "postedBy",
      "-password -secret"
    );

    res.json(postWithUser);
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
    const post = await Post.findById(req.params._id)
      .populate("comments.postedBy", "_id name image")
      .populate("postedBy", "_id name image");

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

export const newsFeed = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const following = user.following;
    following.push(req.user._id);

    //pagination
    const currentPage = req.params.page || 1;
    const perPage = 3;

    const posts = await Post.find({ postedBy: { $in: following } })
      .skip((currentPage - 1) * perPage)
      .populate("comments.postedBy", "_id name image")
      .populate("postedBy", "_id name image")
      .limit(perPage)
      .sort({ createdAt: -1 });
    //skip ...skip krdega utne posts...we are calculating the number of posts to skip here
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.body._id,
      {
        $addToSet: { likes: req.user._id },
      },
      { new: true }
    );

    res.json(post);
  } catch (error) {
    console.log(error);
  }
};
export const unlikePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.body._id,
      {
        $pull: { likes: req.user._id },
      },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (req, res) => {
  const { comment, postId } = req.body;

  const commentObj = { text: comment, postedBy: req.user._id };
  try {
    const post = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: commentObj } },
      { new: true }
    )
      .populate("comments.postedBy", "_id name image")
      .populate("postedBy", "_id name image");
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};
export const removeComment = async (req, res) => {
  const { postId, comment } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(
      postId,
      { $pull: { comments: { _id: comment._id } } },
      { new: true }
    );

    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const totalPosts = async (req, res) => {
  try {
    const total = await Post.find().estimatedDocumentCount();
    res.json(total);
  } catch (error) {
    console.log(error);
  }
};

export const posts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image")
      .limit(12)
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image");
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};
