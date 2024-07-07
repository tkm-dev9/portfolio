/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "100dvh": "100dvh",
      },
      fontFamily: {
        notosansjp: ["Noto Sans JP", "sans-serif"],
      },
      textShadow: {
        heading: "0 0 5px rgba(66, 153, 225, 1)",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow-heading": {
          textShadow: "0 0 5px rgba(66, 153, 225, 1)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
