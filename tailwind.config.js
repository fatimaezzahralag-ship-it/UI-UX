/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                display: ['Fraunces', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                brand: {
                    50: '#eef5fc',
                    100: '#dbe9f7',
                    200: '#bdd5ef',
                    300: '#90b9e3',
                    400: '#5f95d2',
                    500: '#2f74bc',
                    600: '#1e5f9f',
                    700: '#164a7d',
                    800: '#123a61',
                    900: '#0f2c45',
                },
                ink: {
                    50: '#f8fafc',
                    100: '#eef2f7',
                    200: '#d8e0ea',
                    300: '#bcc9d8',
                    400: '#95a6ba',
                    500: '#74879d',
                    600: '#5c6f86',
                    700: '#4a5a6f',
                    800: '#374457',
                    900: '#253245',
                    950: '#121c2d',
                }
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'hard': '0 12px 32px rgba(17, 28, 45, 0.16)',
                'hard-sm': '0 6px 18px rgba(17, 28, 45, 0.12)',
                'hard-brand': '0 14px 28px rgba(15, 76, 129, 0.28)',
            }
        },
    },
    plugins: [],
};