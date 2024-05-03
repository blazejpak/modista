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
        "black-normal": "#222222",
        "black-lighter": "#191919",
        "grey-normal": "#FAF9F8",
        "grey-lighter": "#FAFAFA",
        "green-correct": "#408f13",
      },
    },
  },
  plugins: [],
};
