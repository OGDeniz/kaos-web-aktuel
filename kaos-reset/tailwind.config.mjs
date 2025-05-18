/** @type {import('tailwindcss').Config} */
module.exports = {
    // Alle Verzeichnisse, in denen Tailwind-Klassen vorkommen können
    content: [
        './src/**/*.{js,ts,jsx,tsx}',         // Alles unter /src
        './src/components/**/*.{js,ts,jsx,tsx}', // UI-Komponenten
        './src/layouts/**/*.{js,ts,jsx,tsx}',    // Layout-Komponenten
        './src/pages/**/*.{js,ts,jsx,tsx}',      // Falls Pages-Router genutzt wird
    ],
    theme: {
        extend: {
            colors:
            {
                primary: '#8b0000',   // Tiefrot
                secondary: '#ba3c3c', // Dunkelrot
                dark: '#750000',      // Sehr dunkles Rot
                softred: '#8b5050',   // Weiches Rot
                neutral: '#374151',   // Grauton
                metal: '#777777',     // Metallgrau
                light: '#ffffff',     // Weiß
                beige: '#f5e9dc',     // Beigeton
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                mono: ['Poppins', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],

    prefix: 'tw-', // Prefix für alle Tailwind-Klassen
};
