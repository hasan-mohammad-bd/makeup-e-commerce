// Need to use the React-specific entry point to allow generating React hooks
// Important note: if we use /react entry point then we can't able to use redux in server component
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.server,
    prepareHeaders: (headers) => {
      // Retrieve the API keys from next config env variables
      const publicKey = process.env.amsPublickey;
      const privateKey = process.env.amsPrivateKey;

      // Set the API key headers
      headers.set("AmsPublicKey", publicKey);
      headers.set("AmsPrivateKey", privateKey);
      return headers;
    },
  }),

  tagTypes: [],
  endpoints: () => ({}),
});

export default apiSlice;
