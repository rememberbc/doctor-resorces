/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color':'FFFFFF',
        'text-bg-color':'F7A582',
        'bg-banner':'07332F'

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

