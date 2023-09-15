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
          'primary-dark': 'bg-stone-900',
      
          'primary-light': 'stone-100',
         
          // ... more colors for the dark theme
        },
        textColor: {
          'primary-dark': 'text-slate-100',
          'primary-light': 'text-stone-800',
          // ... more text colors for the dark theme
        },
      },
    },
    plugins: [],
    darkMode:"class"
  }
  