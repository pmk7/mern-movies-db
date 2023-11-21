import asyncHandler from "../middleware/asyncHandler.js";
import Movie from "../models/movieModel.js";

// @desc    Fetch all movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        $or: [
          {
            name: {
              $regex: req.query.keyword.replace(/-/g, "[-]*"),
              $options: "i",
            },
          },
          {
            actors: {
              $regex: req.query.keyword.replace(/-/g, "[-]*"),
              $options: "i",
            },
          },
          {
            directors: {
              $regex: req.query.keyword.replace(/-/g, "[-]*"),
              $options: "i",
            },
          },
        ],
      }
    : {};

  const count = await Movie.countDocuments({ ...keyword });

  const movies = await Movie.find({ ...keyword })
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
