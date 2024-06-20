/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'green-theme': '#2DD4BF',
                'violet-theme': '#4C1D95',
                'blue-theme': '#2986ff',
                'red-theme': '#E12626',
            },
            fontFamily: {
                sans: ['Montserrat'],
            },
            backgroundImage: {
                'landing-linear-gradient':
                    'linear-gradient(0deg, rgba(20,61,77,1) 3%, rgba(20,21,38,1) 35%)',
            },
            screens: {
                'tablet': '768px',
                // => @media (min-width: 768px) { ... }
                'desktop': '1024px',
                // => @media (min-width: 1024px) { ... }
                'desktop-s': '1180px',
                // => @media (min-width: 1140px) { ... }
                'desktop-l': '1440px',
                // => @media (min-width: 1440px) { ... }
                'desktop-xl': '1920px',
                // => @media (min-width: 1920px) { ... }
            },
        },
    },
    plugins: [],
};
