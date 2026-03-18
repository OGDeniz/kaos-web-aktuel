'use client';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ui/ContactForm';
import ClaimBar from './ClaimBar';
import GrayLayout from '../../layouts/GrayLayout';
import Footer from '../ui/Footer';

const ContactPage: React.FC = () => {
  return (
    <GrayLayout>
      <section className="relative bg-background px-4 pt-32 pb-20 min-h-screen overflow-x-hidden">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              Kontakt <span className="text-accent">aufnehmen</span>
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto">
              Du hast Fragen oder möchtest mit uns zusammenarbeiten? Schreib uns gerne – wir freuen uns auf deine Nachricht!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-text-secondary text-sm">
            <a href="mailto:info@kaosmedia.de" className="hover:text-white transition-colors">
              info@kaosmedia.de
            </a>
            <span className="hidden sm:block w-1 h-1 bg-text-muted rounded-full" />
            <span>Heidelberg, Deutschland</span>
          </div>
        </div>

        <ClaimBar text="KAOS Media – Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS" />
      </section>
      <Footer />
    </GrayLayout>
  );
};

export default ContactPage;
