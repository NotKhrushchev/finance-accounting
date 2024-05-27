/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'green-theme': '#2DD4BF',
                'violet-theme': '#4C1D95',
                'blue-theme': '#1D4ED8',
                'red-theme': '#E12626',
                'gray-theme': 'rgb(75 85 99)'
            },
            fontFamily: {
                sans: ['Montserrat'],
            },
            backgroundImage: {
                'landing-linear-gradient':
                    'linear-gradient(0deg, rgba(20,61,77,1) 3%, rgba(20,21,38,1) 35%)',
            },
            screens: {
                'sm-': '390px',
            },
        },
    },
    plugins: [],
};
