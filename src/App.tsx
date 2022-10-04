import React from "react";
import JournalList from "./features/journal/JournalList/JournalList";
import JournalForm from "./features/journal/JournalForm/JournalForm";
import TierList from "./features/tierlist/TierList/TierList";
import MapPage from "./pages/Map/MapPage";

function App() {
	console.log("App re-rendered");

	return (
		<div className="App">
			<MapPage />
			<JournalList />
			<JournalForm />
			<TierList />
		</div>
	);
}

export default App;
