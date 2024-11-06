/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{ts,tsx,js}"],
  theme: {
    extend: {
      borderRadius: {
        "7xl": "45px",
      },
      fontFamily: {
        "sans-pro": "Source-Sans-Pro",
      },
      maxHeight: {
        "screen-1/4": "25vh",
      },
      backgroundImage: {
        cute: `url("../static/images/backgrounds/hatchingTurtles.svg")`,
      },
    },
  },
  plugins: ["postcss"],
};
