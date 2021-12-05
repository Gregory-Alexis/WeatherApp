import React from "react"
import { useWeather } from "./context/WeatherContext"

const PrevisionsButton = () => {
	const { setPrevisions, previsions } = useWeather()

	const PrevisionsHandler = () => {
		setPrevisions(previsions + 8)
	}

	return (
		<button
			type="button"
			className="text-white bg-gray-600 py-2 px-4 rounded-xl mx-3 my-1"
			onClick={PrevisionsHandler}
		>
			Afficher les prochaines 24h
		</button>
	)
}

export default PrevisionsButton
