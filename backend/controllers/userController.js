import asynceHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc  Auth user/set token
// route  POST /api/users/auth

const authUser = asynceHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc  Register new User
// route  POST /api/users
const registerUser = asynceHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc  Logout  User
// route  POST /api/users/logout
const logoutUser = asynceHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc  Get  User profile
// route  GET /api/users/profile
// private
const getUserProfile = asynceHandler(async (req, res) => {
  res.status(200).json({ message: "Get User Profile" });
});

// @desc  Update  User profile
// route  PUT /api/users/profile
// private
const updateUserProfile = asynceHandler(async (req, res) => {
  res.status(200).json({ message: "Update User" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
