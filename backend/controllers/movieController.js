import asyncHandler from "../middleware/asyncHandler.js";
import Movie from "../models/movieModel.js";

// @desc    Fetch all movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Movie.countDocuments();

  const movies = await Movie.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ movies, page: page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single movie
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getMovies, getMovieById };
