/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["emerald"],
        }
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"),require('daisyui')],
}

