/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-caveat)'],
        sans: ['var(--font-sono)'],
      },
      colors: {
        red: {
          300: 'hsl(12deg 56% 81%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
