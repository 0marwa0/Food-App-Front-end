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
      return data.categories;
    } catch (error) {
      console.log(error, "unable to get get the data");
    }
  }
);
export const addCategories = createAsyncThunk(
  "food/add-categories",
  async (category) => {
    try {
      const formdata = new FormData();
      formdata.append("image", category.image);
      formdata.append("title", category.title);
      const response = await fetch("http://localhost:3000/api/category/add", {
        method: "POST",
        body: formdata,
      });
      const data = await response.json();
      console.log(category, data, "add");
      return data;
    } catch (error) {
      console.log(error, "unable to add the data");
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
      state.status = "success";
      // console.log(action, "action paylod");
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(addCategories.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addCategories.fulfilled, (state) => {
      state.status = "success";
    });
  },
});

export default categorySlice.reducer;
