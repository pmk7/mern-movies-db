import express from "express";
const router = express.Router();
import {
  createList,
  getMyList,
  addToList,
  deleteMovieFromList,
} from "../controllers/listController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createList);
router.route("/:id").get(protect, getMyList).put(protect, deleteMovieFromList);

export default router;
