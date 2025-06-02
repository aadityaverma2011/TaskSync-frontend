// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}'
//   ],
//   darkMode: 'class', // or 'media'
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
export default {
  darkMode: 'class',
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend: {
  borderRadius: {
    '2xl': '1rem',
  },
  boxShadow: {
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
},

  },
  plugins: [],
};