import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d635b',
        darkGreen: '#092922',
        orange: '#EB774D',
        teal: '#2C645B',
      },
      backgroundColor: () => ({
        primary: '#2d635b',
      }),
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #73AB95, #092922, #EB774D, #2C645B)',
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
