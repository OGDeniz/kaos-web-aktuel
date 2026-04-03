import type { FaqItem } from './faq';

/** Kontakt-Seite FAQ – bearbeite dieses Array um Fragen auf /pages/contact zu ändern */
export const faqKontaktData: FaqItem[] = [
  {
    id: 'kontakt-faq-1',
    category: 'Prozess',
    question: 'Wie schnell meldet ihr euch zurück?',
    answer:
      'Wir antworten auf Anfragen in der Regel innerhalb von 24 Stunden an Werktagen. Bei dringenderen Projekten gib das kurz in der Nachricht an – wir priorisieren entsprechend.',
  },
  {
    id: 'kontakt-faq-2',
    category: 'Prozess',
    question: 'Was sollte ich beim Erstkontakt mitteilen?',
    answer:
      'Idealerweise: was du dir vorstellst, wann es fertig sein soll und welches Budget du grob einplanst. Keine Sorge, wenn noch nicht alles feststeht – das Erstgespräch dient genau dazu, gemeinsam Klarheit zu schaffen.',
  },
  {
    id: 'kontakt-faq-3',
    category: 'Allgemein',
    question: 'Ist das Erstgespräch wirklich kostenlos?',
    answer:
      'Ja, zu 100%. Das Erstgespräch dauert etwa 30 Minuten und ist vollständig unverbindlich. Wir lernen uns kennen, besprechen dein Projekt und schauen gemeinsam, ob wir zusammenpassen.',
  },
];
