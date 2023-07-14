import express from "express";
import * as postController from "./post.controller.js";
const app = express.Router();

app.post("/createPost", postController.createPost);

app.delete("/deletePost", postController.deletePost); 

app.put("/updatePost", postController.updatePost); 

app.get("/sortedPosts", postController.sortedPosts); 

export default app;
