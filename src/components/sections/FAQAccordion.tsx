'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FaqItem } from '@/data/faq';
import styles from './FAQAccordion.module.css';

interface FAQAccordionProps {
  items: FaqItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <motion.div
      className={styles.list}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {items.map((item, i) => {
        const isOpen = openId === item.id;

        return (
          <motion.div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <button
              className={styles.trigger}
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-trigger-${item.id}`}
            >
              <span className={styles.index}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className={styles.content}>
                <span className={styles.categoryBadge}>{item.category}</span>
                <span className={styles.question}>{item.question}</span>
              </span>

              <span
                className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                aria-hidden="true"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  className={styles.answerWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.38, ease: [0.04, 0.62, 0.23, 0.98] },
                    opacity: { duration: 0.25 },
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}