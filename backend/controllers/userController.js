import asynceHandler from "express-async-handler";

// @desc  Auth user/set token
// route  POST /api/users/auth

const authUser = asynceHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc  Register new User
// route  POST /api/users
const registerUser = asynceHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
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
