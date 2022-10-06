import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Theme from "./assets/styles/theme";

import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<ThemeProvider theme={Theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</BrowserRouter>
);
