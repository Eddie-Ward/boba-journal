import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import Paper from "@mui/material/Paper";
import { ReactComponent as HeartFilled } from "../../../assets/imgs/HeartIconFilled.svg";
import { ReactComponent as HeartEmpty } from "../../../assets/imgs/HeartIconOutline.svg";
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
	const stringDate = new Date(date).toDateString();
	return (
		<ListItem
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				marginY: "1.5rem",
				marginX: 0,
				padding: 0,
			}}>
			<Paper elevation={3} sx={{ width: "100%", borderRadius: 5, marginInline: "auto", margin: 0 }}>
				<Typography variant="h2" marginY={"1.5rem"} marginX={"1.5rem"}>
					{locationName}
				</Typography>
				<Typography variant="subtitle1" component="legend" marginX={"1.5rem"}>
					Your rating
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginInline: "1.5rem",
						marginBottom: "1rem",
					}}>
					<Rating
						readOnly
						name="Your rating"
						size="small"
						value={rating}
						precision={0.5}
						icon={<SvgIcon component={HeartFilled} inheritViewBox />}
						emptyIcon={<SvgIcon component={HeartEmpty} inheritViewBox />}
					/>
					<Typography variant="body1">{stringDate}</Typography>
				</Box>
				<Divider />
				<ListItemText
					primary={drink}
					primaryTypographyProps={{ variant: "h3" }}
					secondary={comment}
					secondaryTypographyProps={{ variant: "body1" }}
					sx={{ marginY: "1rem", marginInline: "1.5rem" }}
				/>
			</Paper>
		</ListItem>
	);
};

export default JournalEntry;
