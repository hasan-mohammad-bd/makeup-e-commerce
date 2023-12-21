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
		// Getting all visited products
		getVisitedProducts: builder.query({
			query: (payload) => ({
				url: "visit-history/index?per_page=12",
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
