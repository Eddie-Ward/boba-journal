import React, { useState } from "react";
import JournalList from "../../features/journal/JournalList/JournalList";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import JournalNewEntry from "../../features/journal/JournalForm/JournalNewEntry";

const JournalPage = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
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
					<Typography variant="h1">Journal</Typography>
					<Button variant="contained" color="primary" sx={{}} onClick={() => setOpen(true)}>
						New Entry
					</Button>
				</Box>
				<JournalList />
			</Box>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Paper
					elevation={10}
					sx={{
						position: "absolute" as "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: { xs: "75vw", md: 800 },
						height: 600,
						borderRadius: 10,
					}}>
					<JournalNewEntry setOpen={setOpen} />
				</Paper>
			</Modal>
		</>
	);
};

export default JournalPage;
