module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				cloudy:
					"url('https://res.cloudinary.com/dew6sgune/image/upload/v1638390844/Cloudy_fczukh.png')",
				sunny:
					"url('http://res.cloudinary.com/dew6sgune/image/upload/v1638391022/Sunny_zl29d0.png')",
				rain: "url('https://res.cloudinary.com/dew6sgune/image/upload/v1638391061/Rain_1_xhbkvq.png')",
				showerain:
					"url('https://res.cloudinary.com/dew6sgune/image/upload/v1638391091/Rain_2_rrgfr6.png')",
				brokenclouds:
					"url('https://res.cloudinary.com/dew6sgune/image/upload/v1638391142/Cloudy1_cfdqem.png')",
				snow: "https://res.cloudinary.com/dew6sgune/image/upload/v1638391178/Snow_eiqfnm.png')",
				clearnight:
					"url('https://res.cloudinary.com/dew6sgune/image/upload/v1638391201/Clear_Night_aebfrt.png')",
				thunder:
					"url('https://res.cloudinary.com/dew6sgune/image/upload/v1638391231/orage_zhka8j.jpg')",
				haze: "url('https://res.cloudinary.com/dew6sgune/image/upload/v1638629574/Hazy_Night_gwhkil.png')",
			},
			colors: {
				primary: "#3F576E",
				secondary: "#BDBDBD",
			},
			backgroundColors: {
				primary: "#3F576E",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
