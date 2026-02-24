'use client';
import { motion } from 'framer-motion';

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
      className={`px-6 md:px-12 py-28 md:py-36 ${alt ? 'bg-background-alt' : 'bg-background'} ${className}`}
    >
      <div className={`mx-auto ${narrow ? 'max-w-4xl' : 'max-w-6xl'}`}>
        {children}
      </div>
    </motion.section>
  );
}
