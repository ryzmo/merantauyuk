/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#0c0717",
          900: "#1a0a2d",
          800: "#2a0f45",
          700: "#4b156e",
          600: "#7c1fbf",
          500: "#a21caf",
          400: "#d946ef"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(217,70,239,0.25)"
      }
    }
  },
  plugins: []
};
