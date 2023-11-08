import api from "./api";

const categoriesAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getFaqs: builder.query({
			query: (payload) => ({
				url: "faqs",
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["faqs"],
		}),
	}),
});

export const { useGetFaqsQuery } = categoriesAPI;
