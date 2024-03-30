/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { Rubik: ["Rubik", "sans-serif"] },
      colors: {
        white: "#ffffff",
        VeryDarkGray: "hsl(0, 0%, 17%)",
        DarkGray: "hsl(0, 0%, 59%)",
        blue: "#0000ff",
      },
    },
  },
  plugins: [],
};