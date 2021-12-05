import { useDaily } from "./context/DailyContext"

const Description = () => {
	const {
		description,
		feelslike,
		maxTemp,
		minTemp,
		humidity,
		pressure,
		wind,
		visibility,
		time,
	} = useDaily()

	return (
		<div>
			<div className="text-white flex flex-col items-center">
				<span className="pb-3 text-4xl capitalize sm:text-5xl md:text-6xl">
					{description}
				</span>
				<span className="text-xl sm:text-2xl md:text-3xl">
					RESSENTIE {Math.round(feelslike)}&deg;C
				</span>
			</div>
			<p className="text-lg text-white pt-10 sm:text-xl md:text-3xl">
				{time.getHours() >= "0" && time.getHours() <= "20"
					? `Aujourd'hui, la température maximal sera de ${Math.ceil(maxTemp)}`
					: `Ce soir, la température minimal sera de ${Math.floor(minTemp)}`}
				&deg;C
			</p>
			<div className="flex justify-between xl:justify-evenly text-gray-400 pt-6 text-sm sm:text-base md:text-xl">
				<p>
					VENT
					<span className="flex text-white">
						{/* convertion de la vitesse du vent de m/s km/h */}
						{Math.round(wind * 3.6)} km/h
					</span>
				</p>
				<p>
					HUMIDITÉ<span className="flex text-white">{humidity}%</span>
				</p>
				<p>
					VISIBILITÉ
					<span className="flex text-white">
						{Math.round(visibility / 1000)} km
					</span>
				</p>
				<p>
					PRESSION<span className="flex text-white"> {pressure} hPa</span>
				</p>
			</div>
		</div>
	)
}

export default Description
