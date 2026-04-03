"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

const values = ["KREATIV", "ANALYTISCH", "ORIGINELL", "STRUKTURIERT"];

export default function AboutPage() {
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
              <span className={styles.eyebrowLabel}>Über uns</span>
              <div className={styles.eyebrowLine} />
            </div>
            <h1 className={styles.h1}>
              Die Macher von<br />
              <span className={styles.h1Underline}>
                KAOS <span className={styles.h1Accent}>Media</span>
              </span>
            </h1>
          </motion.div>

          {/* Team */}
          <div className={styles.team}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.teamMember}
            >
              <div className={styles.teamImageWrapper}>
                <Image src="/aboutus/flo1.png" alt="Florian" fill className={styles.objectCover} style={{ objectFit: "cover" }} />
              </div>
              <h3 className={styles.teamName}>Florian</h3>
              <p className={styles.teamRole}>Co-Founder & Strategie</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.teamLogo}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/KAOSmedia.svg" alt="KAOS Media Logo" className={styles.logoImg} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.teamMember}
            >
              <div className={styles.teamImageWrapper}>
                <Image src="/aboutus/deniz1.jpg" alt="Deniz" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 className={styles.teamName}>Deniz</h3>
              <p className={styles.teamRole}>Co-Founder & Kreation</p>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.textBlock}
          >
            <p className={styles.textBlockPara}>
              <span className={styles.textAccent}>Wir sind KAOS Media</span> – die Boutique-Agentur für Gründer, Startups und KMU, die Großes vorhaben.
              Hinter KAOS stehen <span className={styles.textWhite}>Florian</span>, <span className={styles.textWhite}>Deniz</span> und <span className={styles.textWhite}>Anna</span> – drei erfahrene Unternehmer mit echten Höhen, Tiefen und Visionen.
            </p>
            <p className={styles.textBlockPara}>
              Unsere Stärke liegt im Spagat zwischen kreativer Freiheit und analytischer Präzision.
              Wir kombinieren Technologie, Strategie und Herzblut zu messbarem Erfolg – <span className={styles.textItalicAccent}>ohne Bullshit</span>.
            </p>
          </motion.div>

          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.philosophyBlock}
          >
            <div className={styles.philosophyEyebrowRow}>
              <div className={styles.philosophyEyebrowLine} />
              <span className={styles.philosophyEyebrowLabel}>Unsere Philosophie</span>
              <div className={styles.philosophyEyebrowLine} />
            </div>
            <p>
              Wir glauben daran, dass echte Perfektion nicht im stillen Kämmerlein entsteht – sondern dort,
              wo Ideen mutig aufeinandertreffen, wachsen und sich entfalten dürfen.
            </p>
            <p>
              Bei KAOS Media ist &ldquo;Chaos&rdquo; kein Fehler, sondern ein Prinzip: Wir ordnen kreative Vielfalt,
              technische Präzision und menschliche Leidenschaft zu einem Ganzen.
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

          {/* Values */}
          <div className={styles.formelHeading}>
            <h2>Unsere Formel für KAOS:</h2>
          </div>
          <div className={styles.values}>
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.valuePill}
              >
                {v}
              </motion.span>
            ))}
          </div>

          {/* Quote */}
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
              <span className={styles.quoteAccent}>und nur mit KAOS</span><br />
              entsteht Perfektion!
            </p>
            <div className={styles.quoteMarkBottom}>&rdquo;</div>
          </motion.div>

          {/* CTA */}
          <div className={styles.cta}>
            <Button href="/pages/contact">Jetzt Erstgespräch sichern</Button>
          </div>

        </div>
      </section>
    </Layout>
  );
}
