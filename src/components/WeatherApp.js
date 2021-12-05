import Icon from "./Icon"
import Location from "./Location"
import Time from "./Time"
import Description from "./Description"
import { useWeather } from "./context/WeatherContext"

const WeatherApp = () => {
	const { iconID } = useWeather()

	let background = ""

	switch (iconID) {
		case "01d":
			background = "bg-sunny"
			break
		case "01n":
			background = "bg-clearnight"
			break
		case "02d":
		case "02n":
			background = "bg-cloudy"
			break
		case "03d":
		case "03n":
		case "04d":
		case "04n":
			background = "bg-brokenclouds"
			break
		case "09d":
		case "09n":
			background = "bg-showerain"
			break
		case "10d":
		case "10n":
			background = "bg-rain"
			break
		case "11d":
		case "11n":
			background = "bg-thunder"
			break
		case "13d":
		case "13n":
			background = "bg-snow"
			break
		case "50d":
		case "50n":
			background = "bg-haze"
			break
		default: // ne fais rien
	}

	return (
		<div className={`bg-cover bg-center p-5 ${background}`}>
			<div className="flex">
				<div>
					<h1 className="uppercase text-white font-semibold sm:text-lg md:text-2xl">
						météo actuel
					</h1>
					<Time />
				</div>
				<Location />
			</div>
			<Icon />
			<Description />
		</div>
	)
}

export default WeatherApp
