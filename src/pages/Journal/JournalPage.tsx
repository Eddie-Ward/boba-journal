import React from "react";
import JournalForm from "../../features/journal/JournalForm/JournalForm";
import JournalList from "../../features/journal/JournalList/JournalList";

const JournalPage = () => {
	return (
		<>
			<JournalList />
			<JournalForm />
		</>
	);
};

export default JournalPage;
