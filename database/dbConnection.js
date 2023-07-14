import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect("mongodb://localhost:27017/mongooseAssignment")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
