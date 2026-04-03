export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: 'Allgemein' | 'Leistungen' | 'Prozess' | 'Preise';
};

/** Homepage FAQ – bearbeite dieses Array um Fragen auf der Startseite zu ändern */
export const faqHomeData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Allgemein',
    question: 'Was macht KAOS Media genau?',
    answer:
      'KAOS Media ist eine digitale Markenagentur aus Heidelberg. Wir entwickeln starke Markenidentitäten, hochperformante Websites und digitale Strategien für Unternehmen, die wachsen wollen. Unser Ansatz verbindet kreatives Design mit messbaren Ergebnissen.',
  },
  {
    id: 'faq-2',
    category: 'Prozess',
    question: 'Wie läuft ein Projekt bei euch ab?',
    answer:
      'Wir starten immer mit einem kostenlosen Erstgespräch, um deine Ziele und Anforderungen zu verstehen. Danach folgt eine Konzeptphase, in der wir Strategie und Design ausarbeiten. Nach deiner Freigabe beginnt die Umsetzung – strukturiert, transparent und mit regelmäßigen Updates. Der Launch ist nur der Anfang.',
  },
  {
    id: 'faq-3',
    category: 'Leistungen',
    question: 'Entwickelt ihr auch komplexe Web-Applikationen?',
    answer:
      'Ja – wir entwickeln mit dem modernen Next.js Stack (React, TypeScript) und setzen auch komplexe Web-Applikationen, Dashboards und SaaS-Produkte um. Wir legen dabei großen Wert auf Performance, Barrierefreiheit und skalierbare Architektur.',
  },
  {
    id: 'faq-4',
    category: 'Preise',
    question: 'Was kostet eine Website bei KAOS Media?',
    answer:
      'Unsere Projekte starten ab 1.500 € für einfache Landing Pages. Komplexere Websites und Web-Apps werden individuell kalkuliert – abhängig von Umfang, Funktionen und Zeitrahmen. In unserem Erstgespräch geben wir dir eine transparente Einschätzung, ohne versteckte Kosten.',
  },
  {
    id: 'faq-5',
    category: 'Prozess',
    question: 'Wie lange dauert ein typisches Projekt?',
    answer:
      'Eine einfache Landing Page ist in 2–3 Wochen live. Eine vollständige Unternehmenswebsite benötigt meist 4–8 Wochen. Für komplexe Web-Applikationen planen wir gemeinsam eine realistische Timeline. Qualität braucht Zeit – aber wir halten, was wir versprechen.',
  },
  {
    id: 'faq-6',
    category: 'Allgemein',
    question: 'Arbeitet ihr remote oder vor Ort?',
    answer:
      'Wir arbeiten vollständig remote und digital-first. Unsere Prozesse sind darauf ausgelegt, reibungslos über jede Distanz zu funktionieren. Persönliche Meetings vor Ort in Heidelberg und Umgebung sind auf Wunsch selbstverständlich möglich.',
  },
  {
    id: 'faq-7',
    category: 'Leistungen',
    question: 'Bietet ihr auch laufende Betreuung nach dem Launch an?',
    answer:
      'Ja – wir bieten flexible Wartungs- und Retainer-Pakete an. Von technischen Updates und Content-Pflege bis hin zu laufender SEO-Optimierung und Weiterentwicklung. Du entscheidest, wie viel Unterstützung du nach dem Launch benötigst.',
  },
  {
    id: 'faq-8',
    category: 'Preise',
    question: 'Gibt es eine Mindestlaufzeit für eure Pakete?',
    answer:
      'Nein – unsere Betreuungspakete sind monatlich kündbar. Wir glauben an langfristige Zusammenarbeit durch echten Mehrwert, nicht durch Verträge. Die meisten unserer Kunden arbeiten aus Überzeugung langfristig mit uns zusammen.',
  },
];
