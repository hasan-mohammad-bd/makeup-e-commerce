import apiSlice from "./apiSlice";

const categoriesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories`,
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
