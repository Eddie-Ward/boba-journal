import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
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
				marginTop: "1rem",
			}}>
			<Typography variant="h2" marginY={"1rem"}>
				{locationName}
			</Typography>
			<Typography variant="subtitle1" component="legend">
				Your rating
			</Typography>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
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
			<ListItemText
				primary={drink}
				primaryTypographyProps={{ variant: "h3" }}
				secondary={comment}
				secondaryTypographyProps={{ variant: "body1" }}
				sx={{ marginTop: "1rem" }}
			/>
			<Divider />
		</ListItem>
	);

	// return (
	// 	<article style={{ maxWidth: "40rem", marginInline: "auto", marginBottom: "2rem" }} key={entryID}>
	// 		<div style={{ display: "flex", alignItems: "center" }}>
	// 			<span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{locationName}</span>
	// 			<span style={{ marginLeft: "auto" }}>{`${stringDate}`}</span>
	// 		</div>
	// 		<div style={{ display: "flex" }}>
	// 			<p>{drink}</p>
	// 			<p style={{ marginLeft: "auto" }}>{`${rating}`}</p>
	// 		</div>
	// 		<p style={{ textAlign: "left" }}>{comment}</p>
	// 	</article>
	// );
};

export default JournalEntry;
