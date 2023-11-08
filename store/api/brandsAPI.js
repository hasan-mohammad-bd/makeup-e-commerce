import api from "./api";

const brandsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getBrands: builder.query({
			query: (payload) => ({
				url: "brands",
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["brands"],
		}),
	}),
});

export const { useGetBrandsQuery } = brandsAPI;
