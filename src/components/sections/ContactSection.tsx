'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" alt narrow>
      <SectionHeading
        title="Lass uns reden"
        subtitle="Bereit für den nächsten Schritt? Wir freuen uns auf dein Projekt."
        label="Kontakt"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={styles.container}
      >
        <ContactForm />

        <div className={styles.contactInfo}>
          <a href="mailto:info@kaosmedia.de" className={styles.emailLink}>
            info@kaosmedia.de
          </a>
          <span className={styles.separator} />
          <span>Heidelberg, Deutschland</span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
