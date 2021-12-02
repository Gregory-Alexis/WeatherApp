const switchBackground = (id, background) => {
	switch (id) {
		case "01d":
			background = "bg-sunny"
			break
		case "01n":
			background = "bg-clearnight"
			break
		case "02d":
		case "02n":
			background = "bg-cloudy"
			break
		case "03d":
		case "03n":
		case "04d":
		case "04n":
			background = "bg-brokenclouds"
			break
		case "09d":
		case "09n":
			background = "bg-showerain"
			break
		case "10d":
		case "10n":
			background = "bg-rain"
			break
		case "11d":
		case "11n":
			background = "bg-thunder"
			break
		case "13d":
		case "13n":
			background = "bg-snow"
			break
		default:
	}
}

export default switchBackground
