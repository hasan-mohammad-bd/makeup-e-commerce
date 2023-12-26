import api from "./api";

const filterOptionsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getFilterOptionsByCategory: builder.query({
			query: (payload) => ({
				url: `search-summary?${payload.searchQuery}`,
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["filter-options"],
		}),
	}),
});

export const { useGetFilterOptionsByCategoryQuery } = filterOptionsAPI;
