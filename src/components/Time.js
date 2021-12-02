import { useEffect } from "react"
import { useWeather } from "./context/WeatherContext"

const Time = () => {
	const { time, setTime } = useWeather()
	useEffect(() => {
		setInterval(() => setTime(new Date()), 60000)
	}, [setTime])

	return (
		<div>
			<div className="text-white text-sm sm:text-lg md:text-2xl">
				{time.toLocaleString("fr-FR", {
					hour: "numeric",
					minute: "numeric",
					hour12: false,
					day: "2-digit",
					month: "2-digit",
					year: "2-digit",
				})}
			</div>
		</div>
	)
}

export default Time
