import express from "express";
const router = express.Router();
import { addListItems, getMyList } from "../controllers/listController.js";

router.route("/").post(addListItems);
router.route("/mylist").get(getMyList);

export default router;
