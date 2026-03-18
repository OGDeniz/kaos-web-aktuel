"use client";

import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

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
      <section className={styles.section}>
        <div className={styles.container}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <div className={styles.headerBadgeRow}>
              <div className={styles.headerLine} />
              <span className={styles.headerBadgeText}>Preise</span>
              <div className={styles.headerLine} />
            </div>
            <h1 className={styles.headerTitle}>Unsere Pakete</h1>
            <p className={styles.headerSubtitle}>
              Transparent, fair und flexibel – wähle das Paket, das zu deinem Business passt.
            </p>
          </motion.div>

          {/* ── Förder-Check-Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.foerderBanner}
          >
            <span className={styles.foerderBadge}>KAOS Förder-Check</span>
            <p className={styles.foerderTitle}>Bis zu 50 % staatlich förderbar</p>
            <p className={styles.foerderDesc}>
              Viele unserer Leistungen sind über BAFA, go-digital oder Landesprogramme teilförderbar.
              Wir prüfen gemeinsam mit dir, ob dein Projekt förderfähig ist – kostenlos und unverbindlich.
            </p>
            <div className={styles.foerderSteps}>
              <div className={styles.foerderStep}>
                <span className={styles.foerderStepNum}>1</span>
                <p className={styles.foerderStepText}>Förderfähigkeit prüfen</p>
              </div>
              <div className={styles.foerderDivider} />
              <div className={styles.foerderStep}>
                <span className={styles.foerderStepNum}>2</span>
                <p className={styles.foerderStepText}>Programm identifizieren</p>
              </div>
              <div className={styles.foerderDivider} />
              <div className={styles.foerderStep}>
                <span className={styles.foerderStepNum}>3</span>
                <p className={styles.foerderStepText}>Förderpartner vermitteln</p>
              </div>
            </div>
            <a href="/pages/foerderung" className={styles.foerderLink}>
              Mehr erfahren &rarr;
            </a>
          </motion.div>

          {/* ═══════════════════════════════════════════
              Startup-Pakete (Einmalig)
          ═══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionBlock}
          >
            <div className={styles.sectionHeadingBlock}>
              <h2 className={styles.sectionTitle}>Starten</h2>
              <p className={styles.sectionSubtitle}>
                Einmalige Pakete für den perfekten Start – vom Branding bis zum Komplettaufbau.
              </p>
            </div>

            <div className={styles.grid3}>
              {startupPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`${styles.cardHoverable} ${pkg.popular ? styles.cardPopularHoverable : ""}`}
                >
                  {pkg.popular && (
                    <span className={styles.cardBadgeTop}>Beliebt</span>
                  )}

                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <p className={styles.cardDesc}>{pkg.desc}</p>

                  <div className={styles.cardPriceRow}>
                    <span className={styles.cardPrice}>{formatPrice(pkg.price)}</span>
                    <span className={styles.cardCurrency}>€</span>
                  </div>
                  <p className={styles.cardHours}>{pkg.hours} · einmalig</p>

                  <Button href="/pages/contact" variant={pkg.popular ? "primary" : "outline"} className={styles.btnFull}>
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
            className={styles.sectionBlock}
          >
            <div className={styles.sectionHeadingBlock}>
              <h2 className={styles.sectionTitle}>Monatspakete</h2>
              <p className={styles.sectionSubtitle}>
                Laufende Betreuung – flexibel skalierbar, monatlich kündbar, viele Leistungen förderfähig.
              </p>
            </div>

            {/* ── Einzelpakete (erste 4) ── */}
            <div className={styles.subLabelBlock}>
              <p className={styles.subLabel}>Einzelpakete</p>
            </div>
            <div className={styles.grid4}>
              {monthlyPackages.slice(0, 4).map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={styles.cardSmall}
                >
                  {pkg.badge && (
                    <span className={styles.cardBadgeCorner}>{pkg.badge}</span>
                  )}
                  <h3 className={styles.cardNameSm}>{pkg.name}</h3>
                  <p className={styles.cardDescSm}>{pkg.desc}</p>
                  <div className={styles.cardPriceRowSm}>
                    <span className={styles.cardPriceSm}>{formatPrice(pkg.price)}</span>
                    <span className={styles.cardCurrencySm}>€ / Monat</span>
                  </div>
                  <p className={styles.cardHoursSm}>{pkg.hours}</p>
                  <Button href="/pages/contact" variant="outline" className={styles.btnOverride}>
                    Anfragen
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* ── Kombipakete (5-6) ── */}
            <div className={styles.subLabelBlock}>
              <p className={styles.subLabel}>Kombipakete</p>
            </div>
            <div className={styles.grid2}>
              {monthlyPackages.slice(4, 6).map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`${styles.cardHoverable} ${pkg.popular ? styles.cardPopularHoverable : ""}`}
                >
                  {pkg.popular && (
                    <span className={styles.cardBadgeTop}>Empfohlen</span>
                  )}
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <p className={styles.cardDesc}>{pkg.desc}</p>
                  <div className={styles.cardPriceRowSm}>
                    <span className={styles.cardPrice}>{formatPrice(pkg.price)}</span>
                    <span className={styles.cardCurrency}>€ / Monat</span>
                  </div>
                  <p className={styles.cardHours}>{pkg.hours}</p>
                  <Button href="/pages/contact" variant={pkg.popular ? "primary" : "outline"} className={styles.btnFull}>
                    Anfragen
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* ── Full Service (7-9) ── */}
            <div className={styles.subLabelBlock}>
              <p className={styles.subLabel}>Full Service</p>
            </div>
            <div className={styles.grid3Monthly}>
              {monthlyPackages.slice(6, 9).map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`${styles.cardHoverable} ${pkg.popular ? styles.cardPopularHoverable : ""}`}
                >
                  {pkg.popular && (
                    <span className={styles.cardBadgeTop}>Beliebt</span>
                  )}
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <p className={styles.cardDesc}>{pkg.desc}</p>
                  <div className={styles.cardPriceRowSm}>
                    <span className={styles.cardPrice}>{formatPrice(pkg.price)}</span>
                    <span className={styles.cardCurrency}>€ / Monat</span>
                  </div>
                  <p className={styles.cardHours}>{pkg.hours}</p>
                  <Button href="/pages/contact" variant={pkg.popular ? "primary" : "outline"} className={styles.btnFull}>
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
              className={styles.singleCard}
            >
              <h3 className={styles.cardName}>{monthlyPackages[9].name}</h3>
              <p className={styles.cardDesc}>{monthlyPackages[9].desc}</p>
              <div className={styles.cardPriceRowSm}>
                <span className={styles.cardPrice}>{formatPrice(monthlyPackages[9].price)}</span>
                <span className={styles.cardCurrency}>€ / Monat</span>
              </div>
              <p className={styles.cardHours}>{monthlyPackages[9].hours}</p>
              <Button href="/pages/contact" variant="outline" className={styles.btnFull}>Anfragen</Button>
            </motion.div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.cta}
          >
            <h2 className={styles.ctaTitle}>Nicht sicher, welches Paket passt?</h2>
            <p className={styles.ctaDesc}>
              Kein Problem – wir beraten dich kostenlos und finden gemeinsam die beste Lösung für dein Business.
            </p>
            <Button href="/pages/contact">Kostenloses Erstgespräch</Button>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
