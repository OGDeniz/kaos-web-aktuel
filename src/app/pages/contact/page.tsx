"use client";

import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";
import ContactForm from "@/components/ui/ContactForm";
import styles from "./page.module.css";

export default function ContactPage() {
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
              <span className={styles.eyebrowLabel}>Kontakt</span>
              <div className={styles.eyebrowLine} />
            </div>
            <h1 className={styles.h1}>Kontakt aufnehmen</h1>
            <p className={styles.headerSubtext}>
              Du hast Fragen oder möchtest mit uns zusammenarbeiten?<br />
              Schreib uns – wir freuen uns auf deine Nachricht!
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <a href="mailto:info@kaosmedia.de" className={styles.contactLink}>info@kaosmedia.de</a>
            <span className={styles.contactDot} />
            <span>Heidelberg, Deutschland</span>
          </div>

        </div>
      </section>
    </Layout>
  );
}
