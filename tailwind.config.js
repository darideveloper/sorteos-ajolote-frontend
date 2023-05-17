/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#e982b599",
        "pink-light": "#f9c9de",
        "green": "#0a272d",
        "yellow": "#D9BD6A",
        "yellow-light": "#F2E6D0"
      }
    },
  },
  plugins: [],
}

