/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2b8cee",
        "navy-custom": "#0f172a",
        "pastel-blue": "#e0f2fe",
        "gold-accent": "#d4af37",
        "background-light": "#f8fafc",
        "background-dark": "#020617",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
        "script": ["Great Vibes", "cursive"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
    },
  },
  plugins: [],
}
