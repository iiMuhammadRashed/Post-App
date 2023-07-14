import { userModel } from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  const { userName, email, password, age, gender, phone } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.json({ message: "User already exists" });
  } else {
    const hashedPassword = bcrypt.hashSync(password, 8);

    userModel.insertMany({
      userName,
      email,
      password: hashedPassword,
      age,
      gender,
      phone,
    });
    res.json({ message: "success" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ message: "successfully login" });
  } else {
    res.json({ message: "incorrect email or password" });
  }
};

const updateUser = async (req, res) => {
  const { id, userName, email, password, age, gender, phone } = req.body;
  const hashedPassword = "";
  if (password) {
    hashedPassword = bcrypt.hashSync(password, 8);
  }
  const user = await userModel.findByIdAndUpdate(
    id,
    { userName, email, password: hashedPassword, age, gender, phone },
    {
      new: true,
    }
  );
  if (!user) {
    return res.json({ message: "User not found" });
  } else {
    res.json({ message: "success", data: user });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  const user = await userModel.findByIdAndDelete(id);
  if (!user) {
    return res.json({ message: "User not found" });
  } else {
    res.json({ message: "success" });
  }
};

const search = async (req, res) => {
  const { firstLetter, age, between } = req.body;
  const users = [];
  if (firstLetter && age) {
    users = await userModel.find({
      userName: { $regex: new RegExp(`^${firstLetter}`, "i") },
      age: { $lt: age },
    });
  }

  if (between) {
    users = await userModel.find({
      age: { $gt: between[0], $lt: between[1] },
    });
  }

  if (!users[0]) {
    return res.json({ message: "no users found" });
  } else {
    res.json({ message: "success", data: users });
  }
};

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  if (!users[0]) {
    return res.json({ message: "no users found" });
  } else {
    res.json({ message: "success", data: users });
  }
};

export { signUp, signIn, updateUser, deleteUser, search, getAllUsers };
