import api from "./api";

const wishListAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		addToWishList: builder.mutation({
			query: (productInfo) => ({
				url: "wishlist",
				method: "POST",
				body: productInfo,
			}),
			invalidatesTags: ["wishlist"],
		}),
		getWishList: builder.query({
			query: (payload) => ({
				url: `wishlist`,
				headers: {
					lang: payload.locale || "en",
				},
			}),
			providesTags: ["wishlist"],
		}),
		removeFromWishList: builder.mutation({
			query: (productId) => ({
				url: `wishlist/${productId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["wishlist"],
		}),
	}),
});

export const {
	useAddToWishListMutation,
	useGetWishListQuery,
	useRemoveFromWishListMutation,
} = wishListAPI;
