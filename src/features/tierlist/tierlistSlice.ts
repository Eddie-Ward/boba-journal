import { createSlice, createSelector, createEntityAdapter, PayloadAction, EntityId, nanoid } from "@reduxjs/toolkit";
import { EntryTierlist } from "../../app/stateTypes";
import { RootState } from "../../app/store";
import { addFakeEntries, addNewEntry } from "../journal/journalSlice";

const tierlistAdapter = createEntityAdapter<EntryTierlist>({
	selectId: (entry) => entry.PLACE_ID,
	sortComparer: (a, b) => b.ranking - a.ranking,
});

const initialState = tierlistAdapter.getInitialState();

const tierlistSlice = createSlice({
	name: "journal",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addFakeEntries, (state, action) => {
				for (let entry of Object.values(action.payload)) {
					if (entry.placeID in state.entities) {
						if (!state.entities[entry.placeID]?.journalEntryIDs.includes(entry.ENTRY_ID)) {
							state.entities[entry.placeID]?.journalEntryIDs.push(entry.ENTRY_ID);
						}
					} else {
						const newEntry: EntryTierlist = {
							PLACE_ID: entry.placeID,
							journalEntryIDs: [entry.ENTRY_ID],
							ranking: entry.rating,
						};
						tierlistAdapter.addOne(state, newEntry);
					}
				}
			})
			.addCase(addNewEntry, (state, action) => {
				const entry = action.payload;
				const id = entry.placeID;
				if (id in state.entities) {
					state.entities[id]?.journalEntryIDs.push(action.payload.ENTRY_ID);
				} else {
					const newEntry: EntryTierlist = {
						PLACE_ID: id,
						journalEntryIDs: [entry.ENTRY_ID],
						ranking: entry.rating,
					};
					tierlistAdapter.addOne(state, newEntry);
				}
			});
	},
});

export const {
	selectAll: selectAllTierEntries,
	selectById: selectTierEntryByID,
	selectIds: selectTierEntryIDs,
} = tierlistAdapter.getSelectors((state: RootState) => state.tierlist);

export const {} = tierlistSlice.actions;

export default tierlistSlice.reducer;
