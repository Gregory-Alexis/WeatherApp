const timeConverter = (UNIX_timestamp) => {
	const actualDay = new Date(UNIX_timestamp * 1000)

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]
	const year = actualDay.getFullYear()
	const month = months[actualDay.getMonth()]
	const date = actualDay.getDate()
	const hour = actualDay.getHours()

	const time = `le ${date} ${month} ${year} à ${hour}h`

	return time
}

export default timeConverter
