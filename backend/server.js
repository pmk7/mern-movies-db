import express from "express";
import movies from "./data/movies.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import moviesRoutes from "./routes/moviesRoutes.js";

const port = process.env.PORT || 8000;

connectDB(); // Connect MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/movies", moviesRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/movies", (req, res) => {
//   res.json(movies);
// });

// app.get("/api/movies/title/:id", (req, res) => {
//   const movie = movies.find((m) => {
//     console.log(m.imdb_url);
//     const urlParts = m.imdb_url.split("/");
//     const idString = urlParts[urlParts.length - 2];
//     const id = idString.substring(2);
//     return id === req.params.id;
//   });
//   res.json(movie);
//   console.log(req.params.id);
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));
