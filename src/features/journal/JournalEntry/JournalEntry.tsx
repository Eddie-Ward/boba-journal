import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { EntityId } from "@reduxjs/toolkit";
import { selectEntryByID } from "../journalSlice";
import { EntryJournal } from "../../../app/stateTypes";

interface EntryProps {
	entryID: EntityId;
}

let JournalEntry = ({ entryID }: EntryProps) => {
	const entry = useAppSelector((state) => selectEntryByID(state, entryID));
	const { date, rating, drink, comment, locationName } = entry as EntryJournal;
	return (
		<article style={{ maxWidth: "40rem", marginInline: "auto", marginBottom: "2rem" }} key={entryID}>
			<div style={{ display: "flex", alignItems: "center" }}>
				<span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{locationName}</span>
				<span style={{ marginLeft: "auto" }}>{`${date}`}</span>
			</div>
			<div style={{ display: "flex" }}>
				<p>{drink}</p>
				<p style={{ marginLeft: "auto" }}>{`${rating} / 10`}</p>
			</div>
			<p style={{ textAlign: "left" }}>{comment}</p>
		</article>
	);
};

export default JournalEntry;
