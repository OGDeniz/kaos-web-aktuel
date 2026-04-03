'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import styles from './ServicesSection.module.css';

const services = [
  {
    num: '01',
    title: 'Branding & Positionierung',
    desc: 'Wir schärfen eure Marke vom Naming bis zum marktrelevanten Messaging für Wiedererkennung und Vertrauen.',
  },
  {
    num: '02',
    title: 'Webdesign & Development',
    desc: 'Conversion-orientierte Websites mit modernem Stack, die eure Marke digital erlebbar machen.',
  },
  {
    num: '03',
    title: 'Content & Social Media',
    desc: 'Content, der eure Community aktiviert – von der Strategie über Produktion bis zum Reporting.',
  },
  {
    num: '04',
    title: 'Performance & Automation',
    desc: 'Datengetriebene Kampagnen, die Leads und Sales skalieren – messbar und effizient.',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" alt>
      <SectionHeading
        title="Was wir machen"
        subtitle="Skalierbare Marken- und Digitallösungen für Gründer, Startups und KMU."
        label="Services"
      />

      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={styles.card}
          >
            <div className={styles.cardBorder} />
            <span className={styles.number}>{service.num}</span>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles.viewAll}>
        <Link href="/pages/leistungen" className={styles.viewAllLink}>
          Alle Leistungen ansehen
          <span>&rarr;</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
