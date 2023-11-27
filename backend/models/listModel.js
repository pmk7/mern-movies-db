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
        movieId: { type: String, required: true },
        name: { type: String, required: true },
        image_url: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);

export default List;
