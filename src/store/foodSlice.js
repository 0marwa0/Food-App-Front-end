import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchFood = createAsyncThunk("food/get-all", async () => {
  const response = await fetch("http:localhost:300/api/resturant/get-all");
  const data = await response.json();
  return data;
});
const foodSlice = createSlice({
  name: "food",
  initialState: {
    food: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFood.fulfilled, (state, action) => {
      state.status = "successed";
      state.food = action.payload;
    });
  },
});

export default foodSlice.reducer;
