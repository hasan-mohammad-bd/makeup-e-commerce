import api from "./api";

const visitedProductsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		addToVisited: builder.mutation({
			query: (payload) => ({
				url: "visit-history/store",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["visited"],
		}),
		getVisitedProducts: builder.query({
			query: (payload) => ({
				url: "visit-history/index?per_page=",
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["visited"],
		}),
	}),
});

export const { useAddToVisitedMutation, useGetVisitedProductsQuery } =
	visitedProductsAPI;
