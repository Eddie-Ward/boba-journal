import React from "react";
import MapPage from "./pages/Map/MapPage";
import { Routes, Route } from "react-router-dom";
import JournalPage from "./pages/Journal/JournalPage";
import TierlistPage from "./pages/Tierlist/TierlistPage";
import Navbar from "./pages/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div style={{ height: "5rem" }}></div>
			<Routes>
				<Route path="/" element={<MapPage />} />
				<Route path="/journal" element={<JournalPage />} />
				<Route path="/tierlist" element={<TierlistPage />} />
			</Routes>
		</>
	);
}

export default App;
