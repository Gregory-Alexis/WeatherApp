import React from "react"
import { useWeather } from "./context/WeatherContext"

const PrevisionsButton = () => {
	const { setPrevisions, previsions } = useWeather()

	const PrevisionssHandler = () => {
		setPrevisions(previsions + 8)
	}

	return (
		<button
			type="button"
			className="text-white bg-black py-2 px-4 rounded-xl mx-3 my-1"
			onClick={PrevisionssHandler}
		>
			Afficher les prochaines 24h
		</button>
	)
}

export default PrevisionsButton
