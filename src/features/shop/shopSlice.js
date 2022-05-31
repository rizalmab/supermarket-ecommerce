import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    loading: false,
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // console.log("action.payload", action.payload);
      const searchedItem = state.cartItems.filter(
        (item) => item.item.id === action.payload.item.id
      );
      console.log("searchedItem", searchedItem);
      if (searchedItem.length === 0) {
        state.cartItems.push(action.payload);
      } else {
        const index = state.cartItems.indexOf(...searchedItem);
        state.cartItems[index].cartQuantity += action.payload.cartQuantity;
      }
    },
    removeFromCart: () => {},
    fetchedItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart } = shopSlice.actions;

export default shopSlice.reducer;

//* Selector functions
export const selectNoOfItemsInCart = (state) => {
  return state.shop.cartItems.length;
};

export const selectCartItems = (state) => {
  return state.shop.cartItems;
};

// Thunk
// this is a thunk. It needs to dispatch a normal action type.
export const fetchItems = async (dispatch, getState) => {
  const stateBefore = getState();
  console.log("Items before dispatch: ", stateBefore.cartItems);

  const itemsData = await axios.get("/api/food");
  dispatch({ type: "shop/fetchedItems", payload: itemsData.data });

  const stateAfter = getState();
  console.log("Items after dispatch: ", stateAfter.cartItems);
};
