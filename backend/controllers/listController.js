import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import List from "../models/listModel.js";

// @desc    Create new list
// @route   POST /api/list
// @access  Private
const createList = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);

  const { listItems } = req.body;
  const { user } = req.body;

  if (!Array.isArray(listItems)) {
    return res.status(400).json({ message: "listItems must be an array" });
  }

  try {
    const list = new List({
      user,
      listItems: listItems.map((entry) => ({
        movieId: entry.movieId,
        name: entry.name,
        image_url: entry.image_url,
      })),
    });

    // console.log("list", list);

    const createdList = await list.save();

    res.status(201).json(createdList);
  } catch (error) {
    console.log(error);
  }
});

// @desc    Get logged in user list
// @route   GET /api/list/mylist
// @access  Private
const getMyList = asyncHandler(async (req, res) => {
  const list = await List.find({});
  console.log(list);
  res.status(200).json(list);
});

export { createList, getMyList };
