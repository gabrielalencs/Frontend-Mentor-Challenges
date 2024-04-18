/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'kumbh': ['Kumbh Sans', 'sans-serif'],
            },
            fontSize: {
                '.7': '.7rem'
            },
            colors: {
                'orange-primary': '#FF7D1A',
                'gray-primary': '#68707D',
                'overlay': 'rgba(0, 0, 0, .486)'
            },
            spacing: {
                '15': '15px',
                '[-5]': '-5px',
                '[-6]': '-6px',
                '320': '320px',
                '380': '380px',
                '1280': '1280px',
                '1050': '1050px',
                '1150': '1150px',
                '550': '550px',
                '[41]': '41%',
                '[130]': '130%',
                '[16.5]': '16.5rem',
                '[1.5]': '1.5rem',

            },
            screens: {
                'max-tablet': { 'max': '768px' },
                'min-tablet': { 'min': '768px' },
                'min-desktop': { 'min': '992px' },
            }
        },
    },
    plugins: [],
}

