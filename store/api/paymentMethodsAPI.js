import api from "./api";

const paymentMethodsAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		getPaymentMethods: builder.query({
			query: () => ({
				url: "info/payment-method",
			}),
			providesTags: ["payment-methods"],
		}),
	}),
});

export const { useGetPaymentMethodsQuery } = paymentMethodsAPI;
