import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from './FAQAccordion';
import type { FaqItem } from '@/data/faq';
import styles from './FAQSection.module.css';

interface FAQSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  items,
  title = 'Häufige Fragen.',
  subtitle = 'Alles Wichtige rund um unsere Leistungen, Prozesse und Zusammenarbeit – klar und ohne Umwege.',
}: FAQSectionProps) {
  return (
    <SectionWrapper id="faq">
      <div className={styles.sectionCard}>
        <div className={styles.sectionInner}>
          <div className={styles.topRow}>
            <SectionHeading title={title} subtitle={subtitle} label="FAQ" align="center" />

            <div className={styles.introCard}>
              <h3 className={styles.introTitle}>Schnell Klarheit bekommen</h3>
              <p className={styles.introText}>
                Hier findest du die wichtigsten Antworten zu Ablauf, Zusammenarbeit,
                Kommunikation und Ergebnissen. Falls deine Frage nicht dabei ist,
                kannst du uns jederzeit direkt kontaktieren.
              </p>
            </div>
          </div>

          <FAQAccordion items={items} />
        </div>
      </div>
    </SectionWrapper>
  );
}