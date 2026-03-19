import Navbar from '@/components/ui/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import KaosMethodSection from '@/components/sections/KaosMethode';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ReferenzenSection from '@/components/sections/ReferenzenSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';
import ProofSection from '@/components/sections/ProofSection';

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
