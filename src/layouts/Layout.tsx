import Navbar from '@/components/ui/navigation/Navbar';
import Footer from '@/components/ui/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
