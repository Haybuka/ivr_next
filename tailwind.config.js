/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titilium: ['Titillium Web', 'sans-serif'],
        odor: ['Odor Mean Chey', 'serif'],
      },
    },
  },
  plugins: [

  ]
}