/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.php", "./assets/js/*.js"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                brand: {
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                },
                dark: {
                    900: '#050505',
                    800: '#0f0f0f',
                    700: '#1a1a1a',
                    600: '#262626',
                }
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                }
            }
        }
    },
    plugins: [],
}
