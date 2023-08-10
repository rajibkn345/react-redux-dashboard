import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  const response = await axios.post(
    "http://localhost:5050/api/v1/auth/register",
    data
  );
});
