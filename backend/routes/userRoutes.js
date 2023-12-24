import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// TODO; use proper put, post, delete methods

router.route("/").post(registerUser);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteProfile);

export default router;
