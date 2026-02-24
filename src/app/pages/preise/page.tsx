"use client";

import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";

/* ── Data ── */

const monthlyPackages = [
  {
    name: "KAOS Ads",
    desc: "Google Ads Setup & Betreuung, Keyword-Optimierung, Anzeigentests, Conversion-Tracking, Monatsreport",
    hours: "8–10 Std / Monat",
    price: 490,
  },
  {
    name: "KAOS SEO",
    desc: "Onpage-Optimierung, Keyword-Integration, Meta-Texte, technische Basisprüfung, 1 Content-Optimierung / Monat",
    hours: "8–10 Std / Monat",
    price: 590,
  },
  {
    name: "KAOS GEO",
    desc: "KI-optimierte Contentstruktur, FAQ-Optimierung, Entity-Aufbau, strukturierte Daten, AI-Sichtbarkeitsprüfung",
    hours: "8–10 Std / Monat",
    price: 590,
    badge: "Neu",
  },
  {
    name: "KAOS Social Basic",
    desc: "Betreuung von 1–2 Kanälen, 4–6 Posts pro Monat, Redaktionsplan, Community-Interaktion",
    hours: "8–10 Std / Monat",
    price: 490,
  },
  {
    name: "KAOS SEO + SEA",
    desc: "SEO-Basis + Google Ads Betreuung inkl. Conversion-Optimierung",
    hours: "14–16 Std / Monat",
    price: 890,
  },
  {
    name: "KAOS Performance Mix",
    desc: "SEO + SEA + GEO Grundoptimierung – das volle Performance-Paket",
    hours: "18–20 Std / Monat",
    price: 1190,
    popular: true,
  },
  {
    name: "KAOS Full Service – Small",
    desc: "SEO + SEA + 1 Social Kanal + GEO-Basis + Reporting",
    hours: "20–22 Std / Monat",
    price: 1390,
  },
  {
    name: "KAOS Full Service – Medium",
    desc: "SEO + SEA + Social (2 Kanäle) + GEO + Contentstrategie",
    hours: "25–30 Std / Monat",
    price: 1790,
    popular: true,
  },
  {
    name: "KAOS Full Service – Premium",
    desc: "Komplettes Setup inkl. Funnel, Content, Social (3 Kanäle), SEO, SEA, GEO, Conversion-Optimierung",
    hours: "35–40 Std / Monat",
    price: 2590,
  },
  {
    name: "KAOS Website Pflege",
    desc: "Technische Updates, kleinere Textanpassungen, Sicherheitscheck, Performance-Check",
    hours: "3–4 Std / Monat",
    price: 240,
  },
];

const startupPackages = [
  {
    name: "KAOS Startup Basic",
    desc: "Branding-Workshop, Positionierung, Homepage-Struktur, SEO-Grundsetup",
    hours: "25–30 Std",
    price: 2200,
  },
  {
    name: "KAOS Startup Growth",
    desc: "Branding, Website, SEO, Ads Setup, Tracking, Social Setup",
    hours: "40–50 Std",
    price: 3900,
    popular: true,
  },
  {
    name: "KAOS Startup Complete",
    desc: "Komplettaufbau inkl. CI, Website, SEO, SEA, Social, GEO, Funnel",
    hours: "60–70 Std",
    price: 5900,
  },
];

function formatPrice(price: number) {
  return price.toLocaleString("de-DE");
}

/* ── Component ── */

export default function PreisePage() {
  return (
    <Layout>
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Preise</span>
              <div className="w-12 h-[3px] bg-accent rounded-full" />
            </div>
            <h1 className="text-white">Unsere Pakete</h1>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent, fair und flexibel – wähle das Paket, das zu deinem Business passt.
            </p>
          </motion.div>

          {/* ── Rabatt-Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20 mx-auto max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center"
          >
            <p className="text-white text-lg font-semibold mb-4">Langfristig sparen</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/30 text-accent text-lg font-bold">5%</span>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">6 Monate Laufzeit</p>
                  <p className="text-text-muted text-xs">auf alle Monatspakete</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/30 text-accent text-lg font-bold">10%</span>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">12 Monate Laufzeit</p>
                  <p className="text-text-muted text-xs">auf alle Monatspakete</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════
              Startup-Pakete (Einmalig)
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-28"
          >
            <div className="text-center mb-14">
              <h2 className="text-white">Starten</h2>
              <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
                Einmalige Pakete für den perfekten Start – vom Branding bis zum Komplettaufbau.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {startupPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col rounded-2xl border p-8 text-center transition-all duration-500 hover:scale-[1.02] ${
                    pkg.popular
                      ? "bg-accent/5 border-accent/40 shadow-[0_0_40px_-12px_rgba(204,0,0,0.15)]"
                      : "bg-surface border-border hover:border-white/20"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wider uppercase">
                      Beliebt
                    </span>
                  )}

                  <h3 className="text-white font-bold text-lg mt-1">{pkg.name}</h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">{pkg.desc}</p>

                  <div className="mt-6 mb-2">
                    <span className="text-3xl font-extrabold text-white">{formatPrice(pkg.price)}</span>
                    <span className="text-text-muted text-sm ml-1">€</span>
                  </div>
                  <p className="text-text-muted text-xs mb-6">{pkg.hours} · einmalig</p>

                  <Button href="/pages/contact" variant={pkg.popular ? "primary" : "outline"} className="w-full">
                    Anfragen
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════
              Monatspakete
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-28"
          >
            <div className="text-center mb-14">
              <h2 className="text-white">Monatspakete</h2>
              <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
                Laufende Betreuung – flexibel skalierbar, monatlich kündbar oder mit Rabatt bei Laufzeit.
              </p>
            </div>

            {/* ── Einzelpakete (erste 4) ── */}
            <div className="mb-10 text-center">
              <p className="text-text-muted text-xs uppercase tracking-widest font-semibold mb-6">Einzelpakete</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {monthlyPackages.slice(0, 4).map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative flex flex-col rounded-2xl bg-surface border border-border p-7 text-center hover:border-white/20 transition-all duration-500"
                >
                  {pkg.badge && (
                    <span className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full bg-accent text-white text-[10px] font-bold tracking-wider uppercase">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-white font-bold text-base">{pkg.name}</h3>
                  <p className="mt-2 text-text-secondary text-xs leading-relaxed flex-1">{pkg.desc}</p>
                  <div className="mt-5">
                    <span className="text-2xl font-extrabold text-white">{formatPrice(pkg.price)}</span>
                    <span className="text-text-muted text-xs ml-1">€ / Monat</span>
                  </div>
                  <p className="text-text-muted text-xs mt-1 mb-5">{pkg.hours}</p>
                  <Button href="/pages/contact" variant="outline" className="w-full text-sm !py-2.5 !px-4">
                    Anfragen
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* ── Kombipakete (5-6) ── */}
            <div className="mb-10 text-center">
              <p className="text-text-muted text-xs uppercase tracking-widest font-semibold mb-6">Kombipakete</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
              {monthlyPackages.slice(4, 6).map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col rounded-2xl border p-8 text-center transition-all duration-500 hover:scale-[1.02] ${
                    pkg.popular
                      ? "bg-accent/5 border-accent/40"
                      : "bg-surface border-border hover:border-white/20"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wider uppercase">
                      Empfohlen
                    </span>
                  )}
                  <h3 className="text-white font-bold text-lg mt-1">{pkg.name}</h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">{pkg.desc}</p>
                  <div className="mt-5">
                    <span className="text-3xl font-extrabold text-white">{formatPrice(pkg.price)}</span>
                    <span className="text-text-muted text-sm ml-1">€ / Monat</span>
                  </div>
                  <p className="text-text-muted text-xs mt-1 mb-6">{pkg.hours}</p>
                  <Button href="/pages/contact" variant={pkg.popular ? "primary" : "outline"} className="w-full">
                    Anfragen
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* ── Full Service (7-9) ── */}
            <div className="mb-10 text-center">
              <p className="text-text-muted text-xs uppercase tracking-widest font-semibold mb-6">Full Service</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {monthlyPackages.slice(6, 9).map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col rounded-2xl border p-8 text-center transition-all duration-500 hover:scale-[1.02] ${
                    pkg.popular
                      ? "bg-accent/5 border-accent/40 shadow-[0_0_40px_-12px_rgba(204,0,0,0.15)]"
                      : "bg-surface border-border hover:border-white/20"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wider uppercase">
                      Beliebt
                    </span>
                  )}
                  <h3 className="text-white font-bold text-lg mt-1">{pkg.name}</h3>
                  <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">{pkg.desc}</p>
                  <div className="mt-5">
                    <span className="text-3xl font-extrabold text-white">{formatPrice(pkg.price)}</span>
                    <span className="text-text-muted text-sm ml-1">€ / Monat</span>
                  </div>
                  <p className="text-text-muted text-xs mt-1 mb-6">{pkg.hours}</p>
                  <Button href="/pages/contact" variant={pkg.popular ? "primary" : "outline"} className="w-full">
                    Anfragen
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* ── Website Pflege (10) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto rounded-2xl bg-surface border border-border p-8 text-center"
            >
              <h3 className="text-white font-bold text-lg">{monthlyPackages[9].name}</h3>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed">{monthlyPackages[9].desc}</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold text-white">{formatPrice(monthlyPackages[9].price)}</span>
                <span className="text-text-muted text-sm ml-1">€ / Monat</span>
              </div>
              <p className="text-text-muted text-xs mt-1 mb-6">{monthlyPackages[9].hours}</p>
              <Button href="/pages/contact" variant="outline" className="w-full">Anfragen</Button>
            </motion.div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center rounded-2xl bg-white/5 border border-white/10 py-16 px-8"
          >
            <h2 className="text-white mb-4">Nicht sicher, welches Paket passt?</h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">
              Kein Problem – wir beraten dich kostenlos und finden gemeinsam die beste Lösung für dein Business.
            </p>
            <Button href="/pages/contact">Kostenloses Erstgespräch</Button>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
