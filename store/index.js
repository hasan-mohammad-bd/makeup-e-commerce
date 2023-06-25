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

// Add local storage persistence
store.subscribe(() => {
  const cartItems = store.getState().cart.cart;
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving cart items to local storage:", error);
  }
});

export default store;
