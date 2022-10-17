import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from "./store";
import App from "./App";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<SnackbarProvider
				maxSnack={2}
				iconVariant={{
					success: "✅",
					error: "✖️",
					warning: "⚠️",
					info: "ℹ️",
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<App />
			</SnackbarProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
