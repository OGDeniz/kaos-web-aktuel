'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" alt narrow>
      <SectionHeading
        title="Lass uns reden"
        subtitle="Bereit für den nächsten Schritt? Wir freuen uns auf dein Projekt."
        label="Kontakt"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <ContactForm />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary text-sm">
          <a href="mailto:info@kaosmedia.de" className="hover:text-white transition-colors">
            info@kaosmedia.de
          </a>
          <span className="hidden sm:block w-1 h-1 bg-text-muted rounded-full" />
          <span>Heidelberg, Deutschland</span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
