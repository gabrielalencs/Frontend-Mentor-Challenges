/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'rubik': ['Rubik', 'sans-serif']
            },
            colors: {
                'orange-icon': '#FFF1E9',
                'green-icon': '#E0FDEF',
                'blue-icon': '#EBF0FF',
                'purple-icon': '#F6E7FF',
                'blue-dark': '#3B4D66',
                'white-primary': '#F4F6FA',
            },
            spacing: {
                '1536': '1536px',
                '600': '600px',
                '700': '700px',
                '645': '645px',
                '[-50]': '-50%',
                '[-100]': '-100',
                '[.15]': '0.15rem',
                '[.35]': '0.38rem',
              
            },
        },
    },
    darkMode: 'class',
}