import apiSlice from "./apiSlice";

const productReviewAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (payload) => ({
        url: "product-review/store",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["user-reviews", "product-reviews"],
    }),
    getProductReviews: builder.query({
      query: (productId) => `product-review/index?product_id=${productId}`,
      providesTags: ["product-reviews"],
    }),
    getUserReviews: builder.query({
      query: () => `sell-product-review`,
      providesTags: ["user-reviews"],
    }),
    getUserReviewShow: builder.query({
      query: (orderId) => `sell-product-review/${orderId}`,
      providesTags: ["user-review-show"],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetProductReviewsQuery,
  useGetUserReviewsQuery,
  useGetUserReviewShowQuery,
} = productReviewAPI;
