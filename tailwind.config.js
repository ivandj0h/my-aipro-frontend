/** @type {ColorPalettes | ColorPalettes} */
const ColorPalettes = require("./src/utils/colors/ColorPalettes").default;
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/enums/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': ColorPalettes.primaryDarkColor,
        'primary-light': ColorPalettes.primaryLightColor,
        'secondary-dark': ColorPalettes.secondaryDarkColor,
        'secondary-light': ColorPalettes.secondaryLightColor,
        'font-dark': ColorPalettes.fontDarkColor,
        'button-green': '#118F4C',
      }
    },
  },
  plugins: [],
}
