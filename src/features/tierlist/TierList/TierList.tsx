import React from "react";
import { useAppSelector } from "../../../app/hooks";
import TierListEntry from "../TierListEntry/TierListEntry";
import { selectTierEntryIDs } from "../tierlistSlice";

const TierList = () => {
	const tierListEntryIDs = useAppSelector(selectTierEntryIDs);

	return (
		<div>
			<h1>Tierlist Entries</h1>
			{tierListEntryIDs.map((entryID) => (
				<TierListEntry key={entryID} entryID={entryID} />
			))}
		</div>
	);
};

export default TierList;
