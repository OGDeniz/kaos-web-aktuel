# KAOS Media — Website

Offizielle Website von **KAOS Media**, einer Kreativagentur für digitales Marketing aus Heidelberg. Gebaut mit Next.js 16 App Router, React 19 und Tailwind CSS v4.

**Live:** [kaosmedia.de](https://kaosmedia.de)

---

## Tech Stack

| Bereich         | Technologie                              |
| --------------- | ---------------------------------------- |
| Framework       | Next.js 16.1.6 (App Router, Turbopack)   |
| Sprache         | TypeScript 5.9                           |
| UI              | React 19                                 |
| Styling         | Tailwind CSS v4 (`@theme {}` in globals) |
| Animationen     | Framer Motion                            |
| Font            | Manrope + Outfit (Google Fonts)          |
| Tracking        | Google Tag Manager (GTM-TWSLXCXM) + GA4  |
| Formular        | EmailJS                                  |
| Terminbuchung   | Cal.eu                                   |
| Deployment      | VPS netcup · Domain IONOS                |

---

## Befehle

```bash
npm run dev      # Dev-Server auf localhost:3000 (Turbopack)
npm run build    # Produktions-Build
npm run start    # Produktions-Server starten
npm run lint     # ESLint
```

---

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx              # Root-Layout: Fonts, GTM, Metadata, CookieBanner
│   ├── page.tsx                # Homepage (One-Pager)
│   ├── start/page.tsx          # Landingpage-Variante
│   ├── datenschutz/            # Datenschutzerklärung (noindex)
│   ├── impressum/              # Impressum (noindex)
│   ├── api/
│   │   └── portfolio/route.ts  # Portfolio-API (statische Daten)
│   └── pages/
│       ├── about/              # Über uns
│       ├── contact/            # Kontakt + Cal.eu Buchung
│       ├── faq/                # FAQ-Seite
│       ├── foerderung/         # Staatliche Förderung
│       ├── leistungen/         # Services
│       ├── philosophie/        # Unternehmensphilosophie
│       ├── portfolio/          # Portfolio-Übersicht + [slug] Detailseiten
│       ├── preise/             # Preispakete
│       └── dashboard/          # Internes Dashboard (noindex)
│
├── components/
│   ├── ui/                     # Button, Navbar, Footer, SectionWrapper, ScrollProgress …
│   └── sections/               # Hero, ServicesSection, AboutSection, PortfolioSection …
│
├── content/
│   └── portfolio/              # MDX-Inhalte & postRegistry für Portfolio-Slugs
│
├── data/                       # Statische Daten (FAQ, etc.)
├── layouts/                    # Layout.tsx, HomeLayout.tsx, GrayLayout.tsx
├── lib/                        # Hilfsfunktionen (getPortfolio, etc.)
└── styles/
    └── globals.css             # Tailwind @theme Tokens + globale Stile
```

---

## Design System

Alle Design-Tokens sind als CSS Custom Properties in `src/styles/globals.css` unter `@theme {}` definiert.

| Token              | Wert            | Verwendung                   |
| ------------------ | --------------- | ---------------------------- |
| `--color-background` | `#000000`     | Hintergrund (Standard)       |
| `--color-background-alt` | `#0a0a0a` | Wechselnde Sections       |
| `--color-accent`   | `#cc0000`       | Rot-Akzent, CTAs             |
| `--color-accent-hover` | `#ff0000`   | Hover-Zustand                |
| `--color-text-primary` | `#ffffff`   | Haupttext                    |
| `--color-text-secondary` | `#999999` | Nebentext                  |
| `--color-border`   | `#1a1a1a`       | Trennlinien                  |

**Styling-Konvention:** CSS Modules — jede Komponente hat eine eigene `.module.css`. Kein Tailwind direkt in JSX/TSX.

---

## SEO & Metadata

- **metadataBase:** `https://kaosmedia.de` (Root Layout)
- **Twitter/OG Cards:** Alle 14 Routen haben individuelle `title`, `description`, `openGraph` und `twitter`-Felder
- **Client Components** (`'use client'`): Metadata wird über Segment-`layout.tsx` im gleichen Ordner gesetzt
- **noindex:** `/impressum`, `/datenschutz`, `/pages/dashboard`
- **Sitemap:** automatisch via `next-sitemap` beim Build generiert (`public/sitemap.xml`)
- **robots.txt:** `public/robots.txt`

---

## Tracking & Consent

- GTM-Container `GTM-TWSLXCXM` via `next/script (afterInteractive)`
- Google Consent Mode v2: Defaults `denied` werden vor GTM gesetzt
- Cookie Consent Banner (`CookieBanner.tsx`) mit 3 Kategorien + Modal
- Consent-Update nach Nutzerwahl via `gtag('consent', 'update', ...)`
- GA4 Measurement ID: `G-H35DLFCPC2`

---

## Wichtige Hinweise

- `kaos-reset/` Unterordner ist in `tsconfig.json` unter `exclude` ausgenommen
- Tailwind v4 nutzt `@theme {}` — kein `tailwind.config.ts`
- Nach Änderungen an `next.config.ts` muss der Dev-Server neu gestartet werden
- Dev.to Bilder erfordern den Wildcard-Pattern `**.dev.to` in `next.config.ts`
- Jede `page.tsx` muss einen Default Export haben, sonst Build-Fehler

---

## Autoren

KAOS Media — Florian Kos · Anna-Katharina Dhillon · Deniz Yavuzkaya

Stand: Mai 2026
