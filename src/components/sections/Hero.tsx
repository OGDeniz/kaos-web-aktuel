"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src="/redBackground.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />
      <div className={styles.gradient} />

      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <motion.img
            src="/logo/KAOSmedia_white.png"
            alt="KAOS Logo"
            className={styles.logo}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={styles.headline}
        >
          KREATIVITÄT
          <br />
          TRIFFT <span className={styles.accent}>STRUKTUR</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className={styles.tagline}
        >
          Ergebnisse entstehen.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className={styles.subline}
        >
          Die KAOS-Methode verbindet Kreativität, Daten und klare Prozesse zu
          digitalen Lösungen, die funktionieren.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className={styles.cta}
        >
          <Button href="#contact">Get your KAOS</Button>
          <Button href="#services" variant="outline">
            Unsere Leistungen
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className={styles.scrollIndicator}
        aria-hidden="true"
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollBar}>
          <motion.div
            className={styles.scrollLine}
            animate={{
              height: ["0%", "100%", "0%"],
              top: ["0%", "0%", "100%"],
            }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
