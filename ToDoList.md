# KAOS Media — Website Launch To-Do Liste

> Stand: März 2026 | Zuletzt abgeglichen mit Projektstand März 2026

---

## 📋 Liste 1 — Impressum & Datenschutz vervollständigen

### Impressum (`/impressum`)

- [x] **Straße & Hausnummer** — Herbststraße 2, 86551 Aichach eingetragen
- [x] **PLZ / Stadt** — eingetragen
- [x] **Rechtsform** — kein UG, Kleinunternehmerregelung § 19 UStG; kein Handelsregistereintrag nötig
- [x] **Steuernummer** eingetragen (102/211/11317) + Kleinunternehmerhinweis § 19 UStG ergänzt
- [x] **Vollständige Namen** aller Gründer eingetragen (Anna-Katharina Dhillon, Deniz Yavuzkaya, Florian Kos)
- [x] **Verantwortlicher nach § 18 Abs. 2 MStV** — Anna-Katharina Dhillon, Herbststraße 2, 86551 Aichach
- [ ] Prüfen: Berufshaftpflicht oder Kammerzugehörigkeit anzugeben? (für Agenturen meist nicht erforderlich)
- [ ] **Rechtlichen Review** durch IT-Anwalt einholen ⚠️

### Datenschutzerklärung (`/datenschutz`)

- [x] **Adresse des Verantwortlichen** vervollständigen — Herbststraße 2, 86551 Aichach eingetragen
- [ ] **Hosting-Anbieter konkret benennen** — VPS bei **netcup** (Server-Hosting), Domain bei **ionos**; beide Anbieter in der Datenschutzerklärung namentlich eintragen + AVV-Nachweise ergänzen (netcup AVV: https://www.netcup.de/kontakt/auftragsverarbeitung.php)
- [x] **EmailJS im Datenschutz erwähnt** — Abschnitt in Sektion 6 ergänzt inkl. Rechtsgrundlage + Link zur EmailJS Privacy Policy
- [ ] **Cookie-Abschnitt aktualisieren**, sobald GA/GTM eingebunden wird — aktuell steht „keine Tracking-Cookies", das muss dann vollständig überarbeitet werden
- [ ] **GA4 + GTM Abschnitt** hinzufügen inkl. Opt-out-Möglichkeit und Auftragsverarbeitungsvertrag mit Google
- [ ] **Cookie Consent Banner** implementieren — vor GA-Einbindung zwingend erforderlich (DSGVO + ePrivacy)
- [ ] **Datenschutz-Checkbox im Kontaktformular** rechtlich prüfen lassen — Link ist vorhanden ✅, Formulierung muss geprüft werden
- [ ] **Datum aktualisieren** nach jeder inhaltlichen Änderung

---

## 📊 Liste 2 — Google Tracking vollständig einrichten

### Voraussetzungen (Pflicht vor Aktivierung)

- [x] **Cookie Consent Banner** implementiert — eigene Lösung in `CookieBanner.tsx`
  - Bottom-Banner + vollständiges Einstellungs-Modal mit 3 Kategorien
  - Consent wird in `localStorage` gespeichert
  - Consent Mode v2 Defaults (`denied`) werden vor GTM gesetzt, Update nach Nutzerwahl

### Google Tag Manager (GTM)

- [x] **GTM-Konto erstellen** & Container für `kaosmedia.de` anlegen (ID: GTM-TWSLXCXM)
- [x] **GTM-Snippet** in Next.js eingebunden — `layout.tsx` via `next/script` (`afterInteractive`) + `<noscript>`-Fallback
- [x] **Google Consent Mode v2** — Default `denied` via inline Script vor GTM, Update via `gtag('consent','update')` nach Nutzerwahl

### Google Analytics 4 (GA4)

- [x] **GA4-Property** in Google Analytics erstellt (ID: G-H35DLFCPC2)
- [x] **GA4-Tag** über GTM eingespielt — Google-Tag mit Measurement ID G-H35DLFCPC2, Trigger: Initialization - All Pages
- [x] **IP-Anonymisierung** — in GA4 standardmäßig aktiv
- [x] **Auftragsverarbeitungsvertrag (AVV)** mit Google abgeschlossen
- [x] **Datenspeicherung auf 14 Monate** begrenzt
- [ ] **Interne IPs ausschließen** — Filter in GA4 einrichten

### Events & Conversion Tracking

- [ ] **Kontaktformular-Submit** als GA4-Event tracken (`generate_lead` oder custom Event)
- [ ] **CTA-Klicks** tracken — „Projekt starten", „Alle Leistungen ansehen", „Anfragen"
- [ ] **Scroll-Tiefe** aktivieren — GTM Built-in Variable
- [ ] **Outbound Link Clicks** tracken — Instagram, LinkedIn, Facebook
- [ ] **Danke-Seite / Success-State** nach Formularabsendung einrichten (für sauberes Conversion-Tracking)
  - ✅ Homepage ContactForm: Inline-Success-Message vorhanden
  - ⚠️ Contact-Page (`/pages/contact`): nutzt noch `alert()` — durch echten Success-State ersetzen
- [ ] **Google Ads Conversion-Tag** vorbereiten (falls Ads geplant)

### Google Search Console

- [x] **Search Console Property** angelegt & Domain via DNS-TXT-Record verifiziert
- [x] **Sitemap** eingereicht
- [ ] **Indexierungsstatus** nach 24–48h prüfen

### Qualitätssicherung

- [ ] **GTM Preview Mode** nutzen — alle Tags vor Veröffentlichung testen
- [ ] **GA4 DebugView** aktivieren & Events live verifizieren
- [ ] **Datenschutzerklärung aktualisieren** mit GA4/GTM-Abschnitt vor Go-Live

---

## 🗺️ Liste 3 — Sitemap & Indexierung

### Sitemap erstellen (Next.js)

- [x] **`next-sitemap`** installiert — `public/sitemap.xml` (Index) + `public/sitemap-0.xml` generiert
- [x] Alle relevanten Routen aufnehmen:
  - `/` · `/pages/leistungen` · `/pages/preise` · `/pages/foerderung` · `/pages/about` · `/pages/portfolio` · `/pages/contact` · Portfolio-Slugs
- [x] `/impressum` und `/datenschutz` aus der Sitemap **ausgeschlossen** (via `next-sitemap.config.js`)
- [x] Portfolio-Projekte (alle 4 Slugs) in der Sitemap enthalten

### robots.txt konfigurieren

- [x] **`public/robots.txt`** erstellt mit `Allow: /` + Sitemap-Verweis
- [ ] `/api/`-Routen explizit disallowen — aktuell fehlt `Disallow: /api/` in robots.txt

### Meta-Tags & Indexierung je Seite

- [ ] **`noindex, nofollow`** auf `/impressum` und `/datenschutz` setzen (Metadata API: `robots: { index: false }`)
- [ ] **Open Graph + Twitter Card** auf allen Unterseiten ergänzen
  - ✅ Homepage (`layout.tsx`): OG-Tags vorhanden
  - ❌ Alle Unterseiten haben keine eigenen OG-Tags: `/leistungen`, `/preise`, `/foerderung`, `/about`, `/portfolio`, `/contact`, `/philosophie`
- [ ] **`<title>` und `<meta description>`** individuell pro Unterseite befüllen
  - ✅ Homepage: Custom Metadata vorhanden
  - ❌ Alle Unterseiten erben aktuell die generische Homepage-Metadata

### Google Search Console

- [x] Property anlegen & Domain via DNS-TXT-Record verifizieren
- [x] `sitemap.xml` nach Deploy eingereicht
- [ ] Indexierungsstatus nach 24–48h prüfen — Status aktualisiert sich automatisch
- [ ] `robots.txt` im Search Console Tool auf Fehler testen

---

## 🔍 Weitere offene Punkte (Gesamtanalyse)

### 🚨 Kritisch — sofort beheben (Seite ist bereits live!)

| #   | Aufgabe                                                                           | Status                                                                                |
| --- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 1   | Impressum-Platzhalter ersetzen — Abmahnrisiko!                                    | ✅ Erledigt                                                                           |
| 2   | Blog zeigt nur externe `dev.to`-Artikel — kein eigener Content, hohe Absprungrate | ✅ Erledigt — 5 eigene Case Studies + Detailseiten; umbenannt zu Referenzen/Portfolio |
| 3   | Formular-Backend verifizieren — EmailJS eingebunden, Submissions testen           | ✅ Erledigt — E-Mails kommen an                                                       |
| 4   | Cookie Consent Banner fehlt komplett                                              | ✅ Erledigt — eigene Lösung mit Consent Mode v2                                       |

### ⚠️ Kurzfristig — innerhalb 1–2 Wochen

| #   | Aufgabe                                                                                  | Status                                                          |
| --- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 5   | Social Links im Footer hinterlegen — Instagram, LinkedIn, Facebook zeigen auf `#`        | ❌ Offen                                                        |
| 6   | Portfolio-Projekte mit echten Case Studies füllen — „Projekt ansehen →" führt ins Nichts | ✅ Erledigt — `/pages/portfolio` mit 5 Projekten + Detailseiten |
| 7   | Contact-Page: `alert()` durch echten Danke-State ersetzen                                | ✅ Erledigt                                                     |
| 8   | EmailJS in Datenschutzerklärung dokumentieren                                            | ✅ Erledigt                                                     |

### 🟡 Mittelfristig — vor/nach Go-Live

| #   | Aufgabe                                                                                | Status                   |
| --- | -------------------------------------------------------------------------------------- | ------------------------ |
| 9   | Schema Markup ergänzen — LocalBusiness, Organization, Service                          | ❌ Offen                 |
| 10  | Core Web Vitals prüfen — Hintergrundvideos auf mehreren Seiten können LCP/CLS belasten | ❌ Ausstehend            |
| 11  | Unsplash-Bilder durch eigene Assets ersetzen — externe Abhängigkeit                    | ❌ Offen                 |
| 12  | Weitere Portfolio-Case-Studies ergänzen — bestehende Kundenprojekte dokumentieren      | ❌ Offen                 |
| 13  | ~~Förderungsseite auf Vollständigkeit prüfen~~ — **Erledigt** ✅                       | ✅ Seite ist vollständig |

### 🟢 Optional / Nice-to-have

| #   | Aufgabe                                                                                   | Status   |
| --- | ----------------------------------------------------------------------------------------- | -------- |
| 14  | Calendly o. Ä. für „Erstgespräch sichern" integrieren — erhöht Conversion deutlich        | ❌ Offen |
| 15  | AGB erstellen — empfehlenswert bei den Preispaketen                                       | ❌ Offen |
| 16  | `llms.txt` implementieren — ihr verkauft GEO als Service, das solltet ihr selbst vorleben | ❌ Offen |

---

## ✅ Abgeschlossen

| Aufgabe                               | Notiz                                                                                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Über-uns Seite (`/pages/about`)       | Vollständig, keine Platzhalter                                                                                                        |
| Preise Seite (`/pages/preise`)        | Vollständig mit Paketen und CTAs                                                                                                      |
| Förderung Seite (`/pages/foerderung`) | Vollständig mit Programmen und Prozess                                                                                                |
| ContactForm inline Success-State      | Grüne Erfolgsmeldung nach Absenden vorhanden                                                                                          |
| Open Graph Tags Homepage              | `layout.tsx` hat vollständige OG-Tags                                                                                                 |
| EmailJS Kontaktformular-Backend       | Eingebunden via `@emailjs/browser`                                                                                                    |
| Favicon                               | Hinzugefügt                                                                                                                           |
| Impressum vollständig                 | Adresse, Namen, Steuernummer, Kleinunternehmerregelung § 19 UStG                                                                      |
| Datenschutz Adresse                   | Herbststraße 2, 86551 Aichach eingetragen                                                                                             |
| EmailJS in Datenschutz dokumentiert   | Sektion 6 inkl. Rechtsgrundlage + Privacy-Policy-Link                                                                                 |
| Aufsichtsbehörde korrigiert           | BW → BayLDA (Bayern, Ansbach) — Sitz ist Aichach/Bayern                                                                               |
| Eigene Portfolio/Referenz-Seite       | 5 Case Studies mit Detailseiten unter `/pages/portfolio/[slug]`                                                                       |
| Blog → Portfolio umbenannt            | BlogSection → ReferenzenSection, `/pages/blog` → `/pages/portfolio`, API `/api/blog` → `/api/portfolio`, Navbar & Footer aktualisiert |
| Google Tag Manager eingebunden        | GTM-TWSLXCXM via `next/script` in `layout.tsx` — `<head>` + `<noscript>`-Fallback                                                     |
| GA4 Property erstellt & Tag deployed  | Measurement ID: G-H35DLFCPC2 · Google-Tag in GTM (Version 2) · Consent Mode v2 vollständig konfiguriert                               |
| GA4 Nutzerzugang Flo                  | Florian Kos als Nutzer in Google Analytics hinzugefügt                                                                                |
| AVV mit Google abgeschlossen          | Datenverarbeitungsbedingungen in GA4 akzeptiert                                                                                       |
| Datenschutzerklärung aktualisiert     | Hosting (netcup/IONOS), Cookies (3 Kategorien), GA4/GTM Sektion, Stand März 2026                                                      |
| Hosting-Anbieter bekannt              | VPS: netcup · Domain: ionos — noch in `/datenschutz` einzutragen                                                                      |
| Sitemap erstellt & deployed           | `next-sitemap` installiert, `public/sitemap.xml` + `public/sitemap-0.xml` generiert, alle Routen enthalten                            |
| robots.txt erstellt                   | `public/robots.txt` mit `Allow: /` + Sitemap-Verweis                                                                                  |
| Google Search Console eingerichtet    | Property angelegt, DNS-TXT-Record gesetzt, Sitemap eingereicht                                                                        |

---

## Prioritätenübersicht

| Priorität     | Farbe | Zeitraum    |
| ------------- | ----- | ----------- |
| Sofort        | 🔴    | Diese Woche |
| Kurzfristig   | 🟠    | 1–2 Wochen  |
| Mittelfristig | 🟡    | 2–4 Wochen  |
| Optional      | 🟢    | Nach Launch |

---

_Erstellt mit Claude · kaosmedia.de · Stand März 2026 · Zuletzt abgeglichen März 2026_
