/** @type {import('tailwindcss').Config} */module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradientMove 15s ease infinite",
        blob: "blobMove 20s infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blobMove: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -50px)" },
          "66%": { transform: "translate(-20px, 20px)" },
        },
      },
    },
  },
};