/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppings: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#0066ff',
        primaryBlueHover: '#0047b3',
        primaryGreen: '#009900',
        primaryGreenHover: '#006600',
      },
    },
  },
  plugins: [],
};
