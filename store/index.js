import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import apiSlice from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
