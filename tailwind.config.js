/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('public/cub.webp')"
      }
    },
  },
  plugins: [],
}