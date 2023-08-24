import apiSlice from "./apiSlice";

const filterOptionsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFilterOptionsByCategory: builder.query({
      query: (searchQuery) => `search-summery?${searchQuery}`,
      providesTags: ["filter-options"],
    }),
  }),
});

export const { useGetFilterOptionsByCategoryQuery } = filterOptionsAPI;
