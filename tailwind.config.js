/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            maxWidth: '',
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
