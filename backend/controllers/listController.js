import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import List from "../models/listModel.js";

// @desc    Create new list or add to existing list
// @route   POST /api/v1/list
// @access  Private
const createList = asyncHandler(async (req, res) => {
  const { user, listItems } = req.body;

  if (!Array.isArray(listItems)) {
    return res.status(400).json({ message: "listItems must be an array" });
  }

  try {
    // Check if a list with the user id exists
    // add { $eq: user } to prevent nosql injection
    let list = await List.findOne({ user: { $eq: user } });

    if (list) {
      // If the list exists, check if the movie is already in the list
      const isMovieInList = list.listItems.some(
        (item) => item.movieId === listItems[0].movieId
      );

      if (isMovieInList) {
        return res
          .status(400)
          .json({ message: "Movie is already in the list" });
      }

      // Add the new list items to the list
      list.listItems.push(...listItems);
    } else {
      // If the list doesn't exist, create a new list
      list = new List({
        user,
        listItems: listItems.map((entry) => ({
          movieId: entry.movieId,
          name: entry.name,
          image_url: entry.image_url,
        })),
      });
    }

    const updatedList = await list.save();

    res.status(201).json(updatedList);
  } catch (error) {
    console.log(error);
  }
});

const addToList = asyncHandler(async (req, res) => {
  res.send("add to list");
});

// @desc    Get logged in user list
// @route   GET /api/v1/list/:id
// @access  Private
const getMyList = asyncHandler(async (req, res) => {
  const list = await List.findOne({ user: req.params.id });

  if (list) {
    res.json(list);
  } else {
    res.status(404);
    throw new Error("List not found");
  }
});

// @desc    Remove movie from list
// @route   PUT /api/v1/list/:id
// @access  Private
const deleteMovieFromList = asyncHandler(async (req, res) => {
  const movieId = req.params.id;

  const listWithMovie = await List.findOne({ "listItems.movieId": movieId });

  const updatedList = await List.findOneAndUpdate(
    { "listItems.movieId": movieId },
    { $pull: { listItems: { movieId: movieId } } },
    { new: true }
  );
});

export { createList, getMyList, addToList, deleteMovieFromList };
