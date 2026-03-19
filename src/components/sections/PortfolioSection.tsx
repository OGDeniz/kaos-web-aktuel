import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import { getPortfolio } from '@/lib/getPortfolio';
import styles from './PortfolioSection.module.css';

export default async function PortfolioSection() {
  const posts = await getPortfolio(3);

  return (
    <SectionWrapper id="portfolio" alt>
      <SectionHeading
        title="Ergebnisse, die für sich sprechen."
        subtitle="Ein Einblick in Projekte, die messbare Resultate liefern."
        label="Portfolio"
      />

      <PortfolioGrid posts={posts} />

      <div className={styles.viewAll}>
        <Link href="/pages/portfolio" className={styles.viewAllLink}>
          Alle Projekte ansehen <span>&rarr;</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
