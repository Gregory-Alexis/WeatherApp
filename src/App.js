import CityForm from "./components/CityForm"
import Weather from "./components/Weather"
import { WeatherContextProvider } from "./components/context/WeatherContext"
import DailyForecast from "./components/DailyForecast/DailyForecast"

function App() {
	return (
		<WeatherContextProvider>
			<div className="min-h-screen bg-gray-800">
				<CityForm />
				<Weather />
				<h2 className="pt-3 text-white pl-5 sm:text-lg md:text-2xl">
					Nos prévision météo ces prochaines heures.
				</h2>
				<DailyForecast />
			</div>
		</WeatherContextProvider>
	)
}

export default App
