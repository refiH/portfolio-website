/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Staatliches"', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif']
      },
      screens: {
        xl: '1440px'
      }
    },
    fontSize: {
      h1: ['90px', '120%'],
      h2: ['67px', '120%'],
      h3: ['51px', '120%'],
      h4: ['38px', '120%'],
      h5: ['28px', '120%'],
      h6: ['21px', '120%'],
      p: ['16px', '120%'],
      small: ['14px', '120%']
    },
    colors: {
      primary: '#263c72',
      secondary: '#1e47ab',
      dark: '#191717',
      light: '#FFEFE8'
    }
  },
  plugins: [require('@designbycode/tailwindcss-text-stroke')]
}
