import React, { useCallback } from "react";
import { GoogleMap, useLoadScript, useJsApiLoader } from "@react-google-maps/api";

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

	// const [map, setMap] = React.useState<google.maps.Map | null>(null);

	const onLoad = React.useCallback(function callback(map: google.maps.Map) {
		const service = new google.maps.places.PlacesService(map);
		const request: google.maps.places.TextSearchRequest = {
			location: center,
			radius: 50,
			query: "boba",
		};

		service.textSearch(request, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				console.log(results);
			}
		});
	}, []);

	// if (isLoaded) {
	// 	console.log("Script loaded");
	// }

	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	);
}

export default React.memo(AppMap);
