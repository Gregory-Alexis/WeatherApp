import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

export const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [city, setCity] = useState("Paris")
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

	const [description, setDiscription] = useState("")
	const [iconID, setIconID] = useState("")
	const [location, setLocation] = useState("")
	const [time, setTime] = useState(new Date())
	const [zone, setZone] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}&lang=fr`
				)

				setConditions({
					mainTemp: Math.round(result.data.main.temp),
					feelslike: Math.round(result.data.main.feels_like),
					humidity: Math.round(result.data.main.humidity),
					pressure: Math.round(result.data.main.pressure),
					wind: Math.round(result.data.wind.speed),
					visibility: Math.round(result.data.visibility),
					maxTemp: Math.round(result.data.main.temp_max),
					minTemp: Math.round(result.data.main.temp_min),
				})

				setDiscription(result.data.weather[0].description)
				setIconID(result.data.weather[0].icon)
				setLocation(`${result.data.name}, ${result.data.sys.country}`)
				setZone(result.data.timezone)
				console.log(result.data.timezone)
			} catch (error) {
				alert(error.message)
			}
		}
		fetchData()
	}, [city])

	return (
		<WeatherContext.Provider
			value={{
				feelslike,
				mainTemp,
				humidity,
				maxTemp,
				minTemp,
				description,
				setCity,
				iconID,
				location,
				pressure,
				wind,
				visibility,
				city,
				time,
				setTime,
				zone,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export const useWeather = () => {
	const context = useContext(WeatherContext)
	if (context === undefined) {
		throw new Error(
			"It seems that you are trying to use WeatherContext outside of its provider"
		)
	}
	return context
}
