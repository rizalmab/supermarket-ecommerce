import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log("action.payload", action.payload);
      const searchedItem = state.filter(
        (item) => item.item.id === action.payload.item.id
      );
      console.log("searchedItem", searchedItem);
      if (searchedItem.length === 0) {
        state.push(action.payload);
      } else {
        const index = state.indexOf(...searchedItem);
        state[index].cartQuantity += action.payload.cartQuantity;
      }
    },
    removeFromCart: () => {},
  },
});

export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;

export const selectNoOfItemsInCart = (state) => {
  return state.shop.length;
};

export const selectCartItems = (state) => {
  return state.shop;
};
