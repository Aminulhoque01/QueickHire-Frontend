import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");  
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Applications"],
  endpoints: (builder) => ({
    submitApplication: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Applications"],
    }),
    getAppliedJobs: builder.query({
      query: () => "/apply/my",
      providesTags: ["Applications"],
    }),
  }),
});

export const { useSubmitApplicationMutation, useGetAppliedJobsQuery } = applicationApi;