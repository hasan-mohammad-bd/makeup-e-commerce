import apiSlice from "./apiSlice";

const orderAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeAnOrder: builder.mutation({
      query: (payload) => ({
        url: "checkout",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["orders"],
    }),
    getOrders: builder.query({
      query: () => `order/index`,
      providesTags: ["orders"],
    }),
    getOrderById: builder.query({
      query: (order_id) => `order/show/${order_id}`,
      providesTags: ["order"],
    }),
  }),
});

export const {
  usePlaceAnOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
} = orderAPI;
