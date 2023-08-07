/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#0a131c",
        'secondary': "#0f1a2b",
        'tertiary': '#1a2d4a',
        'quaternary': '#2c4d6d',
      }
    },
  },
  plugins: [],
}
