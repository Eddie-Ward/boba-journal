import { EntityId, nanoid } from "@reduxjs/toolkit";
import React, { FormEvent, useRef } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { EntryJournal } from "../../../app/stateTypes";
import { addNewEntry } from "../journalSlice";

const LOCATION_NAME: Record<string, string> = {
	A: "Gong Cha",
	B: "Happy Lemon",
	C: "TP Tea",
	D: "Yifang",
	E: "Kung Fu Tea",
};

const JournalForm = () => {
	const dispatch = useAppDispatch();

	const dateRef = useRef<HTMLInputElement>(null);
	const ratingRef = useRef<HTMLInputElement>(null);
	const drinkRef = useRef<HTMLInputElement>(null);
	const locationRef = useRef<HTMLSelectElement>(null);
	const commentRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const newEntry: EntryJournal = {
			ENTRY_ID: nanoid() as EntityId,
			date: dateRef.current?.value || "10/1/22",
			rating: Number(ratingRef.current?.value) || 5,
			drink: drinkRef.current?.value || "Milk Tea",
			comment: commentRef.current?.value || "",
			locationName: LOCATION_NAME[locationRef.current?.value || "A"],
			placeID: locationRef.current?.value || "A",
		};
		console.log(newEntry);
		dispatch(addNewEntry(newEntry));
	};

	return (
		<div style={{ maxWidth: "40rem", marginInline: "auto" }}>
			<form onSubmit={(e) => handleSubmit(e)} action="">
				<h2>Add a new entry</h2>
				<div style={{ marginLeft: "2rem", textAlign: "left" }}>
					<label htmlFor="entry-date">Date: </label>
					<input ref={dateRef} type="date" name="" id="entry-date" />
					<label htmlFor="rating">Rating: </label>
					<input ref={ratingRef} type="number" name="" id="rating" />
					<label htmlFor="drink">Drink: </label>
					<input ref={drinkRef} type="text" name="" id="drink" />
				</div>
				<div style={{ marginTop: "1rem", textAlign: "left", marginLeft: "2rem" }}>
					<select ref={locationRef} name="" id="Location">
						<option value="A">Gong Cha</option>
						<option value="B">Happy Lemon</option>
						<option value="C">TP Tea</option>
						<option value="D">Yifang</option>
						<option value="E">Kung Fu Tea</option>
					</select>
				</div>
				<div style={{ marginLeft: "2rem", textAlign: "left" }}>
					<label style={{ display: "block", marginTop: "2rem" }} htmlFor="comment">
						Notes
					</label>
					<textarea
						ref={commentRef}
						style={{ display: "block", marginTop: "0.5rem" }}
						name=""
						id="comment"
						cols={80}
						rows={10}></textarea>
					<button style={{ marginTop: "1rem" }} type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default JournalForm;
