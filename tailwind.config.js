/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          'green': '#25D366',
          'link': '#008069',
          'bg': '#fdf5ef',
          'text': '#41525d',
          'heading': '#1f1f1f',
          'footer': '#8696a0'
        }
      }
    },
  },
  plugins: [],
}; 