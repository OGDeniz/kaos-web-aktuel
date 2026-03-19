import type { LocalPortfolioPost } from '@/types/portfolio';

export const meta: LocalPortfolioPost = {
  slug: 'portfolio-osteopathie-weichselfelder',
  title: 'Webauftritt für Osteopathie Weichselfelder – Modern, vertrauenswürdig, patientenorientiert',
  excerpt:
    'Wie wir für die Praxis Weichselfelder eine professionelle Website entwickelt haben, die Patienten abholt, informiert und zur Terminbuchung motiviert.',
  image: '/blog/ostephatie.webp',
  category: 'Portfolio',
  date: '18. März 2026',
  readingTime: 4,
  url: '/pages/portfolio/portfolio-osteopathie-weichselfelder',
};

export default function Content() {
  return (
    <>
      <p>
        Eine Praxis ist nur so sichtbar wie ihr Webauftritt. Für{' '}
        <a href="https://osteopathie-weichselfelder.de/" target="_blank" rel="noopener noreferrer">
          Osteopathie Weichselfelder
        </a>{' '}
        haben wir eine Website entwickelt, die Vertrauen schafft, Leistungen klar kommuniziert und
        Patienten auf dem kürzesten Weg zur Terminbuchung führt.
      </p>

      <h2>Die Ausgangssituation</h2>
      <p>
        Viele Praxen in der Region arbeiten hervorragend – sind aber online kaum auffindbar oder
        wirken nicht so professionell, wie sie es verdienen. Die Anforderung war klar: Eine moderne,
        vertrauenswürdige Website, die die Expertise des Behandlers sichtbar macht und gleichzeitig
        auf mobilen Geräten perfekt funktioniert. Schließlich suchen die meisten Patienten heute
        unterwegs nach einer Praxis.
      </p>

      <h2>Was wir umgesetzt haben</h2>
      <ul>
        <li>
          <strong>Klare Informationsarchitektur:</strong> Leistungsübersicht, Praxisphilosophie,
          Kontakt und Terminbuchung sind auf wenigen Klicks erreichbar – ohne dass Besucher suchen
          müssen.
        </li>
        <li>
          <strong>Vertrauensaufbau durch Design:</strong> Ruhige Farbwelten, hochwertige
          Typografie und professionelle Bildsprache sorgen dafür, dass Patienten sich von der ersten
          Sekunde an gut aufgehoben fühlen.
        </li>
        <li>
          <strong>Mobile-First:</strong> Die Seite wurde von Grund auf für Smartphones entwickelt.
          Ladezeiten, Touch-Navigation und Lesbarkeit auf kleinen Displays standen im Mittelpunkt.
        </li>
        <li>
          <strong>SEO-Grundlage:</strong> Seitenstruktur, Metadaten und lokale Suchbegriffe wurden
          so eingebettet, dass die Praxis bei relevanten Google-Suchen in der Region sichtbar ist.
        </li>
        <li>
          <strong>Einfache Pflege:</strong> Der Kunde kann Texte und Inhalte selbstständig
          aktualisieren – keine Abhängigkeit von einer Agentur für alltägliche Änderungen.
        </li>
      </ul>

      <h2>Das Ergebnis</h2>
      <p>
        Ein Webauftritt, der die Qualität der Praxis nach außen trägt. Besucher bekommen sofort das
        Gefühl: Hier bin ich richtig. Die Seite ist schnell, sicher (HTTPS), klar strukturiert und
        schlägt lokale Mitbewerber in der organischen Suche.
      </p>
      <a
        href="https://osteopathie-weichselfelder.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-visit-btn"
      >
        Website besuchen &rarr;
      </a>

      <h2>Ähnliches Projekt für euch?</h2>
      <p>
        Ob Arztpraxis, Physiotherapie oder Heilpraktiker – wir wissen, was Patienten online suchen
        und wie ihr Webauftritt aussehen muss, um Vertrauen aufzubauen. Sprecht uns an.
      </p>
    </>
  );
}
