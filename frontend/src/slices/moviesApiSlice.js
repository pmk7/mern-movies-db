import { MOVIES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Replacing axios with RTK Query
export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      // get request to /api/v1/movies
      query: ({ keyword, pageNumber, sortOrder }) => ({
        url: MOVIES_URL,
        params: {
          keyword,
          pageNumber,
        },
      }),
      method: "GET",
      keepUnusedDataFor: 10,
    }),
    getMovieDetails: builder.query({
      // get request to /api/v1/movies/:id
      query: (movieId) => ({
        url: `${MOVIES_URL}/${movieId}`,
      }),
      method: "GET",
      keepUnusedDataFor: 10,
    }),
    sortMoviesByRating: builder.query({
      // get request to /api/v1/movies/sort/rating
      query: (sortOrder) => ({
        url: `${MOVIES_URL}/sort/rating`,
        params: {
          sortOrder,
        },
      }),
      method: "GET",
      keepUnusedDataFor: 10,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useSortMoviesByRatingQuery,
} = moviesApiSlice;
