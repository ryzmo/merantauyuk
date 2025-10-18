/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#d946ef", // ungu muda
          500: "#a21caf", // ungu utama
          600: "#7c1fbf",
          700: "#4b156e",
          800: "#2a0f45",
          900: "#1a0a2d",
          950: "#0c0717",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(217,70,239,0.25)",
      },
    },
  },
  plugins: [],
};
