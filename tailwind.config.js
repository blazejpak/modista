/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        "gold-dark": "#D87D4A",
        "gold-lighter": "#FBAF85",
        "black-lighter": "#101010",
        "grey-normal": "#F1F1F1",
        "grey-lighter": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
