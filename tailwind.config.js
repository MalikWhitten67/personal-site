/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/**/*.html',
    './pages/**/*.js',
    './pages/**/*.jsx',
    './pages/**/*.ts',
  ],
  theme: {
    extend: {
      screens:{
        'sm': {
          'max': '640px'
        
        }
      }
    },
  },
  daisyui: {
    themes: ["light", "black", "cupcake"],
  },
  plugins: [require('daisyui')],
}

