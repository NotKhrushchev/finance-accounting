/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
