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
    getListItems: builder.query({
      query: () => ({
        url: LIST_MOVIES_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateListMutation } = listApiSlice;
