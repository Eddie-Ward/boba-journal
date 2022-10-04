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
			// const places: StoreLocation[] = [];
			// action.payload.forEach((res) => {
			// 	const numLat = Number(res.geometry?.location?.lat());
			// 	const numLng = Number(res.geometry?.location?.lat());

			// 	const storeLocation: StoreLocation = {
			// 		PLACE_ID: res.place_id || (nanoid() as EntityId),
			// 		lat: numLat,
			// 		lng: numLng,
			// 		locationName: res.name || "",
			// 		address: res.formatted_address || "",
			// 		priceLevel: res.price_level || 2,
			// 		rating: res.rating || 3,
			// 		totalRatings: res.user_ratings_total || 0,
			// 		journalEntryIDs: [],
			// 	};
			// 	places.push(storeLocation);
			// });
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
