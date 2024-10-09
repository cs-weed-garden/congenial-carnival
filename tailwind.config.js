// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js,jsx,ts,tsx,vue}',
        './components/**/*.{html,js,jsx,tx,tsx,vue}',
        './node_modules/flowbite/**/*.js',
        './node_modules/daisyui/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#A7F0BA',  // lighter vibrant green
                    100: '#74DB89', // bright, fresh green
                    200: '#38C659', // lively green, great for buttons
                    300: '#2EA750', // in-between shade for hover states
                    400: '#248A3C',  // stronger middle green, good for active states
                    DEFAULT: '#1a6c4d',  // main brand green (new default)
                    500: '#165A24',  // darker shade for balance
                    600: '#12481D',  // deep green, subtle shadows or dark text
                    700: '#0E3616',  // even darker for backgrounds or borders
                    800: '#0A240F',  // near-black, perfect for dark sections or UI elements
                },
                secondary: {
                    50: '#F1F5F7',    // lightest
                    100: '#E1E8EB',
                    200: '#CFD8DC',
                    DEFAULT: '#B0BEC5', // default
                    500: '#B0BEC5',
                    600: '#90A4AE',
                    700: '#78909C',
                    800: '#607D8B',    // darkest
                },
                tertiary: {
                    50: '#FFE3C1',  // Softer light tone
                    100: '#FFC48A',
                    200: '#FAA56E',
                    400: '#F6762C',
                    DEFAULT: '#F4600C',
                    500: '#DB550B',
                    600: '#C24B0A',
                    700: '#A94109',
                    800: '#8F3708',
                },
                dark: {
                    50: '#4B4B4B',  // Slightly lighter gray
                    100: '#3A3A3A',
                    200: '#292929',
                    400: '#181818',
                    DEFAULT: '#111111',
                    500: '#111111',
                    600: '#0D0D0D',
                    700: '#090909',
                    800: '#050505',
                    900: '#111111'
                },
                light: {
                    50: '#FFFFFF',    // lightest
                    100: '#FFFFFA',
                    200: '#FFFFF5',
                    DEFAULT: '#FFFFF0', // default
                    500: '#FFFFF0',
                    600: '#F2F2E6',
                    700: '#E6E6D9',
                    800: '#D9D9CC',    // darkest
                },
            },
        },
    },
    plugins: [
        require('daisyui'),
        require('flowbite/plugin')
    ],
    daisyui: {
        themes: [],
    },
};
