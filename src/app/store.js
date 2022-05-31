import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";
// import async from "./middleware/async";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(async),
});
