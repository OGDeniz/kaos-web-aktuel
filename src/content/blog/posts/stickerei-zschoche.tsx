import type { LocalBlogPost } from '@/types/blog';

export const meta: LocalBlogPost = {
  slug: 'portfolio-stickerei-zschoche',
  title: 'Stickerei Zschoche – Handwerk trifft modernem Webdesign',
  excerpt:
    'Für Stickerei Zschoche haben wir einen Webauftritt entwickelt, der handwerkliche Qualität sichtbar macht und Kunden auf direktem Weg zu Anfrage und Bestellung führt.',
  image: '/blog/stickerei.webp',
  category: 'Portfolio',
  date: '18. März 2026',
  readingTime: 3,
  url: '/pages/blog/portfolio-stickerei-zschoche',
};

export default function Content() {
  return (
    <>
      <p>
        Handwerk lebt von Qualität und Persönlichkeit — doch online zählt der erste Eindruck.
        Für{' '}
        <a href="https://stickerei-zschoche.de/" target="_blank" rel="noopener noreferrer">
          Stickerei Zschoche
        </a>{' '}
        haben wir einen Webauftritt geschaffen, der genau das transportiert: Sorgfalt, Können und
        die persönliche Note eines traditionsreichen Handwerksbetriebs.
      </p>

      <h2>Die Herausforderung</h2>
      <p>
        Stickereien und individuelles Textilhandwerk sind ein Nischenmarkt mit treuer Kundschaft —
        aber auch mit einem wachsenden Online-Potenzial. Wer maßgeschneiderte Stickarbeiten sucht,
        googelt heute zuerst. Die Aufgabe: einen modernen Webauftritt entwickeln, der Vertrauen
        weckt, die handwerkliche Qualität ins Bild rückt und Interessenten unkompliziert zur
        Anfrage führt.
      </p>

      <h2>Was wir umgesetzt haben</h2>
      <ul>
        <li>
          <strong>Produktpräsentation im Fokus:</strong> Die Arbeiten von Stickerei Zschoche
          sprechen für sich — wir haben sichergestellt, dass sie auf der Website auch so präsentiert
          werden: großformatig, hochwertig, mit klarem Kontext.
        </li>
        <li>
          <strong>Einfacher Anfrageprozess:</strong> Individualisierte Stickarbeiten beginnen mit
          einer Anfrage. Der Weg dorthin wurde so kurz wie möglich gestaltet — kein unnötiges
          Klicken, direkt zum Kontakt.
        </li>
        <li>
          <strong>Authentisches Design:</strong> Keine generischen Stock-Fotos, kein austauschbares
          Template-Layout. Das Design spiegelt die handwerkliche Identität des Betriebs wider —
          warm, detailverliebt, persönlich.
        </li>
        <li>
          <strong>Mobile Optimierung:</strong> Ob auf dem Smartphone beim Stöbern oder am
          Desktop beim gezielten Suchen — die Seite funktioniert auf allen Geräten flüssig und
          übersichtlich.
        </li>
        <li>
          <strong>Auffindbarkeit:</strong> Nischenbegriffe wie individuelle Stickerei oder
          Stickmotive auf Bestellung haben ihre eigene Suchlandschaft. Wir haben die Inhalte so
          strukturiert, dass der Betrieb für relevante Suchanfragen sichtbar wird.
        </li>
      </ul>

      <h2>Das Ergebnis</h2>
      <p>
        Ein Webauftritt, der Handwerk mit modernem Digitallook verbindet — ohne die Seele des
        Betriebs zu verlieren. Kunden verstehen sofort, was sie bekommen, und der Weg zur Anfrage
        ist so kurz wie möglich.
      </p>
      <div className="not-prose my-6">
        <a
          href="https://stickerei-zschoche.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
        >
          Website besuchen &rarr;
        </a>
      </div>

      <h2>Ähnliches Projekt für euch?</h2>
      <p>
        Ihr führt einen Handwerksbetrieb und euer Webauftritt spiegelt eure Qualität noch nicht
        wider? Wir helfen euch dabei, das zu ändern.
      </p>
    </>
  );
}
