/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
      'primary': ['Open Sans', "sans-serif"],
      'secondary': ['Luxurious Script', "cursive"],
   
    extend: {},
  },
  plugins: [],
}

}