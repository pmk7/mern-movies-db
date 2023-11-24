import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import listRoutes from "./routes/listRoutes.js";

const port = process.env.PORT || 8000;

connectDB(); // Connect MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Routes
app.use("/api/movies", moviesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/list", listRoutes);

// Error middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));
