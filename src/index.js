import React from "react";
import ReactDOM from "react-dom/client";
import Demo from "./page/demo.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Demo />
	</React.StrictMode>
);
reportWebVitals();
