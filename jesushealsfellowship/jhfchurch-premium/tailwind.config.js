module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example primary color
        secondary: '#9333EA', // Example secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
}