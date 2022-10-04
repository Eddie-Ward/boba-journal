import { createSlice, createSelector, createEntityAdapter, PayloadAction, EntityId, nanoid } from "@reduxjs/toolkit";
import { StoreLocation } from "../../app/stateTypes";
import { RootState } from "../../app/store";

const locationAdapter = createEntityAdapter<StoreLocation>({
	selectId: (entry) => entry.PLACE_ID,
	sortComparer: (a, b) => a.rating - b.rating,
});

const initialState = locationAdapter.getInitialState();

const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		addPlacesResults(state, action: PayloadAction<StoreLocation[]>) {
			locationAdapter.addMany(state, action.payload);
		},
	},
	extraReducers: (builder) => {},
});

export const {
	selectAll: selectAllLocations,
	selectById: selectLocationByID,
	selectIds: selectLocationIDs,
} = locationAdapter.getSelectors((state: RootState) => state.location);

export const { addPlacesResults } = locationSlice.actions;

export default locationSlice.reducer;
