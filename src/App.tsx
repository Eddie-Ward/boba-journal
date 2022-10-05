import React from "react";
import JournalList from "./features/journal/JournalList/JournalList";
import JournalForm from "./features/journal/JournalForm/JournalForm";
import TierList from "./features/tierlist/TierList/TierList";
import MapPage from "./pages/Map/MapPage";
import NavbarWrapper from "./pages/Navbar/NavbarWrapper";

function App() {
	console.log("App re-rendered");

	return (
		<div className="App">
			<NavbarWrapper />
			<div style={{ height: "5rem" }}></div>
			{/* <MapPage /> */}
			<JournalList />
			<JournalForm />
			<TierList />
		</div>
	);
}

export default App;
