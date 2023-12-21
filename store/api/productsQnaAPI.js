import api from "./api";

const productsQnaAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		addToProductQna: builder.mutation({
			query: (payload) => ({
				url: "product-questions",
				method: "POST",
				body: payload,
			}),
			invalidatesTags: ["product-qna"],
		}),
		//Getting product question list
		getProductQnaList: builder.query({
			query: (payload) =>
				`products-questions/${payload?.productId}?per_page=6&${payload?.params}`,
			providesTags: ["product-qna"],
		}),
	}),
});

export const { useAddToProductQnaMutation, useGetProductQnaListQuery } =
	productsQnaAPI;
