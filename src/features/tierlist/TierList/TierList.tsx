import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { RankS, RankA, RankB, RankC, RankF } from "../../../assets/imgs/rankings/RankingIcons";
import { useAppSelector } from "../../../app/hooks";
import TierListEntry from "../TierListEntry/TierListEntry";
import { selectTierEntryIDs } from "../tierlistSlice";

const TIERS = [RankA, RankB, RankC];
const ALT_TEXT = ["A Rank", "B Rank", "C Rank"];
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
							{index === 0 && (
								<ListItemAvatar>
									<Avatar alt="S Rank" src={RankS} sx={{ width: 64, height: 64 }} variant="square" />
								</ListItemAvatar>
							)}
							{index > 0 && (index - 1) % numPerRank === 0 && index <= numPerRank * 3 && (
								<ListItemAvatar>
									<Avatar
										alt={ALT_TEXT[Math.floor((index - 1) / numPerRank)]}
										src={TIERS[Math.floor((index - 1) / numPerRank)]}
										variant="square"
										sx={{ width: 64, height: 64 }}
									/>
								</ListItemAvatar>
							)}
							{index === tierListEntryIDs.length - 1 && (
								<ListItemAvatar>
									<Avatar alt="F Rank" src={RankF} sx={{ width: 64, height: 64 }} variant="square" />
								</ListItemAvatar>
							)}
							<TierListEntry key={entryID} entryID={entryID} />
						</>
					);
				})}
			</List>
		</Box>
	);
};

export default TierList;
