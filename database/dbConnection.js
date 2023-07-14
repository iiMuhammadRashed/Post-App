import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect("mongodb+srv://MuhammadRashed:iG51vliKTKpm9ZmM@cluster0.1bz9wcc.mongodb.net/")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
