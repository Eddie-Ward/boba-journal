import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import AppMap from "../../features/location/AppMap/AppMap";

const places = ["places" as const];

const MapPage = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_MAPS_KEY!,
		libraries: places,
	});

	return isLoaded ? (
		<>
			<div></div>
		</>
	) : (
		<div>Loading...</div>
	);
};

export default MapPage;
