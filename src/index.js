import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import { DailyContextProvider } from "./components/context/DailyContext"

ReactDOM.render(
	<React.StrictMode>
		<DailyContextProvider>
			<App />
		</DailyContextProvider>
	</React.StrictMode>,

	document.getElementById("root")
)
