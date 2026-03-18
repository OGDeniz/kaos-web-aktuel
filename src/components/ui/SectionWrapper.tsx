'use client';
import { motion } from 'framer-motion';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  alt?: boolean;
  narrow?: boolean;
}

export default function SectionWrapper({ children, id, className = '', alt = false, narrow = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={[styles.section, alt ? styles.alt : '', className].filter(Boolean).join(' ')}
    >
      <div className={[styles.inner, narrow ? styles.narrow : ''].filter(Boolean).join(' ')}>
        {children}
      </div>
    </motion.section>
  );
}
