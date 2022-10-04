import { EntityId, nanoid } from "@reduxjs/toolkit";
import React, { FormEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { EntryJournal } from "../../../app/stateTypes";
import { selectAllLocations, selectLocationByID, selectLocationIDs } from "../../location/locationSlice";
import { addNewEntry } from "../journalSlice";
import JournalFormLocations from "./JournalFormLocations";

const LOCATION_NAME: Record<string, string> = {
	A: "Gong Cha",
	B: "Happy Lemon",
	C: "TP Tea",
	D: "Yifang",
	E: "Kung Fu Tea",
	F: "Wanpo Tea",
};

const JournalForm = () => {
	const dispatch = useAppDispatch();
	const places = useAppSelector(selectAllLocations);

	const formRef = useRef<HTMLFormElement>(null);
	const dateRef = useRef<HTMLInputElement>(null);
	const ratingRef = useRef<HTMLInputElement>(null);
	const drinkRef = useRef<HTMLInputElement>(null);
	const locationRef = useRef<HTMLSelectElement>(null);
	const commentRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const id = locationRef.current?.value;
		const locationName = id ? places.filter((res) => res.PLACE_ID === id)[0].locationName : "";

		const newEntry: EntryJournal = {
			ENTRY_ID: nanoid() as EntityId,
			date: dateRef.current?.value ? dateRef.current.valueAsNumber! : Date.now(),
			rating: ratingRef.current?.value ? Number(ratingRef.current.value) : 5,
			drink: drinkRef.current?.value || "Milk Tea",
			comment: commentRef.current?.value || "",
			locationName: locationName,
			placeID: id || nanoid(),
		};
		console.log(newEntry);
		dispatch(addNewEntry(newEntry));
		formRef.current?.reset();
	};

	return (
		<div style={{ maxWidth: "40rem", marginInline: "auto" }}>
			<form ref={formRef} onSubmit={(e) => handleSubmit(e)} action="">
				<h2>Add a new entry</h2>
				<div style={{ marginLeft: "2rem", textAlign: "left" }}>
					<label htmlFor="date">Date: </label>
					<input ref={dateRef} type="date" name="" id="date" />
					<label htmlFor="rating">Rating: </label>
					<input ref={ratingRef} type="number" name="" id="rating" />
					<label htmlFor="drink">Drink: </label>
					<input ref={drinkRef} type="text" name="" id="drink" />
				</div>
				<div style={{ marginTop: "1rem", textAlign: "left", marginLeft: "2rem" }}>
					<select ref={locationRef} name="" id="location">
						{/* <option value="A">Gong Cha</option>
						<option value="B">Happy Lemon</option>
						<option value="C">TP Tea</option>
						<option value="D">Yifang</option>
						<option value="E">Kung Fu Tea</option>
						<option value="F">Wanpo Tea</option> */}
						{places.map((place) => (
							<option key={place.PLACE_ID} value={place.PLACE_ID}>
								{place.locationName}
							</option>
						))}
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
