import React from "react"
import { useDaily } from "./context/DailyContext"

const PrevisionsButton = () => {
	const { setPrevisions, previsions } = useDaily()

	const PrevisionsHandler = () => {
		setPrevisions(previsions + 8)
	}

	return (
		<button
			type="button"
			className="text-white py-2 px-4 rounded-xl ml-4 mb-2 bg-primary hover:bg-black transition duration-300"
			onClick={PrevisionsHandler}
		>
			Afficher les prochaines 24h
		</button>
	)
}

export default PrevisionsButton
