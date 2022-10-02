import { EntityId } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { EntryJournal } from "../../../app/stateTypes";
import JournalEntry from "../JournalEntry/JournalEntry";
import { addFakeEntries, selectAllEntries, selectEntryIDs } from "../journalSlice";

const samples: Record<EntityId, EntryJournal> = {
	"1": {
		ENTRY_ID: "1",
		date: "9/16/22",
		rating: 4,
		drink: "Oolong Milk Tea",
		comment: "Too sweet",
		locationName: "Gong Cha",
		placeID: "A",
	},
	"2": {
		ENTRY_ID: "2",
		date: "9/16/22",
		rating: 2,
		drink: "Oolong Milk Tea",
		comment: "Too sweet",
		locationName: "Happy Lemon",
		placeID: "A",
	},
	"3": {
		ENTRY_ID: "3",
		date: "9/16/22",
		rating: 10,
		drink: "Oolong Milk Tea",
		comment: "Too sweet",
		locationName: "TP Tea",
		placeID: "A",
	},
	"4": {
		ENTRY_ID: "4",
		date: "9/16/22",
		rating: 8,
		drink: "Oolong Milk Tea",
		comment: "Too sweet",
		locationName: "Yifang",
		placeID: "A",
	},
};

const JournalList = () => {
	const journalEntryIDs = useAppSelector(selectEntryIDs);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(addFakeEntries(samples));
	}, [dispatch]);

	return (
		<div>
			<h1>Journal Entries</h1>
			{journalEntryIDs.map((entryID) => (
				<JournalEntry key={entryID} entryID={entryID} />
			))}
		</div>
	);
};

export default JournalList;
