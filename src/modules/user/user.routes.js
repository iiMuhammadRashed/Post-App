import express from "express";
import * as userController from "./user.controller.js";
const app = express.Router();

app.post("/signUp", userController.signUp);

app.post("/signIn", userController.signIn);

app.put("/updateUser", userController.updateUser);

app.delete("/deleteUser", userController.deleteUser);

app.post("/search", userController.search);

app.get("/users", userController.getAllUsers);

export default app;
