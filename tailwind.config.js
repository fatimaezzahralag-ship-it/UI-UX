/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6e0',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        ink: {
          50:  '#f8f7f4',
          100: '#f0ede6',
          200: '#e2ddd3',
          300: '#cdc5b7',
          400: '#b0a492',
          500: '#948776',
          600: '#7a6e60',
          700: '#635a4f',
          800: '#504844',
          900: '#403b36',
          950: '#1c1917',
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #1c1917',
        'hard-sm': '2px 2px 0px 0px #1c1917',
        'hard-brand': '4px 4px 0px 0px #0d9488',
      }
    },
  },
  plugins: [],
};
