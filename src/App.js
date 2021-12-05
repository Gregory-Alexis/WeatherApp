import CityForm from "./components/CityForm"
import DailyForecast from "./components/DailyForecast/DailyForecast"
import DaysButton from "./components/DaysButton"
import WeatherApp from "./components/WeatherApp"
import { useWeather } from "./components/context/WeatherContext"

function App() {
	const { previsions } = useWeather()
	return (
		<div className="min-h-screen bg-gray-800">
			<CityForm />
			<WeatherApp />
			<h2 className="pt-3 text-white pl-5 sm:text-lg md:text-2xl">
				Nos prévision ces prochaines heures.
			</h2>
			<DailyForecast />
			{previsions < 40 && <DaysButton />}
		</div>
	)
}

export default App
