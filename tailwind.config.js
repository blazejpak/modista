/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        "gold-dark": "#D87D4A",
        "gold-lighter": "#FBAF85",
        "black-normal": "#222222",
        "black-lighter": "#191919",
        "grey-normal": "#FAF9F8",
        "grey-lighter": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
