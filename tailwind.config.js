/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.jsx',
    './src/components/Header.jsx',
    './src/components/SearchBar.jsx',
    './src/components/NavBar.jsx',
    './src/components/MenuList.jsx',
    './src/components/DropdownMenu.jsx',
    './src/components/BackgroundAnimated.jsx',
    './src/components/Products.jsx',
    './src/components/Hero.jsx'
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    extend: {
      colors:{
      'black-deep': '#121212',        // fondo principal
      'white-warm': '#F9F9F9',        // fondo productos, textos
      'gold-metallic': '#D4AF37',     // botones
      'burgundy-dark': '#800020',     // encabezados, bordes
      'gray-intermediate': '#4E4E4E', // texto secundario
      'blue-deep': '#0B3D91',         // enlaces elementos de accion
    },
    boxShadow: {
      'card': '4px 4px 6px #6e5e5e', // Sombra inferior derecha personalizada
    },
    },
  },
  plugins: [],
}

