/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lima: {
          50: "#f4fbea",
          100: "#e6f5d2",
          200: "#ceecaa",
          300: "#aede78",
          400: "#82c73a",
          500: "#71b230",
          600: "#558e22",
          700: "#426c1f",
          800: "#38571d",
          900: "#304a1d",
          950: "#17280b",
        },
      },
    },
  },
  plugins: [],
};
