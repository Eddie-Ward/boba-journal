import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
	typography: {
		h1: {
			fontSize: "3rem",
			fontWeight: 400,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 400,
		},
		h3: {
			fontSize: "1.25rem",
			fontWeight: 400,
		},
	},
});

export default theme;
