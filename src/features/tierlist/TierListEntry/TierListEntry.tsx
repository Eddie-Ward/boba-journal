import { EntityId } from "@reduxjs/toolkit";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { EntryTierlist } from "../../../app/stateTypes";
import { moveRankUp, moveRankDown, selectTierEntryByID } from "../tierlistSlice";

interface EntryProps {
	entryID: EntityId;
}

const divStyle: React.CSSProperties = {
	display: "flex",
	alignItems: "center",
	marginTop: "0.5rem",
};

let TierListEntry = ({ entryID }: EntryProps) => {
	const entry = useAppSelector((state) => selectTierEntryByID(state, entryID));
	const dispatch = useAppDispatch();

	const { locationName, journalEntryIDs, avgRating, ranking } = entry as EntryTierlist;
	const numEntries = journalEntryIDs.length;

	return (
		<article style={{ maxWidth: "40rem", marginInline: "auto", marginBottom: "2rem" }} key={entryID}>
			<div style={divStyle}>
				<span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{locationName}</span>
				<span style={{ marginLeft: "auto" }}>{`${ranking}`}</span>
			</div>
			<div style={divStyle}>
				<span style={{ textAlign: "left" }}>{`${avgRating} / 10`}</span>
				<button
					style={{ marginLeft: "auto" }}
					onClick={() => {
						dispatch(moveRankUp({ entryID, ranking }));
					}}>
					Up
				</button>
			</div>
			<div style={divStyle}>
				<span style={{ textAlign: "left" }}>
					{numEntries} {numEntries > 1 ? "entries" : "entry"} in journal
				</span>
				<button
					style={{ marginLeft: "auto" }}
					onClick={() => {
						dispatch(moveRankDown({ entryID, ranking }));
					}}>
					Down
				</button>
			</div>
		</article>
	);
};

export default TierListEntry;
