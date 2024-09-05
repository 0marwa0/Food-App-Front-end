import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "food/get-categories",
  async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/category/get-all"
      );
      const data = await response.json();

      console.log(data, "api data");
      return data;
    } catch (error) {
      console.log(error, "unable to get get the data");
    }
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
      // console.log(action, "action paylod");
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
