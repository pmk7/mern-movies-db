import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Replacing axios with RTK Query
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // making post request to /api/users/auth
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;
