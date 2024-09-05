// features/itemsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch items
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetch("http://localhost:3000/api/resturant/get-all");
  return await response.json();
});

// Delete item
export const deleteItem = createAsyncThunk("items/deleteItem", async (id) => {
  await fetch(`https://api.example.com/items/${id}`, {
    method: "DELETE",
  });
  return id;
});

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default itemsSlice.reducer;
