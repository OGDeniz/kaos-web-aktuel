'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './PortfolioSection.module.css';

const projects = [
  { title: 'Brand Relaunch', category: 'Branding', image: '/hero/img1.jpg' },
  { title: 'E-Commerce Redesign', category: 'Webdesign', image: '/hero/img3.jpg' },
  { title: 'Social Campaign', category: 'Content', image: '/hero/img5.jpg' },
  { title: 'Performance Boost', category: 'Marketing', image: '/hero/img7.jpg' },
];

export default function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" alt>
      <SectionHeading
        title="Ausgewählte Projekte"
        subtitle="Ein Einblick in unsere Arbeit – von Branding über Web bis Performance."
        label="Portfolio"
      />

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={styles.card}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.cardImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className={styles.darkOverlay} />
            <div className={styles.borderFrame} />

            <div className={styles.cardContent}>
              <div className={styles.cardInner}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.viewLink}>
                  Projekt ansehen <span>&rarr;</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
