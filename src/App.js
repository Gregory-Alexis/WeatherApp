import CityForm from "./components/CityForm"
import { useDaily } from "./components/context/DailyContext"
import DailyForecast from "./components/DailyForecast/DailyForecast"
import DaysButton from "./components/DaysButton"
import WeatherApp from "./components/WeatherApp"

function App() {
	const { previsions } = useDaily()
	return (
		<div className="min-h-screen bg-gray-800">
			<CityForm />
			<WeatherApp />
			<h2 className="pt-3 text-white pl-5 sm:text-lg md:text-2xl">
				Nos prévision ces prochaines heures.
			</h2>
			<DailyForecast />
			{previsions < 36 && <DaysButton />}
		</div>
	)
}

export default App
