import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as HeartFilled } from "../../../assets/imgs/HeartIconFilled.svg";
import { ReactComponent as HeartEmpty } from "../../../assets/imgs/HeartIconOutline.svg";
import { ReactComponent as UpArrow } from "../../../assets/imgs/UpArrowIcon.svg";
import { ReactComponent as DownArrow } from "../../../assets/imgs/DownArrowIcon.svg";
import { EntityId } from "@reduxjs/toolkit";
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
		<ListItem
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				marginY: "1rem",
				marginX: 0,
				padding: 0,
			}}>
			<Paper
				elevation={3}
				sx={{ display: "flex", width: "100%", borderRadius: 5, marginInline: "auto", margin: 0 }}>
				<Box sx={{ marginX: "1.5rem", flexGrow: "1" }}>
					<Typography variant="h2" marginY={"1.5rem"}>
						{locationName}
					</Typography>
					<Typography variant="subtitle1" component="legend">
						Your average rating
					</Typography>
					<Rating
						readOnly
						name="Your rating"
						size="small"
						sx={{ marginBottom: "1.5rem" }}
						value={avgRating}
						precision={0.25}
						icon={<SvgIcon component={HeartFilled} inheritViewBox />}
						emptyIcon={<SvgIcon component={HeartEmpty} inheritViewBox />}
					/>
					<Divider />
					<Typography variant="body1" mt={"1rem"} mb={"1.5rem"}>
						{numEntries} {numEntries > 1 ? "entries" : "entry"} in journal
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginY: "1.5rem",
						marginRight: "1.5rem",
						marginLeft: "auto",
					}}>
					<IconButton
						size="large"
						sx={{ padding: "0.25rem" }}
						onClick={() => {
							dispatch(moveRankUp({ entryID, ranking }));
						}}>
						<SvgIcon component={UpArrow} fontSize="large" inheritViewBox />
					</IconButton>
					<IconButton
						size="large"
						sx={{ padding: "0.25rem" }}
						onClick={() => {
							dispatch(moveRankDown({ entryID, ranking }));
						}}>
						<SvgIcon component={DownArrow} fontSize="large" inheritViewBox />
					</IconButton>
				</Box>
			</Paper>
		</ListItem>
	);
};

export default TierListEntry;
