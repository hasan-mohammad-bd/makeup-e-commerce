import api from "./api";

const supportTicketAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		addSupportTicket: builder.mutation({
			query: (ticketInfo) => ({
				url: "support-ticket",
				method: "POST",
				body: ticketInfo,
			}),
			invalidatesTags: ["s-ticket"],
		}),
		getSupportTicket: builder.query({
			query: (payload) => ({
				url: "support-ticket",
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["s-ticket"],
		}),
		getSupportTicketTypes: builder.query({
			query: (payload) => ({
				url: "support-ticket-type",
				headers: {
					lang: payload?.locale,
				},
			}),
			providesTags: ["s-ticket-type"],
		}),
	}),
});

export const {
	useAddSupportTicketMutation,
	useGetSupportTicketQuery,
	useGetSupportTicketTypesQuery,
} = supportTicketAPI;
