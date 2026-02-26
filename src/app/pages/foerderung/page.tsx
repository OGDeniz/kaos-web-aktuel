'use client';
import { motion } from 'framer-motion';
import Layout from '@/layouts/Layout';
import Button from '@/components/ui/Button';

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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    nr: '02',
    titel: 'Programm identifizieren',
    text: 'Wir prüfen, welche Förderprogramme für euch in Frage kommen – bundesweit und in eurem Bundesland.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    nr: '03',
    titel: 'Förderpartner vermitteln',
    text: 'Ihr bekommt die Einführung zu einem geprüften Fördermittelberater, der den Antrag für euch übernimmt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    nr: '04',
    titel: 'Umsetzung mit KAOS',
    text: 'Sobald die Förderung steht, setzen wir das Projekt strukturiert um – mit Reporting, das Förderanforderungen erfüllt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
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
      <section className="relative overflow-hidden px-6 md:px-12 pt-10 pb-20 md:pt-14 md:pb-24">
        {/* Ambient glow blobs */}
        <div className="pointer-events-none absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[140px]" />
        <div className="pointer-events-none absolute top-40 -left-32 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[3px] bg-accent rounded-full" />
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">Förderung</span>
            <div className="w-12 h-[3px] bg-accent rounded-full" />
          </div>

          <h1 className="text-white">
            Digitales Marketing.<br />
            <span className="text-accent">Teilweise staatlich gefördert.</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            Viele unserer Leistungen sind über BAFA, go-digital oder Landesprogramme förderbar.
            Wir prüfen gemeinsam mit euch die Förderfähigkeit – kostenlos, unverbindlich, ohne Bürokratieaufwand für euch.
          </p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-surface/60 backdrop-blur-sm overflow-hidden max-w-md mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="py-6 px-3 text-center">
                <span className="block text-3xl font-black text-accent leading-none">{s.value}</span>
                <span className="block text-text-muted text-xs mt-2 leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button href="/pages/contact">Förder-Check starten</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          WAS WIRD GEFÖRDERT
      ══════════════════════════════════════ */}
      <section className="relative py-20 px-6 md:px-12 bg-background-alt overflow-hidden">
        {/* redPattern.png – sehr subtil */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url('/backgrounds/redPattern.png')", backgroundSize: '280px' }}
        />
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-white">Was wird gefördert?</h2>
            <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
              Diese KAOS-Leistungen können als förderfähige Digitalisierungsmaßnahmen eingestuft werden:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foerderbarLeistungen.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group relative rounded-xl bg-surface border border-border p-5 hover:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="relative flex items-start gap-3">
                  <div className="mt-0.5 flex-none w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2 6l3 3 5-5" stroke="#cc0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-text-muted text-xs mt-1 leading-relaxed">{item.reason}</p>
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
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/5 blur-[130px]" />
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-white">Relevante Förderprogramme</h2>
            <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
              Eine Auswahl der Programme, über die unsere Leistungen förderbar sein können:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programme.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col rounded-2xl bg-surface border border-border overflow-hidden hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(204,0,0,0.2)] transition-all duration-300"
              >
                {/* Red accent top bar */}
                <div className="h-1 bg-gradient-to-r from-accent via-red-700 to-transparent" />
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-text-muted text-[10px] uppercase tracking-widest font-semibold mb-2">{prog.träger}</p>
                  <h3 className="text-white font-bold text-lg mb-5">{prog.name}</h3>

                  {/* Big percentage */}
                  <div className="flex items-end gap-2 mb-5 pb-5 border-b border-border">
                    <span className="text-5xl font-black text-accent leading-none">{prog.foerderung}</span>
                    <span className="text-text-muted text-xs mb-1.5">Zuschuss<br />möglich</span>
                  </div>

                  <p className="text-text-muted text-xs mb-4">
                    <span className="text-text-secondary">Für:</span> {prog.fuer}
                  </p>
                  <ul className="space-y-2 flex-1">
                    {prog.leistungen.map(l => (
                      <li key={l} className="flex items-center gap-2 text-text-secondary text-xs">
                        <span className="h-1 w-1 rounded-full bg-accent flex-none" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-text-muted text-xs mt-6">
            * Förderhöhe und Bedingungen variieren je nach Programm und Einzelfall. Kein Rechtsanspruch auf Förderung.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WIE FUNKTIONIERT ES
      ══════════════════════════════════════ */}
      <section className="relative py-20 px-6 md:px-12 bg-background-alt overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/6 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white">Wie funktioniert der KAOS Förder-Check?</h2>
            <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
              Ihr müsst keine Förderbürokratie verstehen – wir übernehmen das.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {schritte.map((s, i) => (
              <motion.div
                key={s.nr}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative rounded-2xl bg-surface border border-border p-7 hover:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="relative flex gap-4">
                  {/* Icon box */}
                  <div className="flex-none flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {s.icon}
                    </div>
                    <span className="text-accent/30 font-black text-sm">{s.nr}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-white font-bold text-base mb-2">{s.titel}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{s.text}</p>
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
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        {/* redPattern als dezente Textur */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "url('/backgrounds/redPattern.png')", backgroundSize: '220px' }}
        />
        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          {/* Decorative quote mark */}
          <div className="text-[100px] leading-none font-black text-accent/10 select-none mb-[-30px]">&ldquo;</div>

          <div className="rounded-2xl border border-accent/20 bg-accent/5 px-8 md:px-14 py-12">
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
              Wir senken nicht unseren Preis.{' '}
              <span className="text-accent">Wir erhöhen euren Zugang.</span>
            </p>
            <p className="text-text-secondary text-base leading-relaxed max-w-xl mx-auto">
              Statt Rabatte zu geben, helfen wir euch, den Investitionsbetrag durch staatliche Förderung zu reduzieren –
              ohne dass wir an Qualität sparen. Das ist der Unterschied zwischen einer Billig-Agentur und einem strategischen Partner.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="relative pb-24 md:pb-32 px-6 md:px-12">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[250px] rounded-full bg-accent/6 blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center rounded-2xl border border-border bg-surface/60 backdrop-blur-sm py-16 px-8"
        >
          <h2 className="text-white mb-4">Förder-Check starten</h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Erzählt uns von eurem Projekt – wir prüfen kostenlos, ob und welche Förderung möglich ist.
            Kein Aufwand für euch, kein Risiko.
          </p>
          <Button href="/pages/contact">Kostenloses Erstgespräch</Button>
        </motion.div>
      </section>

    </Layout>
  );
}
