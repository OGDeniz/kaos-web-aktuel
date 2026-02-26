import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Aktiviert zusätzliche Features und Optimierungen in der React-Bibliothek
  // und verbessert die Leistung der Anwendung.
  reactStrictMode: true,

  // Experimental: aktiviert das neue App-Router-Feature von Next.js,
  // das eine verbesserte Routing- und Layout-Architektur bietet
  experimental: {
    // appDir: true, // Removed as it is not recognized in the current Next.js version
  },

  // Bildoptimierung: Konfiguration der Bildoptimierung in Next.js, Domains von denen Bilder geladen werden dürfen
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Dev.to – alle Subdomains (media.dev.to, media2.dev.to, etc.)
      { protocol: 'https', hostname: '**.dev.to' },
      { protocol: 'https', hostname: 'dev-to-uploads.s3.amazonaws.com' },
    ],
  },

  // Turbopack-Konfiguration für Next.js 16 (leere Config um Kompatibilität zu gewährleisten)
  turbopack: {},

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;