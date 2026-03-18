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

- [ ] **Cookie Consent Management Platform (CMP)** implementieren — z. B. Cookiebot, Usercentrics oder Klaro (Open Source)
  - Consent muss **vor** dem Laden von GTM/GA eingeholt werden
  - Consent-Status muss an GTM übergeben werden (Consent Mode v2)

### Google Tag Manager (GTM)

- [ ] **GTM-Konto erstellen** & Container für `kaosmedia.de` anlegen
- [ ] **GTM-Snippet** in Next.js einbinden — `<head>` und `<body>` via `next/script` oder `_document.tsx`
- [ ] **Google Consent Mode v2** im GTM konfigurieren — Default-Status auf `denied`, Update nach Consent

### Google Analytics 4 (GA4)

- [ ] **GA4-Property** in Google Analytics erstellen
- [ ] **GA4-Tag** über GTM einspielen — Measurement ID eintragen
- [ ] **IP-Anonymisierung** dokumentieren — in GA4 standardmäßig aktiv
- [ ] **Auftragsverarbeitungsvertrag (AVV)** mit Google in der GA4-Konsole abschließen
- [ ] **Datenspeicherung auf 14 Monate** begrenzen (DSGVO-konform)
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

- [ ] **Search Console Property** anlegen & Domain via DNS-TXT-Record verifizieren
- [ ] **Sitemap** einreichen nach erstem Deploy
- [ ] **Indexierungsstatus** nach 24–48h prüfen

### Qualitätssicherung

- [ ] **GTM Preview Mode** nutzen — alle Tags vor Veröffentlichung testen
- [ ] **GA4 DebugView** aktivieren & Events live verifizieren
- [ ] **Datenschutzerklärung aktualisieren** mit GA4/GTM-Abschnitt vor Go-Live

---

## 🗺️ Liste 3 — Sitemap & Indexierung

### Sitemap erstellen (Next.js)

> **Empfehlung:** Da App Router genutzt wird, native `app/sitemap.ts` bevorzugen — kein externes Package nötig.

- [ ] **`src/app/sitemap.ts`** anlegen (App Router nativ) — ODER `next-sitemap` installieren
- [ ] Alle relevanten Routen aufnehmen:
  - `/` · `/pages/leistungen` · `/pages/preise` · `/pages/foerderung` · `/pages/about` · `/pages/blog` · `/pages/contact`
- [ ] `/impressum` und `/datenschutz` aus der Sitemap **ausschließen** + `noindex` setzen
- [ ] Blog-Posts dynamisch in die Sitemap aufnehmen (`additionalPaths` oder `sitemap.ts`)

### robots.txt konfigurieren

- [ ] **`src/app/robots.ts`** anlegen (App Router nativ) — ODER `public/robots.txt` erstellen:
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://www.kaosmedia.de/sitemap.xml
  ```
- [ ] `/api/`-Routen explizit disallowen

### Meta-Tags & Indexierung je Seite

- [ ] **`noindex, nofollow`** auf `/impressum` und `/datenschutz` setzen (Metadata API: `robots: { index: false }`)
- [ ] **Open Graph + Twitter Card** auf allen Unterseiten ergänzen
  - ✅ Homepage (`layout.tsx`): OG-Tags vorhanden
  - ❌ Alle Unterseiten haben keine eigenen OG-Tags: `/leistungen`, `/preise`, `/foerderung`, `/about`, `/blog`, `/contact`, `/philosophie`
- [ ] **`<title>` und `<meta description>`** individuell pro Unterseite befüllen
  - ✅ Homepage: Custom Metadata vorhanden
  - ❌ Alle Unterseiten erben aktuell die generische Homepage-Metadata

### Google Search Console

- [ ] Property anlegen & Domain via DNS-TXT-Record verifizieren
- [ ] `sitemap.xml` nach erstem Deploy einreichen
- [ ] Indexierungsstatus nach 24–48h prüfen
- [ ] `robots.txt` im Search Console Tool auf Fehler testen

---

## 🔍 Weitere offene Punkte (Gesamtanalyse)

### 🚨 Kritisch — sofort beheben (Seite ist bereits live!)

| #   | Aufgabe                                                                           | Status |
| --- | --------------------------------------------------------------------------------- | ------ |
| 1   | Impressum-Platzhalter ersetzen — Abmahnrisiko!                                    | ✅ Erledigt |
| 2   | Blog zeigt nur externe `dev.to`-Artikel — kein eigener Content, hohe Absprungrate | ✅ Erledigt — 5 eigene Case Studies + Detailseiten; umbenannt zu Referenzen/Portfolio |
| 3   | Formular-Backend verifizieren — EmailJS eingebunden, Submissions testen           | ✅ Erledigt — E-Mails kommen an |
| 4   | Cookie Consent Banner fehlt komplett                                              | ❌ Offen |

### ⚠️ Kurzfristig — innerhalb 1–2 Wochen

| #   | Aufgabe                                                                                  | Status |
| --- | ---------------------------------------------------------------------------------------- | ------ |
| 5   | Social Links im Footer hinterlegen — Instagram, LinkedIn, Facebook zeigen auf `#`        | ❌ Offen |
| 6   | Portfolio-Projekte mit echten Case Studies füllen — „Projekt ansehen →" führt ins Nichts | ✅ Erledigt — `/pages/portfolio` mit 5 Projekten + Detailseiten |
| 7   | Contact-Page: `alert()` durch echten Danke-State ersetzen                                | ⚠️ Teilweise (Homepage OK) |
| 8   | EmailJS in Datenschutzerklärung dokumentieren                                            | ✅ Erledigt |

### 🟡 Mittelfristig — vor/nach Go-Live

| #   | Aufgabe                                                                                | Status |
| --- | -------------------------------------------------------------------------------------- | ------ |
| 9   | Schema Markup ergänzen — LocalBusiness, Organization, Service                          | ❌ Offen |
| 10  | Core Web Vitals prüfen — Hintergrundvideos auf mehreren Seiten können LCP/CLS belasten | ❌ Ausstehend |
| 11  | Unsplash-Bilder durch eigene Assets ersetzen — externe Abhängigkeit                    | ❌ Offen |
| 12  | Eigene Blog-Artikel erstellen — keyword-basiert                                        | ❌ Offen |
| 13  | ~~Förderungsseite auf Vollständigkeit prüfen~~ — **Erledigt** ✅                       | ✅ Seite ist vollständig |

### 🟢 Optional / Nice-to-have

| #   | Aufgabe                                                                                   | Status |
| --- | ----------------------------------------------------------------------------------------- | ------ |
| 14  | Calendly o. Ä. für „Erstgespräch sichern" integrieren — erhöht Conversion deutlich        | ❌ Offen |
| 15  | AGB erstellen — empfehlenswert bei den Preispaketen                                       | ❌ Offen |
| 16  | `llms.txt` implementieren — ihr verkauft GEO als Service, das solltet ihr selbst vorleben | ❌ Offen |

---

## ✅ Abgeschlossen

| Aufgabe | Notiz |
| ------- | ----- |
| Über-uns Seite (`/pages/about`) | Vollständig, keine Platzhalter |
| Preise Seite (`/pages/preise`) | Vollständig mit Paketen und CTAs |
| Förderung Seite (`/pages/foerderung`) | Vollständig mit Programmen und Prozess |
| ContactForm inline Success-State | Grüne Erfolgsmeldung nach Absenden vorhanden |
| Open Graph Tags Homepage | `layout.tsx` hat vollständige OG-Tags |
| EmailJS Kontaktformular-Backend | Eingebunden via `@emailjs/browser` |
| Favicon | Hinzugefügt |
| Impressum vollständig | Adresse, Namen, Steuernummer, Kleinunternehmerregelung § 19 UStG |
| Datenschutz Adresse | Herbststraße 2, 86551 Aichach eingetragen |
| EmailJS in Datenschutz dokumentiert | Sektion 6 inkl. Rechtsgrundlage + Privacy-Policy-Link |
| Aufsichtsbehörde korrigiert | BW → BayLDA (Bayern, Ansbach) — Sitz ist Aichach/Bayern |
| Eigene Portfolio/Referenz-Seite | 5 Case Studies mit Detailseiten unter `/pages/portfolio/[slug]` |
| Blog → Portfolio umbenannt | BlogSection → ReferenzenSection, `/pages/blog` → `/pages/portfolio` |

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
