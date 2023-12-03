import express from "express";
const router = express.Router();
import {
  getMovies,
  getMovieById,
  sortMoviesByRating,
} from "../controllers/movieController.js";

router.route("/").get(getMovies);
router.route("/:id").get(getMovieById);
router.route("/sort/rating").get(sortMoviesByRating);

export default router;
