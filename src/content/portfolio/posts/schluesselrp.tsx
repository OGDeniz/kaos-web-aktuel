import type { LocalPortfolioPost } from '@/types/portfolio';

export const meta: LocalPortfolioPost = {
  slug: 'portfolio-schluesselrp',
  title: 'RP Schließtechnik – Digitaler Auftritt für einen 24/7-Schlüsseldienst aus Bruchsal',
  excerpt:
    'Wie wir für RP Schließtechnik eine Website entwickelt haben, die Notfallkunden in Sekundenbruchteilen zur richtigen Information führt – rund um die Uhr, 365 Tage im Jahr.',
  image: '/blog/schluessel.webp',
  category: 'Portfolio',
  date: '18. März 2026',
  readingTime: 4,
  url: '/pages/portfolio/portfolio-schluesselrp',
};

export default function Content() {
  return (
    <>
      <p>
        Wer um 2 Uhr nachts vor seiner Haustür steht und den Schlüssel vergessen hat, will keine
        schöne Website — er will sofort eine Telefonnummer. Genau das war die Herausforderung bei{' '}
        <a href="https://schluesselrp.de/" target="_blank" rel="noopener noreferrer">
          RP Schließtechnik
        </a>{' '}
        aus Bruchsal: Ein Webauftritt, der im Notfall funktioniert und gleichzeitig das volle
        Leistungsspektrum des Unternehmens professionell präsentiert.
      </p>

      <h2>Die Ausgangssituation</h2>
      <p>
        RP Schließtechnik bietet rund um die Uhr Notdienst im gesamten Landkreis Karlsruhe —
        Bruchsal, Ettlingen, Bretten, Stutensee, Waghäusel und Umgebung. Das Kernproblem vieler
        Handwerksbetriebe im Netz: Die Website wirkt veraltet, die Kontaktdaten sind schwer zu
        finden, und mobile Besucher springen schnell wieder ab. Im Notdienst-Bereich kostet das
        direkt Aufträge.
      </p>

      <h2>Was wir umgesetzt haben</h2>
      <ul>
        <li>
          <strong>Sofortige Erreichbarkeit:</strong> Telefonnummer und Kontaktmöglichkeit sind auf
          jedem Gerät sofort sichtbar — ohne Scrollen, ohne Suchen. Wer im Notfall landet, findet
          in Sekunden, was er braucht.
        </li>
        <li>
          <strong>Klare Leistungsstruktur:</strong> Vom klassischen Türöffnungsdienst über
          Einbruchschutz bis hin zu Smart-Home-Sicherheitslösungen und Zugangskontrollsystemen —
          alle Leistungen sind übersichtlich strukturiert und verständlich beschrieben.
        </li>
        <li>
          <strong>Vertrauensaufbau:</strong> Im Schlüsseldienst-Bereich ist Vertrauen alles.
          Design, Texte und Struktur wurden so gewählt, dass Besucher sofort erkennen: Hier ist
          ein seriöser, lokaler Fachbetrieb — kein anonymes Call-Center.
        </li>
        <li>
          <strong>Lokale SEO:</strong> Suchanfragen wie „Schlüsseldienst Bruchsal" oder
          „Türöffnung Karlsruhe Notfall" haben hohes Volumen. Wir haben Seiteninhalte und
          Struktur so aufgebaut, dass RP Schließtechnik bei diesen Anfragen organisch gefunden wird.
        </li>
        <li>
          <strong>Mobile-First:</strong> Der Großteil der Notfall-Suchanfragen kommt vom
          Smartphone. Die gesamte Seite wurde primär für mobile Geräte entwickelt — schnell, klar,
          ohne Ablenkung.
        </li>
      </ul>

      <h2>Das Ergebnis</h2>
      <p>
        Ein Webauftritt, der im entscheidenden Moment liefert: Notfallkunden finden die
        Kontaktdaten in Sekundenbruchteilen, Interessenten bekommen das volle Leistungsbild des
        Betriebs — und Google erkennt RP Schließtechnik als relevanten lokalen Anbieter im
        Großraum Karlsruhe.
      </p>
      <a
        href="https://schluesselrp.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-visit-btn"
      >
        Website besuchen &rarr;
      </a>

      <h2>Ähnliches Projekt für euch?</h2>
      <p>
        Ob Handwerksbetrieb, Notdienst oder lokales Dienstleistungsunternehmen — wir wissen, wie
        eine Website aussehen muss, die im richtigen Moment gefunden wird und Interessenten zu
        Kunden macht. Meldet euch.
      </p>
    </>
  );
}
