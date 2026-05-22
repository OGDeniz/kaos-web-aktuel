KAOS Media Website — Projektnotizen
=====================================
Stand: Mai 2026


ROUTEN
------
/                       Homepage (One-Pager)
/start                  Landingpage-Variante
/pages/leistungen       Services
/pages/about            Über uns
/pages/philosophie      Unternehmensphilosophie
/pages/preise           Preispakete
/pages/contact          Kontakt + Cal.eu Buchung
/pages/foerderung       Staatliche Förderung
/pages/faq              FAQ
/pages/portfolio        Portfolio-Übersicht
/pages/portfolio/[slug] Portfolio-Detailseite (4 Slugs)
/pages/dashboard        Internes Dashboard (noindex)
/datenschutz            Datenschutzerklärung (noindex)
/impressum              Impressum (noindex)


BEFEHLE
-------
npm run dev      Dev-Server (localhost:3000, Turbopack)
npm run build    Produktions-Build + Sitemap-Generierung
npm run start    Produktions-Server
npm run lint     ESLint


UMGEBUNGSVARIABLEN (.env.local)
--------------------------------
EMAILJS_SERVICE_ID      EmailJS Service ID
EMAILJS_TEMPLATE_ID     EmailJS Template ID
EMAILJS_PUBLIC_KEY      EmailJS Public Key


DEPLOYMENT
----------
Server:  VPS bei netcup
Domain:  kaosmedia.de (registriert bei IONOS)
Branch:  master (produktiv)


TRACKING
--------
GTM Container:    GTM-TWSLXCXM
GA4 Property:     G-H35DLFCPC2
Search Console:   kaosmedia.de (DNS-TXT verifiziert, Sitemap eingereicht)


BEKANNTE EIGENHEITEN
--------------------
- kaos-reset/ Unterordner im Projektverzeichnis: in tsconfig.json unter
  "exclude" gelistet, wird vom Build ignoriert
- Tailwind v4: Design-Tokens in globals.css unter @theme {}, kein tailwind.config.ts
- Client Components mit 'use client' exportieren keine metadata direkt;
  stattdessen liegt eine layout.tsx im gleichen Segment-Ordner
- Dev.to Bilder: Wildcard **.dev.to in next.config.ts noetig
- Nach Aenderungen an next.config.ts: Dev-Server neu starten
