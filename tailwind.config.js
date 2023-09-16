/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily:{
          burtons: 'burtons',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        backgroundColor: {
          'primary-dark': '#1d1d20',
  'primary-light': '#f1f1f3',
  'secondary-dark': '#2a2a2d',
  'secondary-light': '#e0e0e2',
         
          // ... more colors for the dark theme
        },
        textColor: {
          'primary-dark': '#f1f1f3',
          'primary-light': '#1d1d20',
          'secondary-dark': '#e0e0e2',
          'secondary-light': '#2a2a2d',
        
          // New Colors
          'h1-dark': '#f9f9fa',
          'h2-dark': '#e8e8e9',
          'h3-dark': '#d7d7d8',
          'p-dark': '#c6c6c7',
          
          'h1-light': '#0c0c0d',
          'h2-light': '#1d1d1f',
          'h3-light': '#2e2e30',
          'p-light': '#3f3f41'
        },
      },
    },
    plugins: [],
    darkMode:"class"
  }
  