/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: ["cupcake", "dark", "cmyk",
  "lemonade"],

  plugins: [require("daisyui")],
}
