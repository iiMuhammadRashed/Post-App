import {Schema,model} from "mongoose";


const userSchema = new Schema({
  userName: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  phone: Number,
});

export const userModel = model("user", userSchema);