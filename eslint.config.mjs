module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // TS-Syntax verstehen
  parserOptions: {
    ecmaVersion: 2020,                 // Sprach-Features bis ES2020
    sourceType: 'module',              // ES-Module
    ecmaFeatures: { jsx: true },       // JSX-Support
  },
  settings: {
    react: {
      version: 'detect',               // automatisch React-Version erkennen
    },
  },
  extends: [
    'eslint:recommended',              // Basis–Regeln von ESLint
    'plugin:@typescript-eslint/recommended', // TS-Regeln
    'plugin:react/recommended',        // React-Spezifika
    'plugin:jsx-a11y/recommended',     // Accessibility-Checks
    'next/core-web-vitals',            // Next.js-spezifische Empfehlungen
  ],
  rules: {
    // Hier kannst du spezifische Regeln deaktivieren/überschreiben
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off', // nicht nötig mit React 17+
  },
};
// Hier kannst du spezifische Regeln deaktivieren/überschreiben
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     'react/react-in-jsx-scope': 'off', // nicht nötig mit React 17+
//     'react/prop-types': 'off', // TypeScript kümmert sich um Typen
//     'jsx-a11y/anchor-is-valid': 'off', // Nächste.js kümmert sich um Links 