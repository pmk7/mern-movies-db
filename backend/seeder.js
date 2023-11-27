import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import movies from "./data/movies.js";
import User from "./models/userModel.js";
import Movie from "./models/movieModel.js";
import List from "./models/listModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Movie.deleteMany();
    await List.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleMovies = movies.map((movie) => {
      return { ...movie, user: adminUser };
    });

    await Movie.insertMany(sampleMovies);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Movie.deleteMany();
    await List.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
// Path: backend/config/db.js
