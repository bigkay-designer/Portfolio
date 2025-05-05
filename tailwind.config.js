/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        accent: '#22D3EE',
        primary: '#1E293B',
        secondary: '#F1F5F9',
        neutral1: '#334155',
        neutral2: '#64748B',
        success: '#10B981',
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        subtitle: ['Montserrat', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        subheading: ['Roboto', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        quotes: ['Lato', 'sans-serif'],
        captions: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
