import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGlobalLoading: false,
  isFilterPanelOpen: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setGlobalLoader: (state, action) => {
      state.isGlobalLoading = action.payload;
    },
    toggleFilterPanel: (state) => {
      state.isFilterPanelOpen = !state.isFilterPanelOpen;
    },
  },
});

export const { setGlobalLoader, toggleFilterPanel } = commonSlice.actions;

export default commonSlice.reducer;
