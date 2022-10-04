import React, { useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import Autocomplete, { AutocompleteChangeReason, AutocompleteCloseReason } from "@mui/material/Autocomplete";
import Textfield from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const SearchLocation = () => {
	const {
		ready,
		value,
		suggestions: { status, loading, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({ debounce: 300 });

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSelect = (event: React.SyntheticEvent<Element, Event>, reason: AutocompleteCloseReason) => {
		if (reason === "selectOption") {
			const target = event.target as HTMLLIElement;
			console.log(target);
			setValue(target.innerText, false);
			clearSuggestions();
			getGeocode({ address: target.innerText })
				.then((results) => getLatLng(results[0]))
				.then(({ lat, lng }) => {
					console.log("📍 Coordinates: ", { lat, lng });
				})
				.catch((error) => {
					console.log("😱 Error: ", error);
				});
		}
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter to "false"

		// Get latitude and longitude via utility functions
	};

	if (true) {
		return (
			<ClickAwayListener onClickAway={() => clearSuggestions()}>
				<Autocomplete
					id="search-combo-box"
					getOptionLabel={(option) => (typeof option === "string" ? option : option.description)}
					autoComplete
					includeInputInList
					filterSelectedOptions
					disabled={!ready}
					loading={loading}
					value={data.find((x) => x.description === value)}
					filterOptions={(x) => x}
					options={data}
					onClose={handleSelect}
					renderInput={(params) => (
						<Textfield onChange={handleInput} {...params} variant="filled" label="Location" />
					)}
					// renderOption={(props, option, state) => (
					// 	<p onClick={() => handleSelect(option)}>{option.description}</p>
					// )}
				/>
			</ClickAwayListener>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default SearchLocation;
