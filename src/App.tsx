import React from "react";
import JournalList from "./features/journal/JournalList/JournalList";
import JournalForm from "./features/journal/JournalForm/JournalForm";
import TierList from "./features/tierlist/TierList/TierList";
import { useLoadScript } from "@react-google-maps/api";
import AppMap from "./features/map/AppMap/AppMap";
import AppMapTest from "./features/map/AppMap/AppMapTest";

function App() {
	console.log("App re-rendered");

	return (
		<div className="App">
			<AppMap />
			<JournalList />
			<JournalForm />
			<TierList />
		</div>
	);
}

export default App;
