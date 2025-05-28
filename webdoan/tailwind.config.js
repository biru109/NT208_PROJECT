/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        baloo: ['"Baloo Tamma 2"', 'cursive'],
      },
    },
  },
  plugins: [],
};
