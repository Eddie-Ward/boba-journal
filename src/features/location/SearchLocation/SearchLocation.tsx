import React from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import Autocomplete, { AutocompleteCloseReason } from "@mui/material/Autocomplete";
import Textfield from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setLat, setLng, setLocationStatus } from "../locationSlice";

const SearchLocation = () => {
	const {
		ready,
		value,
		suggestions: { status, loading, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({ debounce: 1000 });

	const dispatch = useAppDispatch();
	const loadStatus = useAppSelector((state) => state.location.locationStatus);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleSelect = (event: React.SyntheticEvent<Element, Event>, reason: AutocompleteCloseReason) => {
		if (reason === "selectOption") {
			const target = event.target as HTMLLIElement;
			setValue(target.innerText, false);
			getGeocode({ address: target.innerText })
				.then((results) => getLatLng(results[0]))
				.then(({ lat, lng }) => {
					dispatch(setLat(lat));
					dispatch(setLng(lng));
					dispatch(setLocationStatus(true));
				})
				.catch((error) => {
					console.log("Error: ", error);
				});
		}
		clearSuggestions();
	};

	if (ready) {
		return (
			<>
				<Autocomplete
					id="search-combo-box"
					getOptionLabel={(option) => (typeof option === "string" ? option : option.description)}
					autoComplete
					includeInputInList
					filterSelectedOptions
					disabled={loadStatus}
					loading={loading}
					value={data.find((x) => x.description === value)}
					filterOptions={(x) => x}
					options={data}
					onClose={handleSelect}
					renderInput={(params) => (
						<Textfield onChange={handleInput} {...params} variant="filled" label="Location" />
					)}
				/>
			</>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default SearchLocation;
