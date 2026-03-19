"use client";

import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";
import ContactForm from "@/components/ui/ContactForm";
import styles from "./page.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const valueItems = [
  {
    title: "Klare Einschätzung",
    text: "Wir analysieren deine Website, Positionierung oder digitale Präsenz und zeigen konkrete Potenziale auf.",
  },
  {
    title: "Direkte Handlungsempfehlungen",
    text: "Du bekommst erste sinnvolle nächste Schritte für Design, Sichtbarkeit, Nutzerführung und Conversion.",
  },
  {
    title: "Kostenlos & unverbindlich",
    text: "Das Erstgespräch ist kostenlos, strukturiert und ohne unnötigen Sales-Druck.",
  },
];

const processItems = [
  {
    step: "01",
    title: "Termin wählen",
    text: "Buche direkt einen passenden Zeitpunkt über den Kalender.",
  },
  {
    step: "02",
    title: "Situation besprechen",
    text: "Wir schauen gemeinsam auf deinen aktuellen Stand, Ziele und Engpässe.",
  },
  {
    step: "03",
    title: "Nächste Schritte mitnehmen",
    text: "Du gehst mit klarer Richtung und konkreten Empfehlungen aus dem Gespräch.",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.header
            className={styles.hero}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Kontakt</span>
              <span className={styles.eyebrowLine} />
            </div>

            <h1 className={styles.title}>Lass uns dein Projekt analysieren.</h1>

            <p className={styles.subtitle}>
              In einem kostenlosen Erstgespräch schauen wir auf deine aktuelle
              Website, deine Ziele und mögliche Optimierungspotenziale in
              Design, Struktur, Sichtbarkeit und Conversion.
            </p>

            <div className={styles.heroTrust}>
              <span className={styles.trustBadge}>Kostenlos & unverbindlich</span>
              <span className={styles.trustBadge}>ca. 30 Minuten</span>
              <span className={styles.trustBadge}>Strategisch + praxisnah</span>
            </div>
          </motion.header>

          <motion.section
            className={styles.valueSection}
            {...fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            aria-labelledby="value-title"
          >
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>Was du bekommst</span>
              <h2 id="value-title" className={styles.h2}>
                Kein loses Kennenlernen, sondern echter Mehrwert.
              </h2>
            </div>

            <div className={styles.valueGrid}>
              {valueItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                >
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <section className={styles.bookingSection} aria-labelledby="booking-title">
            <motion.div
              className={styles.leftPanel}
              {...fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className={styles.sectionHeadLeft}>
                <span className={styles.sectionEyebrow}>Ablauf</span>
                <h2 id="booking-title" className={styles.h2}>
                  So läuft der erste Austausch ab.
                </h2>
                <p className={styles.sectionText}>
                  Du kannst direkt einen Termin buchen oder uns alternativ zuerst
                  über das Formular schreiben. Beides ist schnell, unkompliziert
                  und auf Klarheit ausgelegt.
                </p>
              </div>

              <div className={styles.processList}>
                {processItems.map((item, index) => (
                  <motion.article
                    key={item.step}
                    className={styles.processCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                  >
                    <div className={styles.step}>{item.step}</div>
                    <div>
                      <h3 className={styles.processTitle}>{item.title}</h3>
                      <p className={styles.processText}>{item.text}</p>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className={styles.infoPanel}>
                <h3 className={styles.infoTitle}>Gut zu wissen</h3>
                <ul className={styles.infoList}>
                  <li>Du musst nichts vorbereiten.</li>
                  <li>Das Gespräch ist unverbindlich.</li>
                  <li>Du bekommst eine ehrliche Einschätzung.</li>
                </ul>
              </div>
            </motion.div>

            <motion.aside
              className={styles.bookingCard}
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles.bookingCardHead}>
                <span className={styles.sectionEyebrow}>Termin buchen</span>
                <h3 className={styles.bookingTitle}>
                  Wähle direkt einen passenden Termin.
                </h3>
                <p className={styles.bookingText}>
                  Buche dein kostenloses Strategiegespräch direkt online. Falls
                  du vorab lieber schreiben möchtest, findest du das Formular
                  darunter.
                </p>
              </div>

              <div className={styles.bookingBenefits}>
                <span>✔ kostenlos</span>
                <span>✔ ca. 30 Minuten</span>
                <span>✔ klare Empfehlung</span>
              </div>

              <div className={styles.calendarWrap}>
                <iframe
                  src="https://cal.eu/kaosmedia/30min"
                  title="Terminbuchung KAOS Media"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.aside>
          </section>

          <motion.section
            className={styles.formSection}
            {...fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            aria-labelledby="form-title"
          >
            <div className={styles.sectionHead}>
              <span className={styles.sectionEyebrow}>Alternative Anfrage</span>
              <h2 id="form-title" className={styles.h2}>
                Oder schreib uns direkt.
              </h2>
              <p className={styles.formIntro}>
                Ideal, wenn du uns zuerst ein paar Informationen schicken
                möchtest oder dein Anliegen nicht direkt in einen Termin passt.
              </p>
            </div>

            <div className={styles.formBox}>
              <div className={styles.formTrustTop}>
                <span>Antwort in der Regel innerhalb von 24h</span>
                <span>100% unverbindlich</span>
                <span>Kein Spam</span>
              </div>

              <ContactForm />
            </div>
          </motion.section>

          <div className={styles.metaRow}>
            <a href="mailto:info@kaosmedia.de" className={styles.metaLink}>
              info@kaosmedia.de
            </a>
            <span className={styles.metaDot} />
            <span>Heidelberg, Deutschland</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}