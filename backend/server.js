import express from "express";
import movies from "./data/movies.js";

const port = 9000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/title/:id", (req, res) => {
  const movie = movies.find((m) => {
    const urlParts = m.imdb_url.split("/");
    const id = urlParts[urlParts.length - 2];
    return id === req.params.id;
  });
  res.json(movie);
  console.log(req.params.id);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
