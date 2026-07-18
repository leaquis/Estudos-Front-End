import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    filter: "all",
  },
  reducers: {},
});

export default todoSlice.reducer;
