'use client';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ui/ContactForm';
import ClaimBar from './ClaimBar';
import GrayLayout from '../../layouts/GrayLayout';
import Footer from '../ui/Footer';
import styles from './Contact.module.css';

const ContactPage: React.FC = () => {
  return (
    <GrayLayout>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <h1 className={styles.title}>
              Kontakt <span className={styles.titleAccent}>aufnehmen</span>
            </h1>
            <p className={styles.subtitle}>
              Du hast Fragen oder möchtest mit uns zusammenarbeiten? Schreib uns gerne – wir freuen uns auf deine Nachricht!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          <div className={styles.meta}>
            <a href="mailto:info@kaosmedia.de" className={styles.metaLink}>
              info@kaosmedia.de
            </a>
            <span className={styles.metaDot} />
            <span>Heidelberg, Deutschland</span>
          </div>
        </div>

        <ClaimBar text="KAOS Media – Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS" />
      </section>
      <Footer />
    </GrayLayout>
  );
};

export default ContactPage;
