import { EntityId } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { EntryJournal } from "../../../app/stateTypes";
import JournalEntry from "../JournalEntry/JournalEntry";
import { addFakeEntries, selectEntryIDs } from "../journalSlice";

const samples: Record<EntityId, EntryJournal> = {
	"1": {
		ENTRY_ID: "1",
		date: new Date(2022, 8, 12).getTime(),
		rating: 4,
		drink: "Oolong Milk Tea",
		comment: "Flavor is watered down",
		locationName: "Gong Cha",
		placeID: "A",
	},
	"2": {
		ENTRY_ID: "2",
		date: new Date(2022, 8, 12).getTime(),
		rating: 2,
		drink: "Oolong Milk Tea",
		comment: "No flavor and too sweet",
		locationName: "Happy Lemon",
		placeID: "B",
	},
	"3": {
		ENTRY_ID: "3",
		date: new Date(2022, 8, 16).getTime(),
		rating: 10,
		drink: "Oolong Milk Tea",
		comment: "Amazing",
		locationName: "TP Tea",
		placeID: "C",
	},
	"4": {
		ENTRY_ID: "4",
		date: new Date(2022, 9, 14).getTime(),
		rating: 8,
		drink: "Coffee Jelly Milk Tea",
		comment: "Overall good but expensive",
		locationName: "Yifang",
		placeID: "D",
	},
	"5": {
		ENTRY_ID: "5",
		date: new Date(2022, 8, 14).getTime(),
		rating: 5,
		drink: "Wintermelon Green Tea",
		comment: "Good relative to price",
		locationName: "Kung Fu Tea",
		placeID: "E",
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
			<h1 style={{ textAlign: "center" }}>Journal Entries</h1>
			{journalEntryIDs.map((entryID) => (
				<JournalEntry key={entryID} entryID={entryID} />
			))}
		</div>
	);
};

export default JournalList;
