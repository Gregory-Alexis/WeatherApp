import House from "../Images/house-door.svg"
import { useDaily } from "./context/DailyContext"

const Location = () => {
	const { location } = useDaily()
	return (
		<div className="text-white text-lg ml-auto sm:text-xl md:text-3xl">
			<div className="flex">
				<img src={House} alt="logo maison" className="mr-2" />
				<h1>{location}</h1>
			</div>
		</div>
	)
}

export default Location
