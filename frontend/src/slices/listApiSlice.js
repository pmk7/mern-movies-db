import { apiSlice } from "./apiSlice";
import { LIST_MOVIES_URL } from "../constants";
export const listApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createList: builder.mutation({
      query: (list) => ({
        url: LIST_MOVIES_URL,
        method: "POST",
        body: { ...list },
      }),
    }),
    addToList: builder.mutation({
      query: (list) => ({
        url: LIST_MOVIES_URL,
        method: "PUT",
        body: { ...list },
      }),
    }),
    getMyList: builder.query({
      query: (userId) => ({
        url: `${LIST_MOVIES_URL}/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateListMutation,
  useAddToListMutation,
  useGetMyListQuery,
} = listApiSlice;
