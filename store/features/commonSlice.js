import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGlobalLoading: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setGlobalLoader: (state, action) => {
      state.isGlobalLoading = action.payload;
    },
  },
});

export const { setGlobalLoader } = commonSlice.actions;

export default commonSlice.reducer;
