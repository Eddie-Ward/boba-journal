import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { useAppSelector } from "../../../app/hooks";
import TierListEntry from "../TierListEntry/TierListEntry";
import { selectTierEntryIDs } from "../tierlistSlice";

const TIERS = ["A", "B", "C"];

const TierList = () => {
	const tierListEntryIDs = useAppSelector(selectTierEntryIDs);
	const numPerRank = Math.floor((tierListEntryIDs.length - 2) / 3);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				maxWidth: "50rem",
				marginInline: "auto",
				gap: "2rem",
				marginTop: "2rem",
			}}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h1">Rankings</Typography>
			</Box>
			<List>
				{tierListEntryIDs.map((entryID, index, arr) => {
					return (
						<>
							{index === 0 && <Typography variant="h2">S</Typography>}
							{index > 0 && (index - 1) % numPerRank === 0 && index <= numPerRank * 3 && (
								// <Typography variant="h2">A</Typography>
								<Typography variant="h2">{TIERS[Math.floor((index - 1) / numPerRank)]}</Typography>
							)}
							{index === tierListEntryIDs.length - 1 && <Typography variant="h2">F</Typography>}
							<TierListEntry key={entryID} entryID={entryID} />
						</>
					);
				})}
			</List>
		</Box>
	);

	// return (
	// 	<div>
	// 		<h1 style={{ textAlign: "center" }}>Tierlist Entries</h1>
	// 		{tierListEntryIDs.map((entryID) => (
	// 			<TierListEntry key={entryID} entryID={entryID} />
	// 		))}
	// 	</div>
	// );
};

export default TierList;
