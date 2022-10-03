import React from "react";
import JournalList from "./features/journal/JournalList/JournalList";
import JournalForm from "./features/journal/JournalForm/JournalForm";
import TierList from "./features/tierlist/TierList/TierList";
import { useJsApiLoader } from "@react-google-maps/api";
import AppMap from "./features/location/AppMap/AppMap";

const places = ["places" as const];

function App() {
	console.log("App re-rendered");

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "process.env.REACT_APP_MAPS_KEY!",
		libraries: places,
	});

	return (
		<div className="App">
			{isLoaded ? <AppMap /> : <div>Loading</div>}
			<JournalList />
			<JournalForm />
			<TierList />
		</div>
	);
}

export default App;
