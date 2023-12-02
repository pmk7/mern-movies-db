import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import listRoutes from "./routes/listRoutes.js";
import { rateLimit } from "express-rate-limit";
import lusca from "lusca";

const port = process.env.PORT || 8000;

connectDB(); // Connect MongoDB

const app = express();

app.set("trust proxy", 1); // trust first proxy

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Use an external store for consistency across multiple server instances.
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
// Add lusca CSRF middleware to prevent CSRF attacks
app.use(lusca.csrf());

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
