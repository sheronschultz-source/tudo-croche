import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f7f4ff",
          100: "#eee9ff",
          200: "#d9ccff",
          300: "#c0a8ff",
          400: "#a67fff",
          500: "#8d57ff",
          600: "#7340e6",
          700: "#5a31b3",
          800: "#3f247d",
          900: "#2a1b4d"
        }
      }
    }
  },
  plugins: []
};

export default config;
