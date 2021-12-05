import CityForm from "./components/CityForm"
import Weather from "./components/Weather"
import { useWeather } from "./components/context/WeatherContext"
import DailyForecast from "./components/DailyForecast/DailyForecast"
import DaysButton from "./components/DaysButton"

function App() {
	const { days } = useWeather()
	return (
		<div className="min-h-screen bg-gray-800">
			<CityForm />
			<Weather />
			<h2 className="pt-3 text-white pl-5 sm:text-lg md:text-2xl">
				Nos prévision météo ces prochaines heures.
			</h2>
			<DailyForecast />
			{days < 40 && <DaysButton />}
		</div>
	)
}

export default App
