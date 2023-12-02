import { MOVIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Replacing axios with RTK Query
export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      // get request to /api/movies
      query: ({ keyword, pageNumber, sortOrder }) => ({
        url: MOVIES_URL,
        params: {
          keyword,
          pageNumber,
          sortOrder,
        },
      }),
      keepUnusedDataFor: 10,
    }),
    getMovieDetails: builder.query({
      // get request to /api/movies/title/:id
      query: (movieId) => ({
        url: `${MOVIES_URL}/${movieId}`,
      }),
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = moviesApiSlice;
