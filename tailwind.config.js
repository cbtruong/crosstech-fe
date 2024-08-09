/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-in': 'ease-in',
      },
      colors: {
        blackColor:'black',
        whileColor:'white',
        frameColor:'rgba(238, 197, 199, 1)',
        mainColor:'rgba(202, 92, 59, 1)',
        customGray: 'rgba(50, 50, 50, 1)',
        customLightGray: 'rgba(140, 140, 140, 1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transitionMainNet': {
          transitionProperty: 'all',
          transitionDuration: '300ms',
          transitionTimingFunction: 'ease-in',
        },
      });
    },
  ],
}

