import React from "react";
import { useAppSelector } from "../../app/hooks";
import AppMap from "../../features/location/AppMap/AppMap";

const MapPage = () => {
	const locationStatus = useAppSelector((state) => state.location.locationStatus);
	const lat = useAppSelector((state) => state.location.lat);
	const lng = useAppSelector((state) => state.location.lng);

	return locationStatus ? (
		<>
			<AppMap lat={lat} lng={lng} />
		</>
	) : (
		<div>Enter a location!</div>
	);
};

export default MapPage;
