import React from "react"
import { useWeather } from "../components/context/WeatherContext"

const CityForm = () => {
	const { setCity } = useWeather()
	const cityHandler = (event) => {
		event.preventDefault()
		setCity(event.target.city.value)
		event.target.reset()
	}
	// formulaire de recherche d'emplacement
	return (
		<form
			onSubmit={cityHandler}
			className="bg-gray-800 p-2 flex justify-center"
		>
			<div>
				<input
					className="bg-gray-600 rounded-full w-72 outline-none pl-5"
					id="city"
					type="text"
					placeholder="Rechercher un emplacement"
					required
				/>
			</div>
		</form>
	)
}

export default CityForm
