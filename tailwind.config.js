/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            li: {
              '&::marker': {
                color: '#374151'
              }
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}