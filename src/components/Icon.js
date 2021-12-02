import React from "react"
import { useWeather } from "../components/context/WeatherContext"

const Icon = () => {
	const { description, mainTemp, iconID } = useWeather()
	return (
		<div className="flex justify-center">
			<img
				src={`http://openweathermap.org/img/wn/${iconID}@4x.png`}
				alt={description}
			/>
			<span className="text-7xl text-white flex items-center md:text-8xl">
				{Math.round(mainTemp)}&deg;C
			</span>
		</div>
	)
}

export default Icon
