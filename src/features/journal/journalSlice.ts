import { createSlice, createEntityAdapter, PayloadAction, EntityId } from "@reduxjs/toolkit";
import { EntryJournal } from "../../app/stateTypes";
import { RootState } from "../../app/store";

const journalAdapter = createEntityAdapter<EntryJournal>({
	selectId: (entry) => entry.ENTRY_ID,
	sortComparer: (a, b) => b.date - a.date,
});

const initialState = journalAdapter.getInitialState();

const journalSlice = createSlice({
	name: "journal",
	initialState,
	reducers: {
		addNewEntry(state, action: PayloadAction<EntryJournal>) {
			journalAdapter.addOne(state, action.payload);
		},
		addFakeEntries(state, action: PayloadAction<Record<EntityId, EntryJournal>>) {
			journalAdapter.addMany(state, action.payload);
		},
	},
});

export const {
	selectAll: selectAllEntries,
	selectById: selectEntryByID,
	selectIds: selectEntryIDs,
} = journalAdapter.getSelectors((state: RootState) => state.journal);

export const { addNewEntry, addFakeEntries } = journalSlice.actions;

export default journalSlice.reducer;
