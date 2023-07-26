import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logOut: (state) => {
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
  },
});

export const { setUserLoading, setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
