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
import mongoSanitize from "express-mongo-sanitize";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

// Cookie parser middleware
app.use(cookieParser());

// CORS middleware
app.use(cors());

// Security middleware
app.use(mongoSanitize()); // Sanitize data
app.use(limiter); // Limit requests

// Routes
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/list", listRoutes);

if (process.env.NODE_ENV === "production") {
  // set static folder
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // any route that is not api will hit this
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  const __dirname = path.resolve();
  app.get("/", (req, res) => {
    res.send("Server is ready");
  });
}

// Error middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));
