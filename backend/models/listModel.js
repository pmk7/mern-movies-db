import mongoose from "mongoose";

const listSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    listItems: [
      {
        movie: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Movie",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserMovieList = mongoose.model("UserMovieList", listSchema);

export default UserMovieList;
