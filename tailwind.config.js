/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        "gold-dark": "#D87D4A",
        "gold-lighter": "#FBAF85",
        "black-lighter": "#191919",
        "grey-normal": "#F1F1F1",
        "grey-lighter": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
