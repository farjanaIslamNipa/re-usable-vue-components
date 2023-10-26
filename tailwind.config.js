/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        webiizard: '#0b193e',
        webiizardGold: '#dbb407',
        webiizardCyan: '#01c2cf',
      }
    },
  },
  plugins: [],
}