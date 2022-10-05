import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addPlacesResults, selectLocationIDs, setFetchStatus } from "../locationSlice";
import { StoreLocation } from "../../../app/stateTypes";
import { EntityId, nanoid } from "@reduxjs/toolkit";
import MapStyle from "../../../assets/styles/MapStyle.json";
import BobaMarker from "../../../assets/imgs/BobaMarker.png";
import AppMapMarker from "./AppMapMarker";

const mapOptions: google.maps.MapOptions = {
	styles: MapStyle,
	clickableIcons: false,
	disableDefaultUI: true,
};

const containerStyle = {
	width: "60rem",
	height: "60rem",
};

interface MapProps {
	lat: number;
	lng: number;
}

function AppMap({ lat, lng }: MapProps) {
	console.log("Map re-rendered");

	const dispatch = useAppDispatch();
	const fetchStatus = useAppSelector((state) => state.location.fetchStatus);
	const fetchedIDs = useAppSelector((state) => selectLocationIDs(state));

	const center = useMemo(() => {
		return { lat: lat, lng: lng };
	}, [lat, lng]);

	const bobaIcon: google.maps.Icon = useMemo(
		() => ({
			url: BobaMarker,
			scaledSize: new window.google.maps.Size(30, 30),
			labelOrigin: new window.google.maps.Point(15, 50),
		}),
		[]
	);

	const onLoad = useCallback(
		(map: google.maps.Map) => {
			if (!fetchStatus) {
				console.log("Fetched data");

				const service = new google.maps.places.PlacesService(map);
				const request: google.maps.places.TextSearchRequest = {
					location: center,
					radius: 50,
					query: "boba",
				};

				service.textSearch(request, (results, status) => {
					if (results && status === google.maps.places.PlacesServiceStatus.OK) {
						// console.log(results);
						// setResults(results);
						const places: StoreLocation[] = [];
						results.forEach((res) => {
							const numLat = Number(res.geometry?.location?.lat());
							const numLng = Number(res.geometry?.location?.lng());

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
						dispatch(setFetchStatus(true));
					}
				});
			}
		},
		[dispatch, fetchStatus, center]
	);

	return (
		<GoogleMap mapContainerStyle={containerStyle} options={mapOptions} center={center} zoom={12} onLoad={onLoad}>
			{fetchedIDs.length > 0 && fetchedIDs.map((id) => <AppMapMarker key={id} id={id} icon={bobaIcon} />)}
		</GoogleMap>
	);
}

export default AppMap;
