import Droplet from "../../Images/droplet.svg"
import timeConverter from "./timeConverter"
import { useDaily } from "../context/DailyContext"

const DailyForecast = () => {
	const { time, data } = useDaily()

	return (
		<div className="p-2 sm:grid sm:grid-cols-2 xl:grid-cols-4">
			{Object.entries(data).map((el) => (
				<div
					className=" p-4 flex text-white rounded-xl justify-between m-2 bg-primary"
					key={el[0]}
				>
					<div>
						<span className="pl-3 text-sm sm:text-base md:text-xl">
							{/* timeConverter est une fonction qui me permet d'avoir la date du jour, initialement en timestamp, 
                 sous la forme << Le "jour" "Mois" "Année" à "heure" >> ("voir fichier timeConverter.js et console.log(timeConverter(el[1].dt))").

                 je transforme l'index "3" de timeConverter(el[1].dt) (qui est le chiffre ou nombre du jour) en un nombre puis le compare à time.getDate() << time = new Date() >>
                 qui est aussi le chiffre ou nombre du jour ("voir console.log(time.getDate())). Si ils sont identique, 
								 on obtiendra alors "Aujourd'hui" à la place de la date du jour dans la section des prévisions météo.
								 Le slice me permet de récupérer juste l'heure au lieu de toute la string "Date + Heure".
                */}
							{Number(timeConverter(el[1].dt)[3]) === time.getDate()
								? "Aujourd'hui à " + timeConverter(el[1].dt).slice(15)
								: timeConverter(el[1].dt)}
							{/*console.log(timeConverter(el[1].dt))*/}
							{/* console.log(time.getDate()) */}
						</span>
						<ul className="flex pt-5 ">
							<li>
								<img
									src={`https://openweathermap.org/img/wn/${el[1].weather[0].icon}@2x.png`}
									alt="weather icon"
									width="100"
									height="100"
								/>
							</li>

							<li className="flex flex-col md:text-xl">
								<span className="text-4xl pt-6">
									{Math.floor(el[1].main.temp)}&deg;
								</span>
							</li>
						</ul>
					</div>
					<ul className=" md:text-xl pt-16 ">
						<li>{el[1].weather[0].description}</li>
						<li className="pt-2 flex justify-end">
							<img
								src={Droplet}
								alt="humidité"
								className="pr-1"
								width="13"
								height="13"
							/>
							{el[1].main.humidity}%
						</li>
					</ul>
				</div>
			))}
		</div>
	)
}

export default DailyForecast
