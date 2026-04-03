'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import styles from './AboutSection.module.css';

const values = ['KREATIV', 'ANALYTISCH', 'ORIGINELL', 'STRUKTURIERT'];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="Wer wir sind" label="Über uns" />

      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.imageSide}
        >
          <div className={styles.imageFrame}>
            <Image
              src="/philosophy/perfekt.png"
              alt="KAOS Media Team"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className={styles.imageGradient} />
          </div>
          <div className={styles.decorBorderBR} />
          <div className={styles.decorBorderTL} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.textSide}
        >
          <p className={styles.paragraph}>
            Echte Perfektion entsteht nicht im stillen Kämmerlein – sondern dort, wo Ideen mutig aufeinandertreffen,
            wachsen und sich entfalten dürfen.
          </p>
          <p className={styles.paragraph}>
            Bei KAOS Media ist &ldquo;Chaos&rdquo; kein Fehler, sondern ein Prinzip. Wir ordnen kreative Vielfalt,
            technische Präzision und menschliche Leidenschaft zu einem Ganzen – für Gründer:innen,
            Unternehmer:innen und Visionäre, die mehr wollen als 08/15.
          </p>

          <div className={styles.tags}>
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={styles.tag}
              >
                {v}
              </motion.span>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className={styles.blockquote}
          >
            <p className={styles.quote}>
              &ldquo;Am Anfang war das KAOS – und nur mit KAOS entsteht Perfektion.&rdquo;
            </p>
          </motion.blockquote>

          <div className={styles.btnRow}>
            <Button href="/pages/philosophie" variant="outline">Unsere Philosophie</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
