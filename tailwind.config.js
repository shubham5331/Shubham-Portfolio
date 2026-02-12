/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','Segoe UI','Roboto','Inter','sans-serif'],
      },
      boxShadow: {
        'glow': '0 8px 30px rgba(2,132,199,0.25)',
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(100,116,139,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,.18) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
