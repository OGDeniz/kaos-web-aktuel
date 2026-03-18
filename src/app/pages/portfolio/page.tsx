import Layout from '@/layouts/Layout';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import { getPortfolio } from '@/lib/getPortfolio';

export default async function PortfolioPage() {
  const posts = await getPortfolio(9);

  return (
    <Layout>
      <section className="px-6 md:px-12 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto max-w-5xl space-y-20">

          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.75 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Portfolio</span>
              <div className="w-12 h-0.75 bg-accent rounded-full" />
            </div>
            <h1 className="text-white">Unsere Arbeiten</h1>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Ausgewählte Projekte, die wir für unsere Kunden realisiert haben – von der ersten Idee bis zum fertigen Webauftritt.
            </p>
          </div>

          {posts.length > 0 ? (
            <PortfolioGrid posts={posts} />
          ) : (
            <p className="text-center text-text-muted">Keine Artikel geladen.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
