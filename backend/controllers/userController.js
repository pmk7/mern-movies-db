import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // add { $eq: email } to prevent nosql injection
  const user = await User.findOne({ email: { $eq: email } }); // Find user by email mongoose model method

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id); // Generate token
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // add { $eq: email } to prevent nosql injection
  const userExists = await User.findOne({ email: { $eq: email } });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password }); // Create user mongoose model method

  if (user) {
    generateToken(res, user._id); // Generate token
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(500);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout user / clear cookie
// @route   GET /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  try {
    // Create an object to store the updated user data
    const updatedUserData = {};

    if (req.body.name) {
      updatedUserData.name = req.body.name;
    }

    if (req.body.email) {
      updatedUserData.email = req.body.email;
    }

    if (req.body.password) {
      // Use bcrypt to securely hash the new password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      updatedUserData.password = hashedPassword;
    }

    // Update the user data in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true, // Return the updated user document
      runValidators: true, // Run validators to ensure data integrity
    });

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// @desc    Delete users
// @route   DELETE /api/users/profile
// @access  Private/Admin

const deleteProfile = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  // prevent nosql injection
  if (typeof userId !== "string") {
    res.status(400).json({ message: "Invalid user ID" });
    return;
  }

  if (password === '') {
    res.status(400).json({ message: "Passwords do not match" });
    return;
  }
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  await User.deleteOne({ _id: { $eq: userId } });
  res.status(200).json({ message: "User deleted" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteProfile,
};
