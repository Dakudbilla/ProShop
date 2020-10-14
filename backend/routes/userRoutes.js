import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

/**
 * @description   register user and getA token
 * @route          POST /api/users/
 * @access         Public
 *
 * */
router.route("/").post(registerUser);

/**
 * @description   Auth user and get token
 * @route          POST /api/users/login
 * @access         Public
 *
 * */
router.post("/login", authUser);

/**
 * @description   Auth user and get token
 * @route          GET /api/users/profile
 * @access         Private
 *
 * */
router.route("/profile").get(protect, getUserProfile);
export default router;
