import type { Metadata } from 'next';
import HomeLayout from "@/layouts/HomeLayout";
import ClaimBar from "@/components/sections/ClaimBar";
import ElevatorSection from "@/components/sections/ElevatorSection";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/ui/navigation/Navbar";
import Footer from "@/components/ui/Footer";
import LogoBlock from "@/components/sections/LogoBlock";
import ColorPreview from "@/components/ColorPreview";
import GrayLayout from "@/layouts/GrayLayout";

export const metadata: Metadata = {
  title: 'KAOS MEDIA – Kreativität trifft Struktur',
  description: 'Kreativität trifft Strategie – KAOS Media, die Boutique-Agentur für deine Marke. Branding, Webdesign und mehr.',
  alternates: { canonical: 'https://kaosmedia.de/start' },
  openGraph: {
    type: 'website',
    url: 'https://kaosmedia.de/start',
    title: 'KAOS MEDIA – Kreativität trifft Struktur',
    description: 'Kreativität trifft Strategie – KAOS Media, die Boutique-Agentur für deine Marke. Branding, Webdesign und mehr.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media' }],
  },
};

export default function StartPage() {
  return (
    <GrayLayout>
      <ClaimBar text="KAOS Media - Kreativität trifft Struktur - PERFEKTION ENTSTEHT NUR IM KAOS - BRANDING - WEBDESIGN - SOCIAL MEDIA - STRATEGIE" />
      <Navbar />
      <ElevatorSection />
      <CTASection label="Jetzt Erstgespräch sichern" href="/kontakt" />
      <Footer />
    </GrayLayout>
  );
}
