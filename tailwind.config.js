/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    fontFamily: {
      'primary': ['Open Sans', "sans-serif"],
      'secondary':['Asul', 'serif'],
      'tertiary':['Comic Neue', 'sans-serif'],
     
    extend: {
      
      colors: {
        primary: "",
        secondary: "",
        tertiary: "",
        white: "#F5F5F5",
        grey: "#7D8184",
        dark: "#1A1A1A",
    },

    },
  },
  plugins: [],
}

}