import { EntityId } from "@reduxjs/toolkit";
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectLocationByID } from "../../location/locationSlice";

interface LocationProps {
	id: EntityId;
}

const JournalFormLocations = ({ id }: LocationProps) => {
	const location = useAppSelector((state) => selectLocationByID(state, id));

	return location ? <option value={id}>{location.locationName}</option> : <option disabled={true}></option>;
};

export default JournalFormLocations;
