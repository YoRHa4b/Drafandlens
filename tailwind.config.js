/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F2747',
          accent: '#E67A1F',
          cream: '#F7F3EE',
          surface: '#E8DED1',
          dark: '#091423',
          text: '#1A1A1A',
          muted: '#5B6B7A',
          border: '#D9D9D9',
          white: '#FCFAF7',
          soon: '#B8A999',
          photogrammetry: '#3D5A73',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 39, 71, 0.12)',
        glow: '0 18px 45px rgba(230, 122, 31, 0.22)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #091423 0%, #0F2747 52%, #1A1A1A 100%)',
        'accent-gradient': 'linear-gradient(135deg, #E67A1F 0%, #FF9B45 100%)',
        'tech-grid':
          'linear-gradient(rgba(15,39,71,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,39,71,.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
