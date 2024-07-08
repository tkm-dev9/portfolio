/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ["Noto Sans JP", "sans-serif"],
      },
      textShadow: {
        heading: "0 0 5px rgba(66, 153, 225, 1)",
      },
      keyframes: {
        FlowIcon: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotateIcon: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "flow-icon": "FlowIcon 10s linear infinite alternate",
        "reverse-flow-icon": "FlowIcon 10s linear infinite alternate-reverse",
        "rotate-icon": "rotateIcon 2s linear infinite",
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
