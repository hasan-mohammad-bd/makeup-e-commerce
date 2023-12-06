import { generateUniqueId } from "@/utils/get-unique";
import { createSlice } from "@reduxjs/toolkit";

// Helper function to load cart items from local storage
const loadCartItemsFromLocalStorage = () => {
	if (typeof window !== "undefined") {
		try {
			const cartItems = localStorage.getItem("cartItems");
			if (cartItems) {
				return JSON.parse(cartItems);
			}
		} catch (error) {
			console.error("Error loading cart items from local storage:", error);
		}
	}
	return null; // Return null if no cart items found or error occurred
};

const initialState = {
	isCartOpen: false,
	selectedProduct: null,
	cart: loadCartItemsFromLocalStorage() || [], // Initialize with local storage data or an empty array
	discountCoupon: null,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},
		addToSelected: (state, action) => {
			state.selectedProduct = action.payload;
		},
		removeFromSelected: (state) => {
			state.selectedProduct = null;
		},

		//Adding new item to the cart
		addToCart: (state, action) => {
			const { product, selectedVariants = [] } = action.payload;
			selectedVariants.forEach((variant) => {
				const index = state.cart
					.map((item) => item.barcodeId)
					.indexOf(variant.id);

				if (index === -1) {
					const newCartItem = { ...product }; //creating new item for each variant
					newCartItem.barcodeId = variant.id;
					newCartItem.selectedBarCode = variant;
					newCartItem.quantity = 1;
					state.cart.push(newCartItem);
				} else {
					//Incrementing quantity for existing items
					const existingProduct = state.cart[index];
					existingProduct.quantity++;
					state.cart.splice(index, 1, existingProduct);
				}
			});
		},

		// Increasing Item Quantity
		addQuantity: (state, action) => {
			const barcodeId = action.payload;
			const index = state.cart.map((item) => item.barcodeId).indexOf(barcodeId);

			//Updating item
			const item = state.cart[index];
			item.quantity++;
			state.cart.splice(index, 1, item);
		},

		// Decreasing Item Quantity
		removeQuantity: (state, action) => {
			const barcodeId = action.payload;
			const index = state.cart.map((item) => item.barcodeId).indexOf(barcodeId);

			//Updating item
			const item = state.cart[index];
			if (item.quantity > 1) {
				item.quantity--;
				state.cart.splice(index, 1, item);
			} else {
				state.cart.splice(index, 1);
			}
		},

		//Removing item from cart
		removeFromCart: (state, action) => {
			const barcodeId = action.payload;
			const index = state.cart.map((item) => item.barcodeId).indexOf(barcodeId);
			state.cart.splice(index, 1);
		},

		// Clear all items from cart
		clearCart: (state) => {
			state.cart = [];
		},

		// Add coupon discount
		addDiscountInfo: (state, action) => {
			const discount = action.payload;
			state.discountCoupon = discount;
		},

		// Clear coupon discount
		clearDiscountInfo: (state, action) => {
			const discount = action.payload;
			state.discountCoupon = discount;
		},
	},
});

export const {
	toggleCart,
	addToSelected,
	removeFromSelected,
	addToCart,
	addQuantity,
	removeQuantity,
	removeFromCart,
	clearCart,
	addDiscountInfo,
	clearDiscountInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
