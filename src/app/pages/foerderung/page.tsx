'use client';
import { motion } from 'framer-motion';
import Layout from '@/layouts/Layout';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const stats = [
  { value: '50 %', label: 'max. Förderquote' },
  { value: '0 €', label: 'Förder-Check Kosten' },
  { value: '3+', label: 'Förderprogramme' },
];

const foerderbarLeistungen = [
  { name: 'SEO & Onpage-Optimierung', reason: 'Digitale Sichtbarkeit & Online-Markterschließung' },
  { name: 'Google Ads (SEA)', reason: 'Digitale Markterschließung & Performance-Aufbau' },
  { name: 'GEO – KI-Sichtbarkeit', reason: 'Zukunftsdigitalisierung & KI-Transformation' },
  { name: 'Website-Entwicklung', reason: 'Digitalisierung von Geschäftsprozessen' },
  { name: 'Content- & Digitalstrategie', reason: 'Strategische Digitalisierungsberatung' },
  { name: 'Conversion-Optimierung', reason: 'Digitale Performance & Umsatzsteigerung' },
];

const programme = [
  {
    name: 'go-digital',
    träger: 'BMWK – Bundesministerium',
    foerderung: '50 %',
    fuer: 'KMU bis 100 Mitarbeiter',
    leistungen: ['Online-Marketing', 'Digitale Prozesse', 'IT-Sicherheit'],
  },
  {
    name: 'BAFA Unternehmensberatung',
    träger: 'Bundesamt für Wirtschaft',
    foerderung: '80 %',
    fuer: 'KMU & Startups',
    leistungen: ['Externe Beratung', 'Digitalisierungsstrategie', 'Markterschließung'],
  },
  {
    name: 'Digitalbonus / Landesprogramme',
    träger: 'Bundesländer (BY, BW, NRW …)',
    foerderung: '50 %',
    fuer: 'Regionale KMU',
    leistungen: ['Website & Shop', 'SEO & Social Media', 'CRM & Digitalisierung'],
  },
];

const schritte = [
  {
    nr: '01',
    titel: 'Erstgespräch & Analyse',
    text: 'Wir schauen uns gemeinsam an, welche eurer Maßnahmen förderfähig sind – kostenlos und unverbindlich.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={styles.icon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    nr: '02',
    titel: 'Programm identifizieren',
    text: 'Wir prüfen, welche Förderprogramme für euch in Frage kommen – bundesweit und in eurem Bundesland.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={styles.icon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    nr: '03',
    titel: 'Förderpartner vermitteln',
    text: 'Ihr bekommt die Einführung zu einem geprüften Fördermittelberater, der den Antrag für euch übernimmt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={styles.icon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    nr: '04',
    titel: 'Umsetzung mit KAOS',
    text: 'Sobald die Förderung steht, setzen wir das Projekt strukturiert um – mit Reporting, das Förderanforderungen erfüllt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={styles.icon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function FoerderungPage() {
  return (
    <Layout>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className={styles.heroSection}>
        {/* Ambient glow blobs */}
        <div className={`${styles.blob} ${styles.blobHeroRight}`} />
        <div className={`${styles.blob} ${styles.blobHeroLeft}`} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.heroContent}
        >
          <div className={styles.heroLabel}>
            <div className={styles.heroDash} />
            <span className={styles.heroLabelText}>Förderung</span>
            <div className={styles.heroDash} />
          </div>

          <h2 className={styles.heroTitle}>
            Digitales Marketing.<br />
            <span className={styles.heroTitleAccent}>Teilweise staatlich gefördert.</span>
          </h2>
          <p className={styles.heroSubtitle}>
            Viele unserer Leistungen sind über BAFA, go-digital oder Landesprogramme förderbar.
            Wir prüfen gemeinsam mit euch die Förderfähigkeit – kostenlos, unverbindlich, ohne Bürokratieaufwand für euch.
          </p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.statsBar}
          >
            {stats.map((s) => (
              <div key={s.label} className={styles.statCell}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.heroCtaWrapper}
          >
            <Button href="/pages/contact">Förder-Check starten</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          WAS WIRD GEFÖRDERT
      ══════════════════════════════════════ */}
      <section className={styles.gefördertSection}>
        {/* redPattern.png – sehr subtil */}
        <div
          className={styles.patternOverlay}
          style={{ backgroundImage: "url('/backgrounds/redPattern.png')", backgroundSize: '280px' }}
        />
        <div className={styles.gefördertInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeading}
          >
            <h2 className={styles.sectionTitle}>Was wird gefördert?</h2>
            <p className={styles.sectionSubtitle}>
              Diese KAOS-Leistungen können als förderfähige Digitalisierungsmaßnahmen eingestuft werden:
            </p>
          </motion.div>

          <div className={styles.leistungenGrid}>
            {foerderbarLeistungen.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={styles.leistungCard}
              >
                <div className={styles.leistungCardHover} />
                <div className={styles.leistungCardBody}>
                  <div className={styles.checkIcon}>
                    <svg viewBox="0 0 12 12" fill="none" className={styles.checkIconSvg}>
                      <path d="M2 6l3 3 5-5" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.leistungName}>{item.name}</p>
                    <p className={styles.leistungReason}>{item.reason}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROGRAMME
      ══════════════════════════════════════ */}
      <section className={styles.programmeSection}>
        <div className={`${styles.blob} ${styles.blobProgrammeRight}`} />
        <div className={styles.programmeInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeading}
          >
            <h2 className={styles.sectionTitle}>Relevante Förderprogramme</h2>
            <p className={styles.sectionSubtitle}>
              Eine Auswahl der Programme, über die unsere Leistungen förderbar sein können:
            </p>
          </motion.div>

          <div className={styles.programmeGrid}>
            {programme.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={styles.programCard}
              >
                {/* Red accent top bar */}
                <div className={styles.programCardTopBar} />
                <div className={styles.programCardBody}>
                  <p className={styles.programTräger}>{prog.träger}</p>
                  <h4 className={styles.programName}>{prog.name}</h4>

                  {/* Big percentage */}
                  <div className={styles.programFoerderRow}>
                    <span className={styles.programPercent}>{prog.foerderung}</span>
                    <span className={styles.programZuschussLabel}>Zuschuss<br />möglich</span>
                  </div>

                  <p className={styles.programFuer}>
                    <span className={styles.programFuerHighlight}>Für:</span> {prog.fuer}
                  </p>
                  <ul className={styles.programLeistungen}>
                    {prog.leistungen.map(l => (
                      <li key={l} className={styles.programLeistungItem}>
                        <span className={styles.programDot} />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <p className={styles.programmeDisclaimer}>
            * Förderhöhe und Bedingungen variieren je nach Programm und Einzelfall. Kein Rechtsanspruch auf Förderung.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WIE FUNKTIONIERT ES
      ══════════════════════════════════════ */}
      <section className={styles.schrittSection}>
        <div className={`${styles.blob} ${styles.blobSchrittLeft}`} />
        <div className={styles.schrittInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.sectionHeading}
          >
            <h2 className={styles.sectionTitle}>
              Wie funktioniert der <span className={styles.schrittHeadingAccent}>KAOS</span> Förder-Check?
            </h2>
            <p className={styles.sectionSubtitle}>
              Ihr müsst keine Förderbürokratie verstehen – wir übernehmen das.
            </p>
          </motion.div>

          <div className={styles.schrittGrid}>
            {schritte.map((s, i) => (
              <motion.div
                key={s.nr}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={styles.schrittCard}
              >
                <div className={styles.schrittCardHover} />
                <div className={styles.schrittCardBody}>
                  {/* Icon box */}
                  <div className={styles.iconCol}>
                    <div className={styles.iconBox}>
                      {s.icon}
                    </div>
                    <span className={styles.schrittNr}>{s.nr}</span>
                  </div>
                  <div className={styles.schrittTextCol}>
                    <h3 className={styles.schrittTitle}>{s.titel}</h3>
                    <p className={styles.schrittText}>{s.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MINDSET QUOTE (mit redPattern bg)
      ══════════════════════════════════════ */}
      <section className={styles.quoteSection}>
        {/* redPattern als dezente Textur */}
        <div
          className={styles.quotePatternOverlay}
          style={{ backgroundImage: "url('/backgrounds/redPattern.png')", backgroundSize: '220px' }}
        />
        {/* Vignette */}
        <div className={styles.quoteVignetteV} />
        <div className={styles.quoteVignetteH} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.quoteContent}
        >
          {/* Decorative quote mark */}
          <div className={styles.quoteMark}>&ldquo;</div>

          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              Wir senken nicht unseren Preis.{' '}
              <span className={styles.quoteTextAccent}>Wir erhöhen euren Zugang.</span>
            </p>
            <p className={styles.quoteBody}>
              Statt Rabatte zu geben, helfen wir euch, den Investitionsbetrag durch staatliche Förderung zu reduzieren –
              ohne dass wir an Qualität sparen. Das ist der Unterschied zwischen einer Billig-Agentur und einem strategischen Partner.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBlobWrapper}>
          <div className={styles.ctaBlob} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ctaBox}
        >
          <h2 className={styles.ctaTitle}>Förder-Check starten</h2>
          <p className={styles.ctaSubtitle}>
            Erzählt uns von eurem Projekt – wir prüfen kostenlos, ob und welche Förderung möglich ist.
            Kein Aufwand für euch, kein Risiko.
          </p>
          <Button href="/pages/contact">Kostenloses Erstgespräch</Button>
        </motion.div>
      </section>

    </Layout>
  );
}
