import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    actors: {
      type: [String],
      required: true,
    },
    directors: {
      type: [String],
      required: true,
    },
    genre: {
      type: [String],
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    thumb_url: {
      type: String,
      required: true,
    },
    imdb_url: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
