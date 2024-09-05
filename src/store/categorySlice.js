import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "food/get-categories",
  async () => {
    const response = await fetch("http:localhost:300/api/category/get-all");
    const data = await response.json();
    return data;
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState: {
    data: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = "successed";
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "loading";
    });
  },
});

export default categorySlice.reducer;
