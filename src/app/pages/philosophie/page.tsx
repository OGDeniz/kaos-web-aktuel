"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

const principles = [
  {
    title: "MUT",
    description:
      "Wir glauben an mutige Ideen, die aufeinandertreffen, wachsen und sich entfalten dürfen. Perfektion braucht den Mut zur Unordnung.",
  },
  {
    title: "KLARHEIT",
    description:
      "Chaos ohne Struktur ist Lärm. Wir ordnen kreative Vielfalt und technische Präzision zu einem klaren, wirkungsvollen Ganzen.",
  },
  {
    title: "AUTHENTIZITÄT",
    description:
      "Wir arbeiten nicht für Zahlen oder Awards – sondern für Menschen. Mit echter Hingabe, ohne Kompromisse bei dem, was wirklich zählt.",
  },
];

export default function PhilosophiePage() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.container}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <div className={styles.eyebrowRow}>
              <div className={styles.eyebrowLine} />
              <span className={styles.eyebrowLabel}>Philosophie</span>
              <div className={styles.eyebrowLine} />
            </div>
            <h1 className={styles.h1}>
              Perfektion entsteht<br />nur mit <span className={styles.h1Accent}>KAOS</span>
            </h1>
            <p className={styles.headerSubtext}>
              Bei KAOS Media ist &ldquo;Chaos&rdquo; kein Fehler, sondern ein Prinzip: Wir ordnen kreative Vielfalt,
              technische Präzision und menschliche Leidenschaft zu einem Ganzen.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.imageWrapper}
          >
            <div className={styles.imageInner}>
              <Image
                src="/philosophy/perfekt.png"
                alt="KAOS Philosophie"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className={styles.imageOverlay} />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.textBlock}
          >
            <p>
              Wir glauben daran, dass echte Perfektion nicht im stillen Kämmerlein entsteht – sondern dort,
              wo Ideen mutig aufeinandertreffen, wachsen und sich entfalten dürfen.
            </p>
            <p>
              Wir arbeiten nicht für Zahlen oder Awards – wir arbeiten für Menschen. Für Gründer:innen,
              für Unternehmer:innen, für Visionäre. Für alle, die mehr wollen als 08/15.
            </p>
            <p>
              Wir begleiten unsere Kunden nicht nur mit Know-how, sondern mit echter Hingabe.
              Wir glauben an nachhaltigen Erfolg – nicht an schnelle Trends.
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className={styles.principlesGrid}>
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={styles.principleCard}
              >
                <span className={styles.principleTitle}>{p.title}</span>
                <p className={styles.principleText}>{p.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.quote}
          >
            <div className={styles.quoteMarkTop}>&ldquo;</div>
            <p className={styles.quoteText}>
              Am Anfang war das KAOS –<br />
              <span className={styles.quoteAccent}>und nur im KAOS</span><br />
              entsteht Perfektion!
            </p>
            <div className={styles.quoteMarkBottom}>&rdquo;</div>
          </motion.div>

          {/* CTA */}
          <div className={styles.cta}>
            <Button href="/pages/contact">Get your KAOS</Button>
          </div>

        </div>
      </section>
    </Layout>
  );
}
