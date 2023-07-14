import { userModel } from "../../../database/models/user.model.js";
import { postModel } from "../../../database/models/post.model.js";

const createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  const user = await userModel.findById(userId);
  if (!user) return res.json({ message: "User not found" });

  const createdAt = Date.now();
  const updatedAt = Date.now();

  const post = await postModel.insertMany({
    title,
    content,
    userId,
    createdAt,
    updatedAt,
  });
  res.json({ message: "success", data: post });
};

const deletePost = async (req, res) => {
  const { id, userId } = req.body;
  const post = await postModel.findOneAndDelete({ _id: id, userId });
  if (!post) return res.json({ message: "Post not found" });
  res.json({ message: "success", data: post });
};

const updatePost = async (req, res) => {
  const { id, userId, title, content } = req.body;
  const post = await postModel.findOneAndUpdate(
    { _id: id, userId },
    { title, content, updatedAt: Date.now() },
    { new: true }
  );
  if (!post) return res.json({ message: "Post not found" });
  res.json({ message: "succes", data: post });
};

const sortedPosts = async (req, res) => {
  const posts = await postModel.find({}).sort({ createdAt: "desc" });
  res.json({ message: "success", data: posts });
};

export { createPost, deletePost, updatePost, sortedPosts };
