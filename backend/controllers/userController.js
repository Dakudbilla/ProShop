import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/UserModel.js";

/**
 * @description   Authenticate user and get token
 * @route          POST /api/users/login
 * @access         Public
 *
 * */
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const { _id, name, email, isAdmin } = user;
    res.json({
      _id,
      name,
      email,
      isAdmin,
      token: generateToken(_id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid log In Details");
  }
});

/**
 * @description   register user and getA token
 * @route          POST /api/users/
 * @access         Public
 *
 * */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);

    throw new Error("User already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    const { _id, name, email, isAdmin } = user;

    res.status(201).json({
      _id,
      name,
      email,
      isAdmin,
      token: generateToken(_id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

/**
 * @description   Get User Profile
 * @route          GET /api/users/profile
 * @access         Private
 *
 * */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    const { _id, name, email, isAdmin } = user;
    res.json({
      _id,
      name,
      email,
      isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

/**
 * @description   Update User Profile
 * @route          PUT /api/users/profile
 * @access         Private
 *
 * */
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    //check if name or password or email was passed before updating
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = user.password;
    }
    const updatedUser = await user.save();
    const { _id, name, email, isAdmin } = updatedUser;

    res.json({
      _id,
      name,
      email,
      isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});
