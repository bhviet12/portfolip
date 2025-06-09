/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6c63ff",
        dark: "#1a1a2e",
        light: "#f5f5f7",
      }
    },
  },
  plugins: [],
}
