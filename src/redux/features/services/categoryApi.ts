import { baseApi } from "./baseApi";

 

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // GET ALL CATEGORIES
    getCategories: builder.query({
      query: () => "/category/count",
      providesTags: ["Category"],
    }),

    // CREATE CATEGORY
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),

    // DELETE CATEGORY
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;