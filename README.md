# 🌀 KAOS-WEB – Next.js Projekt für KAOS Media

Dies ist das offizielle Frontend-Projekt für **KAOS Media** – ein modernes Webauftrittskonzept basierend auf Next.js, Tailwind CSS, TypeScript und einer komponentenbasierten Architektur.

---

## 📁 Projektstruktur

```
kaos-web/
├── public/                  # Statische Dateien (z. B. Bilder, Favicon)
├── src/
│   ├── app/                 # Next.js App-Router Struktur (Pages & Layout)
│   │   ├── layout.tsx       # Root-Layout für alle Seiten
│   │   └── page.tsx         # Aktuelle Startseite
│   ├── styles/              # Globale CSS-Dateien inkl. Tailwind
│   ├── components/          # (wird folgen) – UI-Komponenten (Atoms, Molecules…)
│   └── layouts/             # (wird folgen) – Seitenlayouts nach Wireframe
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.mjs
└── README.md
```

---

## ⚙️ Technologien & Tools

| Zweck                  | Stack/Tool                    |
| ---------------------- | ----------------------------- |
| Framework              | [Next.js](https://nextjs.org) |
| Sprache                | TypeScript                    |
| Styling                | Tailwind CSS, PostCSS         |
| Linting & Formatierung | ESLint                        |
| Entwicklungsserver     | Vite Dev mit `npm run dev`    |
| Paketverwaltung        | npm                           |

---

## 📦 Installation

### 1. Voraussetzungen

- [Node.js 18.x (LTS)](https://nodejs.org/en/download/)
- npm (wird mit Node automatisch installiert)

### 2. Projekt klonen

```bash
git clone <repo-url>
cd kaos-web
```

### 3. Abhängigkeiten installieren

```bash
npm install
```

### 4. Dev-Server starten

```bash
npm run dev
```

Projekt läuft dann auf:  
📍 http://localhost:3000

---

## ✅ Aktuell umgesetzt

- ✔️ Next.js Projekt aufgesetzt (`npx create-next-app`)
- ✔️ TypeScript, Tailwind CSS & ESLint konfiguriert
- ✔️ Dev-Server erfolgreich lauffähig
- ✔️ Erste Seitenstruktur: `/page.tsx` mit App-Router
- ✔️ Sprachunterstützung (de/en) vorbereitet
- ✔️ Bildoptimierung konfiguriert

---

## 🔜 Nächste Schritte

- [ ] Layout-Komponenten erstellen (`src/layouts/`)
- [ ] Section-Komponenten nach Wireframe anlegen (`src/components/sections/`)
- [ ] Inhalte aus Konzeptplan & Skizzen übertragen
- [ ] Navigation, CTA und Footer umsetzen
- [ ] Mehrsprachigkeit & Routing einbinden

---

## 👤 Autor

**Projektidee & Vision:** [KAOS Media]  
**Setup & Struktur:** [Deniz / FLO]  
**Stand:** 2025-05-04

---

## 📄 Lizenz

Interne Projektentwicklung – nicht für kommerzielle Nutzung außerhalb von KAOS Media vorgesehen.
