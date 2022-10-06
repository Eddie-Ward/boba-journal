import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { FixedSizeList } from "react-window";
import LocationResult from "./LocationResult";
import { useAppSelector } from "../../../app/hooks";
import { selectLocationIDs } from "../locationSlice";
import AutoSizer from "react-virtualized-auto-sizer";

const LocationResultsList = () => {
	const placeIDs = useAppSelector((state) => selectLocationIDs(state));
	const listRef = useRef<FixedSizeList<any>>(null);
	const selected = useAppSelector((state) => state.location.selected);

	useEffect(() => {
		listRef.current?.scrollToItem(selected, "center");
	}, [selected]);

	return (
		<Box sx={{ width: "100%", height: { xs: "30vh", sm: "100%" }, bgcolor: "background.paper" }}>
			<AutoSizer>
				{({ height, width }) => (
					<FixedSizeList
						ref={listRef}
						height={height}
						width={width}
						itemSize={150}
						itemCount={placeIDs.length}
						overscanCount={5}>
						{LocationResult}
					</FixedSizeList>
				)}
			</AutoSizer>
		</Box>
	);
};

export default LocationResultsList;
