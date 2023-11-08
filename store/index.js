import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import api from "./api/api";
import authSlice from "./slices/authSlice";
import commonSlice from "./slices/commonSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		[api.reducerPath]: api.reducer,
		auth: authSlice,
		common: commonSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
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
