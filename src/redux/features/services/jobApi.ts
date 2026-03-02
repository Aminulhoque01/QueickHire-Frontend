import { baseApi } from "./baseApi";

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET ALL JOBS
    getJobs: builder.query({
      query: (params) => {
        const query = new URLSearchParams();

        if (params.page) query.append("page", params.page);
        if (params.limit) query.append("limit", params.limit);
        if (params.search) query.append("search", params.search);
        if (params.category) query.append("category", params.category);
        if (params.workPlace) query.append("workPlace", params.workPlace);
        if (params.title) query.append("title", params.title);

        return `/job?${query.toString()}`;
      },
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
