/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mb: { max: "640px" },
        tb: { min: "768px", max: "1279px" },
        lp: { min: "1280px", max: "1919px" },
        dp: { min: "1920px" },
      },
      // fontSize: {
      //   'xs': 'clamp(0.75rem, 1vw, 1rem)',
      //   'sm': 'clamp(0.875rem, 1.2vw, 1.25rem)',
      //   'base': 'clamp(1rem, 1.5vw, 1.5rem)',
      //   'lg': 'clamp(1.125rem, 1.8vw, 1.75rem)',
      //   'xl': 'clamp(1.25rem, 2vw, 2rem)',
      //   '2xl': 'clamp(1.5rem, 2.5vw, 2.5rem)',
      //   '3xl': 'clamp(1.875rem, 3vw, 3rem)',
      //   '4xl': 'clamp(2.25rem, 3.5vw, 3.75rem)',
      //   '5xl': 'clamp(3rem, 4vw, 4.5rem)',
      //   '6xl': 'clamp(3.75rem, 5vw, 5.25rem)',
      //   '7xl': 'clamp(4.5rem, 6vw, 6rem)',
      //   '8xl': 'clamp(6rem, 7vw, 7.5rem)',
      //   '9xl': 'clamp(8rem, 8vw, 9rem)',
      // },
    },
  },
  plugins: [],
};
