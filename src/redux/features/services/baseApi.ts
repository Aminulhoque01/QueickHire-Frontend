import { RootState } from "@/redux/store";
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
 

const baseQuery = fetchBaseQuery({
  baseUrl: `https://queick-hire-backend.vercel.app/`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["User", "Jobs","Category"],
  endpoints: () => ({}),
});