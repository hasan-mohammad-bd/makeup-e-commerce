import api from "./api";

const productBestSaleAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getBestSellingProducts: builder.query({
			query: (payload) => ({
				url: `product-bestsale?${payload?.searchQuery}`,
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["best-sale-products"],
		}),
	}),
});

export const { useGetBestSellingProductsQuery } = productBestSaleAPI;
