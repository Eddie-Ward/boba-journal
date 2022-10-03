import React from "react";
import "./App.css";
import JournalList from "./features/journal/JournalList/JournalList";
import JournalForm from "./features/journal/JournalForm/JournalForm";
import TierList from "./features/tierlist/TierList/TierList";

function App() {
	return (
		<div className="App">
			<JournalList />
			<JournalForm />
			<TierList />
		</div>
	);
}

export default App;
