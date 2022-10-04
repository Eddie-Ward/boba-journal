import React, { useCallback, useMemo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useAppDispatch } from "../../../app/hooks";
import { addPlacesResults } from "../locationSlice";
import { StoreLocation } from "../../../app/stateTypes";
import { EntityId, nanoid } from "@reduxjs/toolkit";

// const center = {
// 	lat: 37.29,
// 	lng: -122.01,
// };

const containerStyle = {
	width: "400px",
	height: "400px",
};

interface MapProps {
	lat: number;
	lng: number;
}

function AppMap({ lat, lng }: MapProps) {
	console.log("Map re-rendered");

	const [results, setResults] = useState<google.maps.places.PlaceResult[]>([]);
	const dispatch = useAppDispatch();

	const center = useMemo(() => {
		return { lat: lat, lng: lng };
	}, [lat, lng]);

	const onLoad = useCallback(
		(map: google.maps.Map) => {
			console.log("Map loaded");

			const service = new google.maps.places.PlacesService(map);
			const request: google.maps.places.TextSearchRequest = {
				location: center,
				radius: 50,
				query: "boba",
			};

			service.textSearch(request, (results, status) => {
				if (results && status === google.maps.places.PlacesServiceStatus.OK) {
					console.log(results);
					setResults(results);
					const places: StoreLocation[] = [];
					results.forEach((res) => {
						const numLat = Number(res.geometry?.location?.lat());
						const numLng = Number(res.geometry?.location?.lat());

						const storeLocation: StoreLocation = {
							PLACE_ID: res.place_id || (nanoid() as EntityId),
							lat: numLat,
							lng: numLng,
							locationName: res.name || "",
							address: res.formatted_address || "",
							priceLevel: res.price_level || 2,
							rating: res.rating || 3,
							totalRatings: res.user_ratings_total || 0,
							journalEntryIDs: [],
						};
						places.push(storeLocation);
					});
					dispatch(addPlacesResults(places));
				}
			});
		},
		[dispatch, center]
	);

	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} onLoad={onLoad}>
			{results.length > 0 &&
				results.map(
					(res) => res.geometry?.location && <Marker key={res.place_id} position={res.geometry.location} />
				)}
		</GoogleMap>
	);
}

export default React.memo(AppMap);
