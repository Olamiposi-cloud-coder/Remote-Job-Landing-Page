/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screen: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        navColor: 'rgba(27, 28, 30, 1)',
        navHover: 'rgba(90, 90, 90, 1)',
        white: '#FFFFFF',
        dark: 'rgba(27, 28, 30, 1)',
        footerWhite: 'rgba(255, 255, 255, 1)',
        bgColor: '#3e8e41',
        text: '#5A5A5A',
        btnHover: '#3e8e41'
      },
      backgroundImage: {
        'hero-image': "url('/images/JOB1.png')"
      }
    },
  },
  plugins: [],
}

