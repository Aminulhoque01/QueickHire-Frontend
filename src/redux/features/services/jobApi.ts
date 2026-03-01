import { baseApi } from "./baseApi";

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL JOBS
   getJobs: builder.query({
      query: ({ page = 1, limit = 8, search = "" }) => `/job?search=${search}&page=${page}&limit=${limit}`,
      providesTags: ["Jobs"],
    }),
    // GET SINGLE JOB
    getJobById: builder.query({
      query: (id: string) => `/job/${id}`,
    }),

    // CREATE JOB
    createJob: builder.mutation({
      query: (jobData) => ({
        url: "/job",
        method: "POST",
        body: jobData,
      }),
      invalidatesTags: ["Jobs"],
    }),

    // DELETE JOB
    deleteJob: builder.mutation({
      query: (id: string) => ({
        url: `/job/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useCreateJobMutation,
  useDeleteJobMutation,
} = jobApi;