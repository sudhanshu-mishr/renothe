/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './lib/**/*.{js,jsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
          soft: '#F5F3FF'
        }
      },
      boxShadow: {
        soft: '0 20px 70px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(124,58,237,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(56,189,248,0.12), transparent 25%)'
      }
    }
  },
  plugins: []
};

module.exports = config;
