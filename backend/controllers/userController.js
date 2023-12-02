import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }); // Find user by email mongoose model method

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
  const userExists = await User.findOne({ email });

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
  const user = await User.findById(req.user._id); // Find user by ID mongoose model method

  if (user) {
    user.name = req.body.name || user.name; // If name is provided, use it, otherwise use existing name
    user.email = req.body.email || user.email; // If email is provided, use it, otherwise use existing email

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      password: updatedUser.password,
    });
  } else {
    res.status(400);
    throw new Error("Password is required");
  }
});

// @desc    Delete users
// @route   DELETE /api/users/profile
// @access  Private/Admin

const deleteProfile = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  // In the following example, an express handler attempts to delete a single document from a MongoDB collection. The document to be deleted is identified by its _id field, which is constructed from user input. The user input may contain a query object, so this code is vulnerable to a NoSQL injection attack.
  if (typeof userId !== "string") {
    res.status(400).json({ message: "Invalid user ID" });
    return;
  }
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  await User.deleteOne({ _id: user._id });
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
