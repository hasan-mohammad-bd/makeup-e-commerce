import api from "./api";

const contactAPI = api.injectEndpoints({
	endpoints: (builder) => ({
		contactNow: builder.mutation({
			query: (payload) => ({
				url: "contact-message",
				method: "POST",
				body: payload,
			}),
		}),
		addToNewsletter: builder.mutation({
			query: (payload) => ({
				url: "newsletter",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const { useContactNowMutation, useAddToNewsletterMutation } = contactAPI;
