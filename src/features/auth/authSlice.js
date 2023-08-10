import { createSlice } from "@reduxjs/toolkit";

//create auth silce

const auth = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

//selectors

//actions

export default auth.reducer;
