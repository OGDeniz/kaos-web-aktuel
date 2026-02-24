import HomeLayout from "@/layouts/HomeLayout";
import ClaimBar from "@/components/sections/ClaimBar";
import ElevatorSection from "@/components/sections/ElevatorSection";
import CTASection from "@/components/sections/CTASection";
import Navbar from "@/components/ui/navigation/Navbar";
import Footer from "@/components/ui/Footer";
import LogoBlock from "@/components/sections/LogoBlock";
import ColorPreview from "@/components/ColorPreview";
import GrayLayout from "@/layouts/GrayLayout";

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
