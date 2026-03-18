"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Danke für deine Nachricht! Wir melden uns innerhalb von 24h.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
  };

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
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.form}
          >
            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label htmlFor="name" className={styles.label}>Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Dein Name"
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email" className={styles.label}>E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="deine@email.de"
                />
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formField}>
                <label htmlFor="phone" className={styles.label}>Telefon (optional)</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+49 ..."
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="subject" className={styles.label}>Betreff *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Worum geht's?"
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label htmlFor="message" className={styles.label}>Nachricht *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={styles.textarea}
                placeholder="Erzähl uns von deinem Projekt..."
              />
            </div>

            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className={styles.checkbox}
              />
              <label className={styles.checkboxLabel}>
                Ich akzeptiere die{" "}
                <a href="/datenschutz" className={styles.checkboxLink}>Datenschutzbestimmungen</a>.
              </label>
            </div>

            <div className={styles.submitRow}>
              <Button type="submit" className={styles.submitBtn}>Nachricht senden</Button>
            </div>
          </motion.form>

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
