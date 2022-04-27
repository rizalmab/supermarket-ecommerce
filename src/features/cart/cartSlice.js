import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addToCart: (state, payload) => {
      state.push(payload);
    },
    removeFromCart: () => {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
