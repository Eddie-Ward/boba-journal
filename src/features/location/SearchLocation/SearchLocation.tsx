import React, { useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import Autocomplete, { AutocompleteCloseReason } from "@mui/material/Autocomplete";
import Textfield from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AppMap from "../AppMap/AppMap";

const SearchLocation = () => {
	const {
		ready,
		value,
		suggestions: { status, loading, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({ debounce: 300 });

	const [renderMap, setRenderMap] = useState(false);
	const [center, setCenter] = useState({ lat: 0, lng: 0 });

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
					console.log("Coordinates: ", { lat, lng });
					setCenter({ lat: lat, lng: lng });
					setRenderMap(true);
				})
				.catch((error) => {
					console.log("Error: ", error);
				});
		}
	};

	if (ready) {
		return (
			<>
				<ClickAwayListener onClickAway={() => clearSuggestions()}>
					<Autocomplete
						id="search-combo-box"
						getOptionLabel={(option) => (typeof option === "string" ? option : option.description)}
						autoComplete
						includeInputInList
						filterSelectedOptions
						disabled={renderMap}
						loading={loading}
						value={data.find((x) => x.description === value)}
						filterOptions={(x) => x}
						options={data}
						onClose={handleSelect}
						renderInput={(params) => (
							<Textfield onChange={handleInput} {...params} variant="filled" label="Location" />
						)}
					/>
				</ClickAwayListener>
				{renderMap && <AppMap lat={center.lat} lng={center.lng} />}
			</>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default SearchLocation;
