import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      const product = { ...action.payload };
      const index = state.cart.map((item) => item.id).indexOf(product.id);
      if (index === -1) {
        product.quantity = 1;
        state.cart.push(product);
      } else {
        product.quantity = state.cart[index].quantity + 1;
        state.cart.splice(index, 1, product);
      }
    },
    removeFromCart: (state, action) => {
      const product = { ...action.payload };
      const index = state.cart.map((item) => item.id).indexOf(product.id);
      if (product.quantity > 1) {
        product.quantity = state.cart[index].quantity - 1;
        state.cart.splice(index, 1, product);
      } else {
        state.cart.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { toggleCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
