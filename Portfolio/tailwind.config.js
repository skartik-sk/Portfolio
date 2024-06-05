/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-background': 'linear-gradient(90deg, #b16cea 14.06%, #ff5e69 44.79%, #ff8a56 71.88%, #ffa84b)',
        
      })
,
      colors:{
        'Black-primary': '#161513',
        'Black-secondary':'#1C1C22',
        'White-primary':'#F0F2F5',
        'White-secondary':'#ffffff',
        'gradient-background': 'linear-gradient(90deg, #b16cea 14.06%, #ff5e69 44.79%, #ff8a56 71.88%, #ffa84b)',
     
      },
     
    },
  },
  plugins: [],
}

