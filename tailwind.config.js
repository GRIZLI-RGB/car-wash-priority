/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				"green--main": "#26AD60",
				"green--secondary": "#44CB7E",
				"purple--main": "#95A4FC",
				"purple--secondary": "#C6C7F8",
				"red--secondary": "#FF4747",
				"black-100": "#1c1c1c",
			},
		},
		screens: {
			lg: {
				max: "1168px",
			},
			md: {
				max: "768px",
			},
		},
	},
	plugins: [],
};
