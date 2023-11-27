import express from "express";
const router = express.Router();
import { createList, getMyList } from "../controllers/listController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createList).get(protect, getMyList);

export default router;
