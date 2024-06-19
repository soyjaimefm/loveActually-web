/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        softGreen: '#E8EBE0',
        primaryGreen: '#7B7C4E',
        darkGreen: '#41461B',
        backGreen: '#7A7C4D',
        beige: '#FCFCFC',
        lavender: '#783D82',

        /** Love actually */
        laBackground: '#F3D5BE',
        laBeige: '#F8EDE4',
        laRed: '#E9523A',
        laGreen: '#83712A',
        laSoftGreen: '#B9B57C',
        laSoftBlue: '#D5EBF8',
        laOrange: '#EF9560'
      },
      grayscale: {
        50: '50%'
      },

      fontFamily: {
        theSeasons: 'TheSeasons',
        alNevrada: 'AlNevrada',
        roxboroughCf: 'RoxboroughCF'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
