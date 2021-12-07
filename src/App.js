import React from "react"
import { useDaily } from "./components/context/DailyContext"
const CityForm = React.lazy(() => import("./components/CityForm"))
const DaysButton = React.lazy(() => import("./components/DaysButton"))
const WeatherApp = React.lazy(() => import("./components/WeatherApp"))
const DailyForecast = React.lazy(() =>
	import("./components/DailyForecast/DailyForecast")
)

function App() {
	const { previsions } = useDaily()
	return (
		<div className="min-h-screen bg-gray-800">
			<React.Suspense fallback={<p>Loading</p>}>
				<CityForm />
				<WeatherApp />
				<h2 className="pt-3 text-white pl-5 sm:text-lg md:text-2xl">
					Nos prévision ces prochaines heures.
				</h2>
				<DailyForecast />
				{previsions < 36 && <DaysButton />}
			</React.Suspense>
		</div>
	)
}

export default App
