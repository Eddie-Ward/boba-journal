import React, { useCallback } from "react";
import { GoogleMap, useLoadScript, useJsApiLoader } from "@react-google-maps/api";

const places = ["places" as const];

const center = {
	lat: 37.339,
	lng: -121.89,
};

const containerStyle = {
	width: "400px",
	height: "400px",
};

// const options = {
// 	zoomControlOptions: {
// 		position: google.maps.ControlPosition.RIGHT_CENTER, // 'right-center' ,
// 		// ...otherOptions
// 	},
// 	containerStyle: {
// 		width: "400px",
// 		height: "400px",
// 	},
// 	center: center,
// };

// const onLoad = useCallback((map: google.maps.Map) => {
// 	const service = new google.maps.places.PlacesService(map);
// 	const request: google.maps.places.TextSearchRequest = {
// 		location: center,
// 		radius: 50,
// 		query: "boba",
// 	};

// 	service.textSearch(request, (results, status) => {
// 		if (status === google.maps.places.PlacesServiceStatus.OK) {
// 			console.log(results);
// 		}
// 	});
// }, []);

function AppMap() {
	console.log("Map re-rendered");

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

	// if (isLoaded) {
	// 	console.log("Script loaded");
	// }

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<div>Loading</div>
	);
}

export default React.memo(AppMap);
