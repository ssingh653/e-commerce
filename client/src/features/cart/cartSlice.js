import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = {
        id: nanoid(),
        items: action.payload,
      };
      state.cartItems = [...state.cartItems, cart];
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (items) => items.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      let updatedCartItem = {};
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].items === action.payload) {
          updatedCartItem = state.cartItems[i].items;
        }
      }
      updatedCartItem.quantity += 1;
      state.cartItems = [updatedCartItem];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
