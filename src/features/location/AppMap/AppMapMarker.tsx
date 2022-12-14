import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectLocationByID, setSelected } from "../locationSlice";

interface MarkerProps {
	id: EntityId;
	icon: google.maps.Icon;
}

const AppMapMarker = ({ id, icon }: MarkerProps) => {
	const place = useAppSelector((state) => selectLocationByID(state, id));
	const dispatch = useAppDispatch();
	const [visible, setVisible] = useState(false);

	return (
		<Marker
			position={{ lat: place?.lat as number, lng: place?.lng as number }}
			icon={icon}
			label={visible ? place?.locationName : ""}
			onClick={(e) => dispatch(setSelected(id))}
			onMouseOver={(e) => setVisible(true)}
			onMouseOut={(e) => setVisible(false)}
		/>
	);
};

export default AppMapMarker;
