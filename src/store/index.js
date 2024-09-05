// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./resturantSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
