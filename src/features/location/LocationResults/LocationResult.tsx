import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import SvgIcon from "@mui/material/SvgIcon";
import { ListChildComponentProps } from "react-window";
import { useAppSelector } from "../../../app/hooks";
import { ReactComponent as HeartFilled } from "../../../assets/imgs/HeartIconFilled.svg";
import { ReactComponent as HeartEmpty } from "../../../assets/imgs/HeartIconOutline.svg";
import { ReactComponent as MoneyFilled } from "../../../assets/imgs/MoneyIconFilled.svg";
import { ReactComponent as MoneyEmpty } from "../../../assets/imgs/MoneyIconOutline.svg";

const LocationResult = (props: ListChildComponentProps) => {
	const { index, style } = props;
	const place = useAppSelector((state) => state.location.entities[state.location.ids[index]]);
	const selected = useAppSelector((state) => state.location.selected);

	return (
		<ListItem style={style} key={index} component="div" disablePadding>
			<ListItemButton
				divider={true}
				selected={index === selected}
				sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
				<ListItemText primary={`${place?.locationName}`} secondary={`${place?.address}`} />
				<Rating
					readOnly
					size="small"
					value={place?.rating || 2.5}
					precision={0.5}
					icon={<SvgIcon component={HeartFilled} inheritViewBox />}
					emptyIcon={<SvgIcon component={HeartEmpty} inheritViewBox />}
				/>
				<Rating
					readOnly
					size="small"
					value={place?.priceLevel || 2}
					precision={0.5}
					icon={<SvgIcon component={MoneyFilled} inheritViewBox />}
					emptyIcon={<SvgIcon component={MoneyEmpty} inheritViewBox />}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default LocationResult;
