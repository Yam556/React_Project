/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-blue-500',
    'border-red-500',
    'border-green-500',
    'border-yellow-500'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

