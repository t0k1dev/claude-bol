/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#faf9f5',
          100: '#f5f4ed',
          200: '#e8e6dc',
          300: '#d1cfc5',
          400: '#b0aea5',
          500: '#87867f',
          600: '#5e5d59',
          700: '#3d3d3a',
          800: '#262624',
          900: '#1a1918',
          950: '#141413',
        },
        accent: {
          DEFAULT: '#c46849',
          hover:   '#a85538',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Anthropic Sans"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        sm:  '0.5rem',
        DEFAULT: '0.75rem',
        lg:  '1rem',
        xl:  '1.5rem',
      },
    },
  },
  plugins: [],
}
