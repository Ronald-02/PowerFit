/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
      extend: {
        colors: {
          primary: '#ef4444', // Replace with your desired primary color
        },
        fontFamily: {
          logo: ['Lato', 'sans-serif'],
          body: ['Pacifico', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  