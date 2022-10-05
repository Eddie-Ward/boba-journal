import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../app/hooks";
import { selectLocationByID } from "../locationSlice";

interface MarkerProps {
	id: EntityId;
	icon: google.maps.Icon;
}

const AppMapMarker = ({ id, icon }: MarkerProps) => {
	const place = useAppSelector((state) => selectLocationByID(state, id));
	const [visible, setVisible] = useState(false);

	console.log(`Marker at ${place?.lat} ${place?.lng}`);

	return (
		<Marker
			position={{ lat: place?.lat as number, lng: place?.lng as number }}
			icon={icon}
			label={visible ? place?.locationName : ""}
			onMouseOver={(e) => setVisible(true)}
			onMouseOut={(e) => setVisible(false)}
		/>
	);
};

export default AppMapMarker;
