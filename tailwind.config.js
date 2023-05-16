/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#F24464",
        "pink-light": "#F288C2",
        "green": "#092326",
        "yellow": "#D9BD6A",
        "yellow-light": "#F2E6D0"
      }
    },
  },
  plugins: [],
}

