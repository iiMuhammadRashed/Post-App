import { Schema, model, Types } from "mongoose";

const postSchema = new Schema({
  title: String,
  content: String,
  userId: {
    type: Types.ObjectId,
    ref: "user",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const postModel = model("post", postSchema);
