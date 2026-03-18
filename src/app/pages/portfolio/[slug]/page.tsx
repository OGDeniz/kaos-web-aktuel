import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/layouts/Layout';
import { postRegistry } from '@/content/portfolio/index';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(postRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = postRegistry[slug];
  if (!entry) return {};
  return {
    title: `${entry.meta.title} | KAOS Media Portfolio`,
    description: entry.meta.excerpt,
  };
}

export default async function PortfolioPostPage({ params }: Props) {
  const { slug } = await params;
  const entry = postRegistry[slug];
  if (!entry) notFound();

  const { meta, Content } = entry;

  return (
    <Layout>
      <article className="px-6 md:px-12 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto max-w-3xl">

          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/pages/portfolio"
              className="text-text-muted hover:text-accent text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>&#8592;</span> Zurück zum Portfolio
            </Link>
          </nav>

          {/* Meta */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                {meta.category}
              </span>
              <span className="text-text-muted text-xs">·</span>
              <span className="text-text-muted text-xs">{meta.readingTime} Min. Lesezeit</span>
              <span className="text-text-muted text-xs">·</span>
              <span className="text-text-muted text-xs">{meta.date}</span>
            </div>
            <h1 className="text-white leading-tight">{meta.title}</h1>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">{meta.excerpt}</p>
          </div>

          {/* Cover Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-surface">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-text-secondary prose-p:leading-relaxed
            prose-li:text-text-secondary
            prose-strong:text-white
            prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent-hover
            prose-ol:text-text-secondary prose-ul:text-text-secondary">
            <Content />
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-text-secondary mb-4">
              Interesse geweckt? Wir beraten euch gerne persönlich.
            </p>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </div>

        </div>
      </article>
    </Layout>
  );
}