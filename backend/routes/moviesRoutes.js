import express from "express";
const router = express.Router();
import { getMovies, getMovieById } from "../controllers/movieController.js";

router.route("/").get(getMovies);
router.route("/:id").get(getMovieById);

export default router;
