/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/images/backgroundImage.jpg')",
        'bg-img2': "url('/images/backgroundImage2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
