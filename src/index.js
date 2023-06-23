import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter basename="/test">
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
