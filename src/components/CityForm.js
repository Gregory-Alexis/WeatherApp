import React from "react"
import { useDaily } from "./context/DailyContext"

const CityForm = () => {
	const { setCity } = useDaily()
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
			<input
				className="bg-gray-600 rounded-full w-72 outline-none pl-5"
				id="city"
				type="text"
				placeholder="Rechercher un emplacement"
				required
			/>
		</form>
	)
}

export default CityForm
