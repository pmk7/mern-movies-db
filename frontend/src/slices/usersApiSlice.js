import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// Replacing axios with RTK Query
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // making post request to /api/v1/users/auth
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProfile: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/profile`,
        method: "DELETE",
        body: { userId },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useDeleteProfileMutation,
} = usersApiSlice;

// source: https://github.com/reduxjs/redux/blob/140e8137f3651e5631271d1e85ab64e7e4dd971f/docs/tutorials/essentials/part-8-rtk-query-advanced.md
