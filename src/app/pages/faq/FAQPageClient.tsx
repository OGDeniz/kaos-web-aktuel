'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Button from '@/components/ui/Button';
import type { FaqItem } from '@/data/faq';
import { faqPageCategories, type FaqPageCategory } from '@/data/faq-page';
import styles from './page.module.css';

interface FAQPageClientProps {
  items: FaqItem[];
}

export default function FAQPageClient({ items }: FAQPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<FaqPageCategory>('Alle');

  const filtered =
    activeCategory === 'Alle'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={styles.hero}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>FAQ</span>
            <span className={styles.eyebrowLine} />
          </div>
          <h1 className={styles.heroTitle}>Häufige Fragen.</h1>
          <p className={styles.heroSubtitle}>
            Ehrliche Antworten zu Marketing, Agenturen, Google Ads, SEO und KI –{' '}
            ohne Buzzwords, ohne Ausreden.
          </p>
          <div className={styles.heroMeta}>
            <span className={styles.metaBadge}>{items.length} Fragen</span>
            <span className={styles.metaBadge}>{faqPageCategories.length - 1} Kategorien</span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className={styles.filterBar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {faqPageCategories.map((cat) => (
            <button
              key={cat}
              className={[
                styles.filterBtn,
                activeCategory === cat ? styles.filterBtnActive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {cat !== 'Alle' && (
                <span className={styles.filterCount}>
                  {items.filter((i) => i.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Accordion — key erzwingt Remount bei Kategorienwechsel, damit whileInView neu feuert */}
        <FAQAccordion key={activeCategory} items={filtered} />

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.ctaText}>
            Deine Frage ist nicht dabei?
          </p>
          <Button href="/pages/contact">Direkt fragen</Button>
        </motion.div>

      </div>
    </section>
  );
}
