/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
        pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      colors: {
        brand: "#29b6f6",
        grey: "#eceff1",
        darkGrey: "#cfd8dc",
        darkerGrey: "#b0bec5",
        darkestGrey: "#263238"
      }
    },
  },
  plugins: [],
}