/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ["Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
