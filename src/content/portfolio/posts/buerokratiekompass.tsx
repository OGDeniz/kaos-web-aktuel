import type { LocalPortfolioPost } from '@/types/portfolio';

export const meta: LocalPortfolioPost = {
  slug: 'portfolio-buerokratiekompass',
  title: 'Bürokratiekompass – Orientierung im deutschen Bürokratiedschungel, digital gemacht',
  excerpt:
    'Wir haben den Bürokratiekompass entwickelt: eine Plattform, die Selbstständige, Gründer und Unternehmen durch das Labyrinth deutscher Behördenprozesse führt.',
  image: '/blog/buerokratiekompass.webp',
  category: 'Portfolio',
  date: '18. März 2026',
  readingTime: 4,
  url: '/pages/portfolio/portfolio-buerokratiekompass',
};

export default function Content() {
  return (
    <>
      <p>
        Deutschland und Bürokratie – eine Beziehung, die viele Unternehmer an ihre Grenzen bringt.
        Für{' '}
        <a href="https://www.buerokratiekompass.de/" target="_blank" rel="noopener noreferrer">
          Bürokratiekompass
        </a>{' '}
        haben wir eine Plattform entwickelt, die genau dort ansetzt: strukturierte Orientierung
        statt überwältigender Paragrafenwüsten.
      </p>

      <h2>Die Herausforderung</h2>
      <p>
        Wer sich in Deutschland selbstständig macht, gründet oder ein Unternehmen führt, steht
        schnell vor einem Berg an Formularen, Fristen und Zuständigkeiten. Das Problem: Die
        Informationen existieren zwar – aber verstreut über dutzende Behördenwebsites, in
        unverständlichem Amtsdeutsch und ohne roten Faden.
      </p>
      <p>
        Der Bürokratiekompass sollte das ändern: Ein zentraler Anlaufpunkt, der komplexe Prozesse
        in verständliche Schritt-für-Schritt-Anleitungen übersetzt.
      </p>

      <h2>Was wir umgesetzt haben</h2>
      <ul>
        <li>
          <strong>Klare Struktur und Navigation:</strong> Themen wie Gewerbeanmeldung,
          Steuernummern, Fördermittel oder Impressumspflichten sind intuitiv kategorisiert – Nutzer
          finden das Gesuchte ohne Suchaufwand.
        </li>
        <li>
          <strong>Verständliche Sprache:</strong> Alle Inhalte wurden konsequent in klares,
          alltagstaugliches Deutsch übersetzt. Keine Gesetze zitieren – sondern erklären, was sie
          bedeuten.
        </li>
        <li>
          <strong>Performance und Erreichbarkeit:</strong> Die Seite lädt schnell, auch auf
          mobilen Verbindungen. Gerade unterwegs, wenn man spontan eine Frage klären will, zählt
          jede Sekunde.
        </li>
        <li>
          <strong>Vertrauenswürdiges Design:</strong> Behördeninformationen müssen seriös wirken.
          Das Design wurde so gestaltet, dass Nutzer die Inhalte als zuverlässig wahrnehmen – ohne
          trocken oder abweisend zu erscheinen.
        </li>
        <li>
          <strong>SEO-Strategie für informationsgetriebenen Traffic:</strong> Behördliche
          Suchbegriffe haben hohes Suchvolumen. Wir haben Seiten- und Inhaltsstruktur so aufgebaut,
          dass die Plattform bei relevanten Suchanfragen organisch rankt.
        </li>
      </ul>

      <h2>Das Ergebnis</h2>
      <p>
        Eine Plattform, die echten Mehrwert liefert – nicht für Konzerne, sondern für
        Einzelunternehmer, Gründer und alle, die einfach wissen wollen, was sie als nächstes tun
        müssen. Strukturiert, verständlich, hilfreich.
      </p>
      <div className="not-prose my-6">
        <a
          href="https://www.buerokratiekompass.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
        >
          Website besuchen &rarr;
        </a>
      </div>

      <h2>Ähnliches Projekt für euch?</h2>
      <p>
        Ihr habt eine Idee für eine Informations- oder Service-Plattform und wisst nicht, wie ihr
        anfangen sollt? Wir begleiten euch von der Konzeption bis zum Launch. Schreibt uns.
      </p>
    </>
  );
}
