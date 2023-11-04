import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Movie", "User"],
  endpoints: (builder) => ({}),
});

// source: https://github.com/reduxjs/redux/blob/140e8137f3651e5631271d1e85ab64e7e4dd971f/docs/tutorials/essentials/part-7-rtk-query-basics.md?plain=1#L3
