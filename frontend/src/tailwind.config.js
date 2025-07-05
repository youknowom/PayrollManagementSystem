// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
