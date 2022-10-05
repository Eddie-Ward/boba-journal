import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import SearchLocation from "../../features/location/SearchLocation/SearchLocation";
import { ReactComponent as PandaIcon } from "../../assets/imgs/PandaIcon.svg";

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<Box sx={{ marginLeft: "2rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
						<IconButton size="large" edge="start" color="inherit" aria-label="Go to home page">
							<SvgIcon component={PandaIcon} inheritViewBox />
						</IconButton>
						<Typography variant="h6" noWrap component="div">
							Boba Journal
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 0.5, marginInline: "auto" }}>
						<SearchLocation />
					</Box>
					<Box sx={{ display: "flex" }}>
						<IconButton size="large" aria-label="Go to Map" color="inherit">
							<Typography variant="h6" noWrap component="div">
								Map
							</Typography>
						</IconButton>
						<IconButton size="large" aria-label="Go to Journal" color="inherit">
							<Typography variant="h6" noWrap component="div">
								Journal
							</Typography>
						</IconButton>
						<IconButton size="large" aria-label="Go to tierlist" color="inherit">
							<Typography variant="h6" noWrap component="div">
								Tierlist
							</Typography>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
