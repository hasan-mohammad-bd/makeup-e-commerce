import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: true,
  isLoginModalOpen: false,
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
    setLoginModalOpen: (state, action) => {
      state.isLoginModalOpen = action.payload;
    },
  },
});

export const { setUserLoading, setUser, logOut, setLoginModalOpen } =
  authSlice.actions;

export default authSlice.reducer;
