import Navbar from '@/components/ui/navigation/Navbar';
import Footer from '@/components/ui/Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}
