'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" alt narrow>
      <SectionHeading
        title="Lass uns reden"
        subtitle="Bereit für den nächsten Schritt? Wir freuen uns auf dein Projekt."
        label="Kontakt"
      />

      {/* Centered Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        <form className="rounded-2xl bg-surface border border-border p-8 md:p-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm text-text-muted mb-2">Name</label>
              <input
                type="text"
                id="contact-name"
                className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="Dein Name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm text-text-muted mb-2">Email</label>
              <input
                type="email"
                id="contact-email"
                className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="deine@email.de"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm text-text-muted mb-2">Nachricht</label>
            <textarea
              id="contact-message"
              rows={5}
              className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-white placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Erzähl uns von deinem Projekt..."
            />
          </div>
          <div className="text-center pt-2">
            <Button type="submit">Nachricht senden</Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary text-sm">
          <a href="mailto:info@kaos.media" className="hover:text-white transition-colors">
            info@kaos.media
          </a>
          <span className="hidden sm:block w-1 h-1 bg-text-muted rounded-full" />
          <span>Heidelberg, Deutschland</span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
