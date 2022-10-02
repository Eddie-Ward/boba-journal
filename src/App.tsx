import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import JournalList from "./features/journal/JournalList/JournalList";

function App() {
	return (
		<div className="App">
			<JournalList />
		</div>
	);
}

export default App;
