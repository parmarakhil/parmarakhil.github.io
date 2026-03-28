/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './projects/we-are-one/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 60px rgba(99, 102, 241, 0.22)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(99, 102, 241, 0.18), transparent 48%)'
      }
    }
  },
  plugins: []
};
