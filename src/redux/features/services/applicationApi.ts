import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    submitApplication: builder.mutation({
      query: (data) => ({
        url: "/api/applications",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubmitApplicationMutation } = applicationApi;