import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import SearchLocation from "./SearchLocation";

const places = ["places" as const];

const SearchLocationWrapper = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_MAPS_KEY!,
		libraries: places,
	});

	return isLoaded ? <SearchLocation /> : <div>Loading</div>;
};

export default SearchLocationWrapper;
