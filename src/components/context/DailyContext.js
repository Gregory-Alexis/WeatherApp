import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

export const DailyContext = createContext()

export const DailyContextProvider = ({ children }) => {
	const [description, setDiscription] = useState("")
	const [iconID, setIconID] = useState("")
	const [location, setLocation] = useState("")
	const [zone, setZone] = useState("")
	const [city, setCity] = useState("Paris")
	const [previsions, setPrevisions] = useState(8)
	const [time, setTime] = useState(new Date())
	const [data, setData] = useState({})
	const [conditions, setConditions] = useState({})
	const {
		feelslike,
		mainTemp,
		humidity,
		maxTemp,
		minTemp,
		pressure,
		wind,
		visibility,
	} = conditions

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=fr&cnt=${previsions}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
				)
				setData(result.data.list)

				for (let i = 0; i < 1; i++) {
					setConditions({
						mainTemp: Math.round(result.data.list[i].main.temp),
						feelslike: Math.round(result.data.list[i].main.feels_like),
						humidity: Math.round(result.data.list[i].main.humidity),
						pressure: Math.round(result.data.list[i].main.pressure),
						wind: Math.round(result.data.list[i].wind.speed),
						visibility: Math.round(result.data.list[i].visibility),
						maxTemp: Math.round(result.data.list[i].main.temp_max),
						minTemp: Math.round(result.data.list[i].main.temp_min),
					})
					setDiscription(result.data.list[i].weather[0].description)
					setIconID(result.data.list[i].weather[0].icon)
					setLocation(`${result.data.city.name}, ${result.data.city.country}`)
					setZone(result.data.city.timezone)
				}
			} catch (error) {
				alert(error.message)
			}
		}
		fetchData()
	}, [city, previsions])

	return (
		<DailyContext.Provider
			value={{
				feelslike,
				mainTemp,
				humidity,
				maxTemp,
				minTemp,
				pressure,
				wind,
				visibility,
				description,
				iconID,
				location,
				time,
				setTime,
				zone,
				previsions,
				setPrevisions,
				setCity,
				data,
			}}
		>
			{children}
		</DailyContext.Provider>
	)
}

export const useDaily = () => {
	const context = useContext(DailyContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use WeatherContext outside of its provider"
		)
	}
	return context
}
