/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00ffcc",
        darkBg: "#0a0a0a",
        darkCard: "#121212",
      },
    },
  },
  plugins: [],
};
