import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  isError: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
