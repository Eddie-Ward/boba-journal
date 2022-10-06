import React from "react";
import { useAppSelector } from "../../app/hooks";
import AppMap from "../../features/location/AppMap/AppMap";
import LocationResultsList from "../../features/location/LocationResults/LocationResultsList";
import Grid2 from "@mui/material/Unstable_Grid2";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const MapPage = () => {
	const locationStatus = useAppSelector((state) => state.location.locationStatus);
	const lat = useAppSelector((state) => state.location.lat);
	const lng = useAppSelector((state) => state.location.lng);

	return (
		<>
			<Typography variant="h1" sx={{ marginX: "2rem", marginBottom: "2rem" }}>
				{locationStatus ? "Boba stores near you" : "Enter a location to search!"}
			</Typography>
			<Grid2
				container
				marginX={2}
				rowSpacing={2}
				columnSpacing={4}
				columns={{ xs: 1, sm: 3 }}
				height={{ xs: "90vh", sm: "80vh" }}>
				<Grid2 xs={1} sm={2}>
					{locationStatus ? (
						<AppMap lat={lat} lng={lng} />
					) : (
						<Skeleton variant="rounded" height={"100%"} animation={false} />
					)}
				</Grid2>
				<Grid2 xs={1} sm={1}>
					{locationStatus ? (
						<LocationResultsList />
					) : (
						<Skeleton variant="rounded" height={"100%"} animation={false} />
					)}
				</Grid2>
			</Grid2>
		</>
	);
};

export default MapPage;
