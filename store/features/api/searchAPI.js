import apiSlice from "./apiSlice";

const searchAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPopularSearch: builder.query({
      query: () => `popular-search-histories`,
      providesTags: ["popular-search"],
    }),
    getSearchHistories: builder.query({
      query: (userId) => `search-histories?user_id=${userId}`,
      providesTags: ["search-histories"],
    }),
    removeSearchHistory: builder.mutation({
      query: (payload) => ({
        url: `search-histories-delete/${payload.historyId}/?user_id=${payload.userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["search-histories"],
    }),
  }),
});

export const {
  useGetPopularSearchQuery,
  useGetSearchHistoriesQuery,
  useRemoveSearchHistoryMutation,
} = searchAPI;
