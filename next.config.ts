import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Aktiviert zusätzliche Features und Optimierungen in der React-Bibliothek
  // und verbessert die Leistung der Anwendung.
  reactStrictMode: true,

  // Nutzt die SWC-Compiler-Engine von Next.js, um den Code zu minifizieren
  swcMinify: true,

  // Experimental: aktiviert das neue App-Router-Feature von Next.js,
  // das eine verbesserte Routing- und Layout-Architektur bietet
  experimental: {
    appDir: true,
  },

  // Bildoptimierung: Konfiguration der Bildoptimierung in Next.js, Domains von denen Bilder geladen werden dürfen
  images: {
    domains: ['localhost', 'images.unsplash.com', 'cdn.pixabay.com', 'cdn.shopify.com'],
  },


};

export default nextConfig;
