import express from "express";
const router = express.Router();
import {
  createList,
  getMyList,
  addToList,
} from "../controllers/listController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(createList);
router.route("/:id").get(getMyList);

export default router;
