/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			transitionProperty: {
				all: "all",
			},
			transitionDuration: {
				300: "300ms",
			},
			transitionTimingFunction: {
				"ease-in": "ease-in",
			},
			fontSize: {
				big: "3.5rem",
				h1: "2.5rem",
				h2: "1.5rem",
				h3: "1.25rem",
				normal: "1rem",
				small: "0.875rem",
				smaller: "0.75rem",
				tiny: "0.625rem",
			},
			fontWeight: {
				small: "400",
				normal: "500",
				medium: "600",
				semiBold: "700",
			},
			colors: {
				blue: "rgba(13, 136, 216, 1)",
				blackColor: "black",
				whileColor: "white",
				frameColor: "rgba(238, 197, 199, 1)",
				mainColor: "rgba(202, 92, 59, 1)",
				gray: "rgba(80, 80, 80, 1)",
				lightGray: "rgba(140, 140, 140, 1)",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".displayFlexColumn": {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				},
				".displayFlexRow": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
				".transitionMainNet": {
					transitionProperty: "all",
					transitionDuration: "300ms",
					transitionTimingFunction: "ease-in",
				},
			});
		},
	],
};
