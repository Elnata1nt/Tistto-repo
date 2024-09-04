/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'newAmsterdam': ['New Amsterdam', 'serif'],
      },
      colors: {
        primary: '#f42c4c',
        primarydark: '#c2253c',
        secondary: '#2b045b',
        accent: '#f3dbbb',
        complementary: '#745c8c',
      },
    },
  },
  plugins: [],
};
