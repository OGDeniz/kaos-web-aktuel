/** Hier wird die Konfiguration für PostCSS festgelegt. */
// Diese Konfiguration wird von Next.js verwendet, um CSS zu verarbeiten.
// Sie können auch andere PostCSS-Plugins hinzufügen, wenn Sie möchten.
// Diese Konfiguration ist für die Verwendung mit Tailwind CSS optimiert.
// Sie können die Konfiguration anpassen, um andere PostCSS-Plugins hinzuzufügen,

module.exports = {
  // lädt TailwindCSS und liest meine Konfiguration von tailwind.config.js ein
  plugins: {
    '@tailwindcss/postcss': {},
    //tailwindcss: {},
    autoprefixer: {},
  },
};