/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/images/backgroundImage.jpg')",
        'bg-img2': "url('/images/backgroundImage2.jpg')",
        'bg-img3': "url('/images/backgroundImage3.jpg')",
        'bg-img4': "url('/images/backgroundImage4.jpg')",
        'bg-img5': "url('/images/backgroundImage5.jpg')",
        'bg-img6': "url('/images/backgroundImage6.jpg')",
        'bg-img7': "url('/images/backgroundImage7.jpg')",
        'bg-img8': "url('/images/backgroundImage8.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
