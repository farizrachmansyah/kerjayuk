/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f72d18'
        },
        secondary: {
          DEFAULT: '#c10f65'
        },
        gray: {
          DEFAULT: '#9f9f9f'
        },
        success: {
          DEFAULT: '#32ae84'
        },
        idle: {
          DEFAULT: '#377eff'
        },
        error: {
          DEFAULT: '#f72d18'
        }
      },
      backgroundImage: (theme) => ({
        gradient: `linear-gradient(to right, ${theme('colors.primary.DEFAULT')}, ${theme('colors.secondary.DEFAULT')})`
      }),
      boxShadow: {
        'top-md': '0 -4px 6px -3px rgba(0,0,0,0.2), 0 -2px 4px -3px rgba(0,0,0,0.1)',
        'center-md': '0 0 6px -1px rgba(0,0,0,0.2), 0 0 4px -1px rgba(0,0,0,0.1)',
        'center-lg': '0 0 15px -3px rgba(0,0,0,0.2), 0 0 6px -2px rgba(0,0,0,0.1)',
        'bottom-md': '0 4px 6px -3px rgba(0,0,0,0.2), 0 2px 4px -3px rgba(0,0,0,0.1)'
      },
      transitionDuration: {
        DEFAULT: '300ms'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
