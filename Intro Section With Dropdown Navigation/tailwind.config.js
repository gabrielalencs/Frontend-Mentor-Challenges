/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#696969',
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif']
      },
      spacing: {
        '600': '600px',
        '1280': '1280px'
      }
    }
  }
}

