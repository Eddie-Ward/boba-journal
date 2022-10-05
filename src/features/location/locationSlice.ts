import { createSlice, createSelector, createEntityAdapter, PayloadAction, EntityId, nanoid } from "@reduxjs/toolkit";
import { StoreLocation } from "../../app/stateTypes";
import { RootState } from "../../app/store";

const locationAdapter = createEntityAdapter<StoreLocation>({
	selectId: (entry) => entry.PLACE_ID,
	sortComparer: (a, b) => a.rating - b.rating,
});

const initialState = locationAdapter.getInitialState({
	locationStatus: false,
	fetchStatus: false,
	lat: 0,
	lng: 0,
});

const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		addPlacesResults(state, action: PayloadAction<StoreLocation[]>) {
			locationAdapter.addMany(state, action.payload);
		},
		setLocationStatus(state, action: PayloadAction<boolean>) {
			state.locationStatus = action.payload;
		},
		setFetchStatus(state, action: PayloadAction<boolean>) {
			state.fetchStatus = action.payload;
		},
		setLat(state, action: PayloadAction<number>) {
			state.lat = action.payload;
		},
		setLng(state, action: PayloadAction<number>) {
			state.lng = action.payload;
		},
	},
	extraReducers: (builder) => {},
});

export const {
	selectAll: selectAllLocations,
	selectById: selectLocationByID,
	selectIds: selectLocationIDs,
} = locationAdapter.getSelectors((state: RootState) => state.location);

export const { addPlacesResults, setLocationStatus, setFetchStatus, setLat, setLng } = locationSlice.actions;

export default locationSlice.reducer;
