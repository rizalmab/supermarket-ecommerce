import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const searchedItem = state.filter(
        (item) => item.id === action.payload.id
      );
      if (searchedItem.length === 0) {
        state.push(action.payload);
      } else {
        const index = state.indexOf(...searchedItem);
        state[index].quantity += action.payload.quantity;
      }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;
