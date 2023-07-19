/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    theme: {
        colors: {
            'dark-primary': '#131a1c',
            'dark-secondary': '#1b2224',
            'red': '#e74c4c',
            'green': '#6bb05f',
            'blue': '#0183ff',
            'grey': '#dddfe2',
            'white': '#ffffff',
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require("daisyui")],
}
