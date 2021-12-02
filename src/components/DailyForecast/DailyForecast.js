import React, { useEffect, useState } from "react"
import axios from "axios"
import { useWeather } from "../context/WeatherContext"
import Droplet from "../../Images/droplet.svg"
import timeConverter from "./timeConverter"

const DailyForecast = () => {
	const [data, setData] = useState({})
	const { city, time } = useWeather()

	useEffect(() => {
		const fetchForecastData = async () => {
			try {
				const result = await axios.get(
					`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=fr&cnt=8&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
				)
				setData(result.data.list)
			} catch (error) {
				alert(error.message)
			}
		}
		fetchForecastData()
	}, [city])
	// console.log(time.getDate())
	return (
		<div className="p-2 sm:grid sm:grid-cols-2 xl:grid-cols-4">
			{Object.entries(data)
				.slice(0, 8)
				.map((el) => (
					<ul
						className=" p-4 flex text-white rounded-xl justify-between m-2"
						key={el[0]}
						style={{ background: "rgba(63, 87, 110, 0.5)" }}
					>
						<div>
							<span className="pl-3 text-sm sm:text-base md:text-xl">
								{/* timeConverter est une fonction qui me permet d'avoir la date du jour, initialement en timestamp, 
                 sous la forme << Le "jour" "Mois" "Année" à "heure" >> (voir fichier timeConverter.js et console.log(timeConverter(el[1].dt))).

                 je transforme l'index "3" de timeConverter(el[1].dt) (qui est le chiffre ou nombre du jour) en un Nombre puis le compare à time.getDate()
                 qui est aussi le chiffre ou nombre du jour. Si ils sont identique, on obtiendra alors "Aujourd'hui" à la place de la date du jour dans la section des prévisions
                 météo.
                */}
								{Number(timeConverter(el[1].dt)[3]) === time.getDate()
									? "Aujourd'hui à " + timeConverter(el[1].dt).slice(15)
									: timeConverter(el[1].dt)}
								{/*console.log(timeConverter(el[1].dt))*/}
							</span>
							<div className="flex pt-5 ">
								<li>
									<img
										src={`http://openweathermap.org/img/wn/${el[1].weather[0].icon}.png`}
										alt="weather icon"
									/>
								</li>

								<div className="flex flex-col md:text-xl">
									<li>{Math.ceil(el[1].main.temp_max)}&deg;</li>
									<li>{Math.floor(el[1].main.temp_min)}&deg;</li>
								</div>
							</div>
						</div>
						<div className="pt-10 md:text-xl">
							<li className="text-secondary">{el[1].weather[0].description}</li>
							<li className="text-secondary pt-2 flex justify-end">
								<img src={Droplet} alt="humidité" className="pr-1" />
								{el[1].main.humidity}%
							</li>
						</div>
					</ul>
				))}
		</div>
	)
}

export default DailyForecast
