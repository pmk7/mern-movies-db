import asyncHandler from "../middleware/asyncHandler.js";
import List from "../models/listModel.js";

// @desc    Create new list
// @route   POST /api/list
// @access  Private
const addListItems = asyncHandler(async (req, res) => {
  res.send("add list items");
});

// @desc    Get logged in user list
// @route   POST /api/list/mylist
// @access  Private
const getMyList = asyncHandler(async (req, res) => {
  res.send("get my list");
});

export { addListItems, getMyList };
