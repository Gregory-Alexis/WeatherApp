import { useEffect } from "react"
import { useDaily } from './context/DailyContext'

const Time = () => {
	const { time, setTime, zone } = useDaily()

	const newTime = time.getTime() + zone * 1000 - 3600000

	useEffect(() => {
		setInterval(() => setTime(new Date()), 60000)
	}, [setTime])

	return (
		<div className="text-white text-sm sm:text-lg md:text-2xl">
			{new Date(newTime).toLocaleString("fr-FR", {
				hour: "numeric",
				minute: "numeric",
				hour12: false,
				day: "2-digit",
				month: "2-digit",
				year: "2-digit",
			})}
		</div>
	)
}

export default Time
