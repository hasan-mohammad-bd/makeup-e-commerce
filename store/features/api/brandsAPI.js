import apiSlice from "./apiSlice";

const brandsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => `brands`,
      providesTags: ["brands"],
    }),
  }),
});

export const { useGetBrandsQuery } = brandsAPI;
