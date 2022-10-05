import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import Navbar from "./Navbar";

const places = ["places" as const];

const NavbarWrapper = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_MAPS_KEY!,
		libraries: places,
	});

	return isLoaded ? <Navbar /> : <div>Loading</div>;
};

export default NavbarWrapper;
