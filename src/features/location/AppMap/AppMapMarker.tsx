import React, { useState } from "react";
import { Marker } from "@react-google-maps/api";
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../app/hooks";
import { selectLocationByID } from "../locationSlice";

interface MarkerProps {
	id: EntityId;
	position: google.maps.LatLng;
	icon: google.maps.Icon;
}

const AppMapMarker = ({ id, position, icon }: MarkerProps) => {
	const place = useAppSelector((state) => selectLocationByID(state, id));
	const [visible, setVisible] = useState(false);

	return (
		<Marker
			position={position}
			icon={icon}
			label={visible ? place?.locationName : ""}
			onMouseOver={(e) => setVisible(true)}
			onMouseOut={(e) => setVisible(false)}
		/>
	);
};

export default AppMapMarker;
