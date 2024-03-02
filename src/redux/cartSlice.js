// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cart;

export default cartSlice.reducer;
