import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
	width: "400px",
	height: "400px",
};

const center = {
	lat: 37.339,
	lng: -121.89,
};

const places = ["places" as const];

function AppMapTest() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_MAPS_KEY!,
		libraries: places,
	});

	// const [map, setMap] = React.useState<google.maps.Map | null>(null);

	// const onLoad = React.useCallback(function callback(map: google.maps.Map) {
	// 	const bounds = new window.google.maps.LatLngBounds(center);
	// 	map.fitBounds(bounds);
	// 	setMap(map);
	// }, []);

	// const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
	// 	setMap(null);
	// }, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(AppMapTest);
