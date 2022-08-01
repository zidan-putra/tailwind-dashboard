/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//untuk menjalankan tailwind css yang otomatis di build
// npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch
// -i (direktori file input) -o (direktori file output <file yg sudah di compile>)