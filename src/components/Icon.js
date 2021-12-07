import { useDaily } from "./context/DailyContext"

const Icon = () => {
	const { iconID, description, mainTemp } = useDaily()
	return (
		<div className="flex justify-center">
			<img
				src={`https://openweathermap.org/img/wn/${iconID}@4x.png`}
				alt={description}
				width="200"
				height="200"
			/>
			<span className="text-7xl text-white flex items-center md:text-8xl">
				{Math.round(mainTemp)}&deg;C
			</span>
		</div>
	)
}

export default Icon
