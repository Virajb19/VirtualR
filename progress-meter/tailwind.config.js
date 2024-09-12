/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         screens: {
        'mb': {'max': '640px'},
        'tb': {'min': '768px', 'max': '1279px'},
        'lp': {'min': '1280px', 'max': '1919px'},
        'dp': {'min': '1920px'},
      },
    },
  },
  plugins: [],
}
