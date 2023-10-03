/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./wp-templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#2A373C',
            secondary: '#EEB54F',
            accent: '#219db0',
            white: '#ffffff',
            black: '#000000',
        },
        fontSize: {
            base: '1.375rem',
        },
        gridtemplatecolumns: {
            p: '1fr min(65ch, 100%) 1fr',
        },
    },
},
plugins: [
  plugin(function ({ addBase, theme }) {
      addBase({
          h1: {
              fontSize: theme('fontSize.2xl'),
              paddingBottom: theme('padding.8'),
          },
          h2: {
              fontSize: theme('fontSize.6xl'),
              paddingBottom: theme('padding.8'),
          },
          h3: {
              fontSize: theme('fontSize.lg'),
              paddingBottom: theme('padding.4'),
          },
          h4: {
              fontSize: theme('fontSize.xs'),
              paddingBottom: theme('padding.4'),
          },
          p: {
              fontSize: theme('fontSize.base'),
          }
      })
  }),
],
}