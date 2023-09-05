/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"green--main": "#26AD60",
				"green--secondary": "#44CB7E",
				"purple--main": "#95A4FC",
				"purple--secondary": "#C6C7F8",
				"black-100": "#1c1c1c",
			},
		},
	},
	plugins: [],
};
