import { createSlice, createSelector, createEntityAdapter, PayloadAction, EntityId, nanoid } from "@reduxjs/toolkit";
import { EntryTierlist } from "../../app/stateTypes";
import { RootState } from "../../app/store";
import { addFakeEntries, addNewEntry } from "../journal/journalSlice";

interface RankChange {
	entryID: EntityId;
	ranking: number;
}

const tierlistAdapter = createEntityAdapter<EntryTierlist>({
	selectId: (entry) => entry.PLACE_ID,
	sortComparer: (a, b) => a.ranking - b.ranking,
});

const initialState = tierlistAdapter.getInitialState();

const tierlistSlice = createSlice({
	name: "tierlist",
	initialState,
	reducers: {
		moveRankUp(state, action: PayloadAction<RankChange>) {
			const { entryID, ranking } = action.payload;
			if (ranking > 1) {
				const swapID = state.ids[ranking - 2];

				tierlistAdapter.updateMany(state, [
					{ id: entryID, changes: { ranking: ranking - 1 } },
					{ id: swapID, changes: { ranking: ranking } },
				]);
			}
		},
		moveRankDown(state, action: PayloadAction<RankChange>) {
			const { entryID, ranking } = action.payload;
			if (ranking < state.ids.length + 1) {
				const swapID = state.ids[ranking];

				tierlistAdapter.updateMany(state, [
					{ id: entryID, changes: { ranking: ranking + 1 } },
					{ id: swapID, changes: { ranking: ranking } },
				]);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addFakeEntries, (state, action) => {
				for (let entry of Object.values(action.payload)) {
					const id = entry.placeID;
					if (id in state.entities) {
						if (!state.entities[id]?.journalEntryIDs.includes(entry.ENTRY_ID)) {
							state.entities[id]!.journalEntryIDs.push(entry.ENTRY_ID);
							let avg = state.entities[id]!.avgRating;
							avg = (avg + entry.rating) / 2;
							state.entities[id]!.avgRating = avg;
						}
					} else {
						const newEntry: EntryTierlist = {
							PLACE_ID: id,
							journalEntryIDs: [entry.ENTRY_ID],
							locationName: entry.locationName,
							avgRating: entry.rating,
							ranking: state.ids.length + 1,
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
					let avg = state.entities[id]!.avgRating;
					avg = (avg + entry.rating) / 2;
					state.entities[id]!.avgRating = avg;
				} else {
					const newEntry: EntryTierlist = {
						PLACE_ID: id,
						journalEntryIDs: [entry.ENTRY_ID],
						locationName: entry.locationName,
						avgRating: entry.rating,
						ranking: state.ids.length + 1,
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

export const { moveRankDown, moveRankUp } = tierlistSlice.actions;

export default tierlistSlice.reducer;
