import mongoose from "mongoose";

const userMovieListSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserMovieList = mongoose.model("UserMovieList", userMovieListSchema);

export default UserMovieList;
