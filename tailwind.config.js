/** @type {import('tailwindcss').Config} */

module.exports = {

    // Alle Dateien, die Tailwind-Klassen verwenden, werden hier angegeben
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',        // Next.js App-Router
        './src/components/**/*.{js,ts,jsx,tsx}', // Wiederverwendbare UI-Komponenten
        './src/layouts/**/*.{js,ts,jsx,tsx}',    // Layout-Komponenten
        './src/pages/**/*.{js,ts,jsx,tsx}',      // Next.js Pages-Router
        './src/styles/**/*.{js,ts,jsx,tsx}',     // Globale CSS-Dateien
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A', // Blau
                secondary: '#FBBF24', // Gelb
                accent: '#4ADE80', // Grün
                neutral: '#374151', // Grau
                base: '#FFFFFF', // Weiß
            },
        },
    },
    fonts: {
        sans: ['Montserrat', 'sans-serif'], // Sans-Serif Schriftart
        serif: ['Merriweather', 'serif'], // Serif Schriftart
        mono: ['Poppins', 'monospace'], // Monospace Schriftart

    },

    // Hier können Tailwind-Plugins hinzugefügt werden
    plugins: [
        require('@tailwindcss/forms'), // Formulare
        require('@tailwindcss/typography'), // Typografie
        require('@tailwindcss/aspect-ratio'), // Seitenverhältnis
        require('@tailwindcss/line-clamp'), // Zeilenumbruch

    ],
};

