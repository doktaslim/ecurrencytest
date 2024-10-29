/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#12305A",
        brand_ash: "#ABABAB",
        brand_light_ash: "#21384299",
        brand_ash_secondary: "#4D533C",
        brand_light: "#8FE2FE",
        brand_red: "#FB5959",
        brand_yellow: "#FFD7231A",
        brand_yellow_thick: "#4D533C",
        brand_green: "#27AE60",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
