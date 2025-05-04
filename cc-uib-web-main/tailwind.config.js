/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        "grid-pattern": "url('/blue-grid.png')",
      },
      screens: {
        xs: "370px",
        xs2: "390px",
        xs3: "480px",
      },
      colors: {
        dark: "#111111",
        light: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
