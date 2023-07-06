/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
    colors: {
      primary: {
        50: '#f5f9fe',
        100: '#e7f0fe',
        200: '#cfe0fc',
        300: '#a8c8fa',
        400: '#5190f5',
        500: '#0d5dde',
        600: '#09439f',
        700: '#073074',
        800: '#041c43',
        900: '#020e22',
        950: '#010813',
      },
      secondary: {
        50: '#f5ffff',
        100: '#e6fefe',
        200: '#cefdfd',
        300: '#a6fcfb',
        400: '#4df9f7',
        500: '#07e4e0',
        600: '#05a3a1',
        700: '#047775',
        800: '#024544',
        900: '#012322',
        950: '#011413',
      },
      dark: {
        50: '#f9f9fa',
        100: '#f1f1f4',
        200: '#e3e3e8',
        300: '#cdccd6',
        400: '#9c99ad',
        500: '#6c6882',
        600: '#4d4b5d',
        700: '#383644',
        800: '#212028',
        900: '#101014',
        950: '#09090b',
      },
    },
  },
  plugins: [],
};
