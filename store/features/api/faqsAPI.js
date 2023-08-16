import apiSlice from "./apiSlice";

const categoriesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query({
      query: () => `faqs`,
      providesTags: ["faqs"],
    }),
  }),
});

export const { useGetFaqsQuery } = categoriesAPI;
