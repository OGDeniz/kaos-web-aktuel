'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './KaosMethode.module.css';

type KaosItem = {
  letter: string;
  title: string;
  text: string;
};

const kaosItems: KaosItem[] = [
  {
    letter: 'K',
    title: 'Kreativ',
    text: 'Wir entwickeln Ideen, Konzepte und Designs, die Aufmerksamkeit erzeugen und Marken sichtbar machen.',
  },
  {
    letter: 'A',
    title: 'Analytisch',
    text: 'Wir treffen Entscheidungen auf Basis von Daten, Zielgruppenverständnis und klaren digitalen Zielen.',
  },
  {
    letter: 'O',
    title: 'Originell',
    text: 'Wir bauen keine austauschbaren Standardlösungen, sondern individuelle digitale Auftritte mit Wiedererkennungswert.',
  },
  {
    letter: 'S',
    title: 'Strukturiert',
    text: 'Von der ersten Idee bis zum Launch arbeiten wir mit klaren Prozessen, sauberen Systemen und messbaren Ergebnissen.',
  },
];

export default function KaosMethodSection() {
  return (
    <SectionWrapper id="kaos-methode">
      <SectionHeading
        title="Die KAOS-Formel"
        subtitle="KAOS steht nicht nur für unseren Namen, sondern für die Art, wie wir digitale Projekte denken: kreativ in der Idee, analytisch in der Strategie, originell in der Umsetzung und strukturiert im Prozess."
        label="Unsere Arbeitsweise"
      />

      <div className={styles.grid}>
        {kaosItems.map((item, i) => (
          <motion.article
            key={item.letter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={styles.card}
          >
            <div className={styles.glow} />
            <div className={styles.letter}>{item.letter}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
