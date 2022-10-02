import React from "react";
import "./App.css";
import JournalList from "./features/journal/JournalList/JournalList";
import JournalForm from "./features/journal/JournalForm/JournalForm";

function App() {
	return (
		<div className="App">
			<JournalList />
			<JournalForm />
		</div>
	);
}

export default App;
