import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isGlobalLoading: false,
	locale: "en",
	isFilterPanelOpen: false,
	settings: {},
	settingsLoading: true,
	translations: {},
	translationsLoading: true,
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
		setSettings: (state, action) => {
			state.settings = action.payload;
			state.settingsLoading = false;
		},
		setTranslations: (state, action) => {
			state.translations = action.payload;
			state.translationsLoading = false;
		},
		setLocale: (state, action) => {
			state.locale = action.payload;
		},
	},
});

export const {
	setGlobalLoader,
	toggleFilterPanel,
	setSettings,
	setTranslations,
	setLocale,
} = commonSlice.actions;

export default commonSlice.reducer;
