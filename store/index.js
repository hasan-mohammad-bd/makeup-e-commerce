import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import apiSlice from "./features/api/apiSlice";
import authSlice from "./features/authSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
