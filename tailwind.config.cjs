/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pry: {
          100: '#22252D',
          500: '#2A2D35',
          900: '#E2E2E2',
        },
        grey: '#F7F7F7',
        sec: '#26E8C6',
        darkRed: '#ED7777',
      },
      boxShadow: {
        dark: '0 5px 15px rgba(0, 0, 0, 0.2)',
        light: ' 0 5px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
