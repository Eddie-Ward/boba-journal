import React, { useState, FormEvent, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import SvgIcon from "@mui/material/SvgIcon";
import Autocomplete from "@mui/material/Autocomplete";
import { EntryJournal } from "../../../app/stateTypes";
import { nanoid } from "@reduxjs/toolkit";
import { ReactComponent as HeartFilled } from "../../../assets/imgs/HeartIconFilled.svg";
import { ReactComponent as HeartEmpty } from "../../../assets/imgs/HeartIconOutline.svg";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAllLocations } from "../../location/locationSlice";
import { addNewEntry } from "../journalSlice";

const initialValues = {
	date: "",
	rating: 2.5,
	drink: "",
	comment: "",
	locationName: "",
	placeID: "",
};

const JournalNewEntry = ({ setOpen }: { setOpen: (value: React.SetStateAction<boolean>) => void }) => {
	const [formValues, setFormValues] = useState(initialValues);
	const dispatch = useAppDispatch();
	const places = useAppSelector(selectAllLocations);

	const handleChange = <T extends { name: string; value: string }>(e: ChangeEvent<T>) => {
		const { name, value } = e.target as unknown as T;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const newEntry: EntryJournal = {
			...formValues,
			ENTRY_ID: nanoid(),
			date: formValues.date ? new Date(formValues.date).getTime() : Date.now(),
			drink: formValues.drink || "Milk Tea",
		};

		dispatch(addNewEntry(newEntry));
		setFormValues(initialValues);
		setOpen(false);
	};

	return (
		<Box
			margin={"3rem"}
			component={"form"}
			onSubmit={handleSubmit}
			noValidate
			sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<Typography variant="h2">Add a new entry</Typography>
			<Box
				sx={{
					display: "flex",
					gap: "1rem",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
				}}>
				<TextField
					label="Date"
					name="date"
					type="date"
					onChange={handleChange}
					value={formValues.date}
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Drink"
					name="drink"
					placeholder="Enter drink name"
					type="text"
					onChange={handleChange}
					value={formValues.drink}
				/>
				<Rating
					size="small"
					value={formValues.rating}
					onChange={(e, value) => setFormValues({ ...formValues, rating: value || 2.5 })}
					precision={0.5}
					icon={<SvgIcon component={HeartFilled} inheritViewBox />}
					emptyIcon={<SvgIcon component={HeartEmpty} inheritViewBox />}
				/>
			</Box>
			<Autocomplete
				id="location-combo-box"
				autoComplete
				includeInputInList
				filterSelectedOptions
				filterOptions={(x) => x}
				getOptionLabel={(option) => option.locationName}
				renderOption={(props, option) => {
					return (
						<li {...props} key={option.PLACE_ID}>
							{option.locationName}
						</li>
					);
				}}
				options={places}
				onChange={(e, v, d) => {
					if (d === "selectOption") {
						setFormValues({
							...formValues,
							locationName: v?.locationName || "",
							placeID: `${v?.PLACE_ID}`,
						});
					}
				}}
				renderInput={(params) => <TextField {...params} variant="outlined" label="Location" />}
			/>
			<TextField label="Comments" name="comment" type="text" multiline rows={5} />
			<Button
				type="submit"
				variant="contained"
				size="large"
				color="primary"
				sx={{ maxWidth: "5rem", marginTop: "3rem" }}>
				Submit
			</Button>
		</Box>
	);
};

export default JournalNewEntry;
