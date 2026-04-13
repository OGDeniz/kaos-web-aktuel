"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

const services = [
  {
    title: "Branding & Positionierung",
    description: "Wir schärfen eure Marke vom Naming bis zum marktrelevanten Messaging.",
    image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=900",
    foerderbar: true,
    bullets: [
      "Markenanalyse & Zielgruppen-Research",
      "Brand Story, Tonalität & Corporate Language",
      "Visuelles Branding – Logo, Farbwelt, Styles",
    ],
  },
  {
    title: "Webdesign & Development",
    description: "Conversion-orientierte Websites, die eure Marke erlebbar machen.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900",
    foerderbar: true,
    bullets: [
      "UX/UI Design mit Fokus auf Nutzerführung",
      "Headless & Next.js Entwicklung",
      "SEO-Basics, Tracking & Performance",
    ],
  },
  {
    title: "Content & Social Media",
    description: "Content, der eure Community aktiviert und für Wiedererkennung sorgt.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=900",
    foerderbar: false,
    bullets: [
      "Kampagnenplanung & Redaktionskonzept",
      "Content-Produktion (Foto, Video, Copy)",
      "Community-Management & Reporting",
    ],
  },
  {
    title: "Performance & Automation",
    description: "Wir skalieren Leads und Sales mit datengetriebenen Kampagnen.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900",
    foerderbar: true,
    bullets: [
      "Paid Social & Search Kampagnen",
      "Landingpages & Lead-Funnels",
      "Automatisierung von Follow-ups",
    ],
  },
];

const workflow = [
  { step: "Kick-off & Analyse", detail: "Deep-Dive in Marke, Markt und Ziele – transparent dokumentiert." },
  { step: "Strategie & Konzept", detail: "Positionierung, Journey und Maßnahmenfahrplan." },
  { step: "Umsetzung & Launch", detail: "Kollaborative Umsetzung mit schnellen Feedback-Loops." },
  { step: "Optimierung", detail: "Kontinuierliche Analyse, Testing und Ausbau." },
];

const differentiators = [
  "Boutique-Agentur mit direktem Founder-Kontakt",
  "Strategie & Kreation aus einer Hand",
  "Messbare Ergebnisse statt PowerPoint-Folien",
  "Transparente Retainer- und Projektmodelle",
];

export default function LeistungenPage() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.inner}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.heroCard}
          >
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImageInner}>
                <Image
                  src="/hero/leistungHero.png"
                  alt="Leistungen Hero"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="40vw"
                />
                <div className={styles.heroImageGradient} />
              </div>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <div className={styles.eyebrowLine} />
                <span className={styles.eyebrowText}>Unser Angebot</span>
                <div className={styles.eyebrowLine} />
              </div>
              <h1 className={styles.heroHeading}>Strukturierte Services,<br />kreative Ergebnisse</h1>
              <p className={styles.heroSubtext}>
                Skalierbare Marken- und Digitallösungen für Gründer, Startups und KMU –
                individuell, messbar und ohne Ballast.
              </p>
              <a href="/pages/foerderung" className={styles.foerderLink}>
                Viele Leistungen bis zu 50 % förderfähig &rarr;
              </a>
            </div>
          </motion.div>

          {/* Service Cards */}
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.serviceCard}
              >
                {service.foerderbar && (
                  <span className={styles.foerderBadge}>Förderfähig</span>
                )}
                <div className={styles.serviceImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.serviceImageOverlay} />
                </div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <ul className={styles.bulletList}>
                    {service.bullets.map(item => (
                      <li key={item} className={styles.bulletItem}>
                        <span className={styles.bullet} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Workflow + Differentiators */}
          <div className={styles.twoColGrid}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.workflowBox}
            >
              <h3 className={styles.boxHeading}>So arbeiten wir</h3>
              <ol className={styles.workflowList}>
                {workflow.map((phase, index) => (
                  <li key={phase.step} className={styles.workflowItem}>
                    <span className={styles.stepBadge}>{index + 1}</span>
                    <div>
                      <p className={styles.stepTitle}>{phase.step}</p>
                      <p className={styles.stepDetail}>{phase.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.whyBox}
            >
              <h3 className={styles.boxHeading}>Warum KAOS Media?</h3>
              <p className={styles.whySubtext}>
                Wir verbinden Kreativität mit Daten und liefern euch ein Team, das wie eine Inhouse-Unit denkt – nur flexibler.
              </p>
              <ul className={styles.differList}>
                {differentiators.map(point => (
                  <li key={point} className={styles.differItem}>
                    <span className={styles.dot} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <div className={styles.ctaWrapper}>
            <Button href="/pages/contact">Jetzt Erstgespräch sichern</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
