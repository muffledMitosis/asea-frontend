/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "t-white": "#FFFFFF",
        "t-light-gray": "#F7F7F7",
        "t-dark-gray": "#969191",
        "t-blue": "#001EB9",
        "t-black": "#162427",
      }
    },
  },
  plugins: [],
}
