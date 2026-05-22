import type { Metadata } from 'next';
import Navbar from '@/components/ui/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import KaosMethodSection from '@/components/sections/KaosMethode';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ReferenzenSection from '@/components/sections/ReferenzenSection';
import FAQSection from '@/components/sections/FAQSection';
import { faqHomeData } from '@/data/faq';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';
import ProofSection from '@/components/sections/ProofSection';

export const metadata: Metadata = {
  title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
  description: 'Branding, Webdesign, SEO & digitales Marketing aus Heidelberg. Messbare Ergebnisse für Startups und KMU.',
  alternates: { canonical: 'https://kaosmedia.de' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de',
    title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
    description: 'Branding, Webdesign, SEO & digitales Marketing aus Heidelberg. Messbare Ergebnisse für Startups und KMU.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media' }],
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <KaosMethodSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ProofSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
