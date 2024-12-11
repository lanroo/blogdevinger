/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 4px 6px -1px rgba(142, 68, 173, 0.4), 0 2px 4px -2px rgba(142, 68, 173, 0.2)',
      },
      colors: {
        background: '#1a1a2e', 
        foreground: '#f1f1f1', 
        primary: {
          DEFAULT: '#8e44ad', 
          dark: '#5e3370', 
          light: '#b47cd8',
        },
        muted: {
          DEFAULT: '#a3a3a3', 
        },
      },
      spacing: {
        '2': '0.5rem', 
        '4': '1rem', 
        '6': '1.5rem',
        '8': '2rem', 
      },
      borderRadius: {
        lg: '1rem', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
    require('tailwindcss-animate'), 
  ],
};
