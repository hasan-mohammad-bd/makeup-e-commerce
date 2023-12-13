import api from "./api";

const searchAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getPopularSearch: builder.query({
			query: () => `popular-search-histories`,
			providesTags: ["popular-search"],
		}),
		getSearchHistories: builder.query({
			query: (userId) => `search-histories?reference_id=${userId}`,
			providesTags: ["search-histories"],
		}),
		removeSearchHistory: builder.mutation({
			query: ({ historyId, userId }) => ({
				url: `search-histories-delete/${historyId}?reference_id=${userId}`,
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
