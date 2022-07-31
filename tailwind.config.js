/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '100%',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        'color-grey-40': '#f7f8f9',
        'color-white-100': '#fff',
        'color-primary': '#ff5500',
      },
      boxShadow: {
        'custom-1':
          '0 1px 1px rgba(130,140,150,0.1), 0 -1px 0px rgba(120, 130, 140, 0.05)',
        'custom-2':
          '0 1px 2px rgb(0 0 0 / 5%), 0 -1px 0px rgb(120 130 140 / 10%)',
      },
      width: {
        51: '12.5rem',
      },
    },
  },
  plugins: [],
};
