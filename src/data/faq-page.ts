import type { FaqItem } from './faq';
// FaqSection wird über FaqItem.sections genutzt – kein separater Import nötig

/** FAQ-Seite – alle Fragen. Kategorien: Agentur, Marketing, Google Ads, SEO, KI & Zukunft */
export const faqPageData: FaqItem[] = [
  // ─── Agentur & Zusammenarbeit ───────────────────────────────────
  {
    id: 'page-faq-1',
    category: 'Agentur',
    question: 'Wie erkenne ich, ob eine Agentur mich abzieht?',
    intro:
      'Dazu haben wir einen Fragenkatalog erstellt. Dieser erhebt keinen Anspruch auf Vollständigkeit, ist aber ein Leitfaden, an dem Du Dich orientieren kannst.',
    sections: [
      {
        title: 'Zugriff & Eigentum',
        items: [
          'Haben wir vollen administrativen Zugriff auf alle Werbekonten?',
          'Läuft das Google Ads / Meta-Konto auf unseren Namen?',
          'Können wir die Konten im Zweifel jederzeit übernehmen?',
        ],
      },
      {
        title: 'Rechtliche Verantwortung',
        items: [
          'Wer ist im Sinne der DSGVO Verantwortlicher?',
          'Wie wird mit Marken- und Wettbewerbsrecht umgegangen?',
          'Gibt es eine dokumentierte Freigabestruktur für Werbeaussagen?',
        ],
      },
      {
        title: 'Erfolgsmessung',
        items: [
          'Wie wird der Erfolg der Kampagne gemessen?',
          'Welche KPIs sind realistisch – und warum?',
          'Gibt es klare Zieldefinitionen vor Kampagnenstart?',
        ],
      },
      {
        title: 'Meilensteine',
        items: [
          'Gibt es definierte Zwischenziele?',
          'Wann wird überprüft, ob die Strategie angepasst werden muss?',
          'Ab welchem Punkt wird nachjustiert?',
        ],
      },
      {
        title: 'Reporting',
        items: [
          'Gibt es regelmäßige Berichte?',
          'Was beinhalten sie konkret (nur Klicks – oder auch Interpretation)?',
          'Werden Ergebnisse verständlich erklärt?',
        ],
      },
      {
        title: 'Mitwirkungspflichten',
        items: [
          'Was müssen wir als Unternehmen liefern? (Keywords, Bildmaterial, Freigaben, Produktinfos etc.)',
          'Wie schnell müssen wir reagieren, damit Kampagnen sauber laufen?',
        ],
      },
      {
        title: 'Transparenz',
        items: [
          'Wie definieren sich SEO-Leistungen? (SEO ist nicht gleich Keywords)',
          'Wie viel Zeit wird veranschlagt?',
          'Auf welche Weise werden die Tätigkeiten transparent gestaltet?',
        ],
      },
    ],
  },
  {
    id: 'page-faq-3',
    category: 'Agentur',
    question: 'Brauche ich wirklich eine Agentur oder geht das auch alleine?',
    answer:
      'Das hängt von Budget, Ziel und Zeitaufwand ab. Du kannst vieles selbst machen – die Frage ist, ob du weißt, was du tust, und ob deine Zeit dafür besser eingesetzt ist als in deinem Kerngeschäft. Für manche Aufgaben braucht man Spezialisten. Wenn du unsicher bist, lass uns unverbindlich darüber reden.',
  },
  {
    id: 'page-faq-14',
    category: 'Agentur',
    question: 'Warum sind so viele Marketing-Agenturen enttäuschend?',
    answer:
      'Weil sie oft an der falschen Stelle ansetzen. Viele Agenturen optimieren Kampagnen, ohne das Fundament zu hinterfragen. Wenn Angebot, Zielgruppe oder Positionierung nicht klar sind, kann auch die beste Kampagne keine guten Ergebnisse liefern. Das Problem ist selten nur das Marketing – es ist das, was davor passiert.',
  },
  {
    id: 'page-faq-15',
    category: 'Agentur',
    question: 'Wie erkenne ich eine gute Agentur?',
    answer:
      'Eine gute Agentur stellt zuerst Fragen, bevor sie Lösungen anbietet. Sie interessiert sich nicht nur für dein Budget, sondern für dein Geschäftsmodell, deine Zielgruppe und deine Ziele. Und sie verspricht keine schnellen Wunder, sondern spricht ehrlich über Chancen, Grenzen und Risiken. Wenn jemand sofort weiß, was zu tun ist, ohne dein Business zu verstehen, solltest du skeptisch sein.',
  },

  // ─── Marketing & Strategie ──────────────────────────────────────
  {
    id: 'page-faq-2',
    category: 'Marketing',
    question: 'Warum funktioniert mein Marketing nicht, obwohl ich Geld investiere?',
    answer:
      'Marketing ist kein Problemlöser, sondern ein Verstärker – in beide Richtungen. Wenn dein Marketing nicht funktioniert, wurde der Fehler oft schon früher gemacht. Wenn Angebot, Zielgruppe oder Positionierung unklar sind, wird genau das sichtbar – und zwar ziemlich teuer.',
  },
  {
    id: 'page-faq-4',
    category: 'Marketing',
    question: 'Woran erkenne ich, ob mein Marketing gut ist oder nur Geld verbrennt?',
    answer:
      'Ganz einfach: Wenn dein Marketing gut ist, kommt mehr zurück, als du investierst. Das Problem ist, dass viele auf die falschen Zahlen schauen. Klicks, Impressionen oder Reichweite sehen oft gut aus, sagen aber wenig darüber aus, ob dein Marketing wirklich funktioniert. Entscheidend ist immer das Ziel.',
  },
  {
    id: 'page-faq-5',
    category: 'Marketing',
    question: 'Warum bringt mir meine Website keine Kunden?',
    answer:
      'Weil deine Website kein Problem löst, sondern nur erklärt, wer du bist. Die meisten Websites sind aus Unternehmenssicht gebaut. Sie zeigen Leistungen, erzählen etwas über das Unternehmen und sehen vielleicht sogar gut aus. Aber sie beantworten nicht die eigentliche Frage des Besuchers: „Warum sollte ich mich genau hier melden?" Fehlt diese Klarheit, versteht der Besucher nicht sofort, was ihm angeboten wird, für wen es gedacht ist und warum es relevant ist. Und wenn das nicht innerhalb weniger Sekunden klar wird, ist er wieder weg.',
  },
  {
    id: 'page-faq-6',
    category: 'Marketing',
    question: 'Was bedeutet Positionierung eigentlich wirklich?',
    answer:
      'Positionierung bedeutet zu entscheiden, wofür du stehst – und genauso klar, wofür nicht. Viele verwechseln Positionierung mit einem schönen Satz auf der Website oder einem USP. In Wahrheit zeigt sich Positionierung nicht in dem, was du sagst, sondern in dem, was du weglässt. Wenn du versuchst, für alle relevant zu sein, bist du für niemanden wirklich interessant. Positionierung ist keine Formulierung. Es ist eine Entscheidung.',
  },
  {
    id: 'page-faq-7',
    category: 'Marketing',
    question: 'Warum hebt sich mein Unternehmen nicht von anderen ab?',
    answer:
      'Weil du im Grunde das Gleiche sagst wie alle anderen, nur mit anderen Worten. Die meisten Unternehmen benutzen die gleichen Begriffe, die gleichen Versprechen und die gleichen Argumente. Sich abzuheben bedeutet nicht, mehr zu sagen. Sondern klarer zu sagen, für wen man da ist – und für wen nicht. Wer für alle spricht, bleibt unsichtbar. Wer klar spricht, wird relevant.',
  },
  {
    id: 'page-faq-8',
    category: 'Marketing',
    question: 'Wie finde ich meine Zielgruppe wirklich?',
    answer:
      'Indem du aufhörst, alle ansprechen zu wollen. Eine Zielgruppe definiert sich nicht über Alter oder Branche, sondern über ein gemeinsames Problem. Die bessere Frage ist deshalb nicht: „Wer ist meine Zielgruppe?" Sondern: „Für welches Problem will ich die beste Lösung sein?" Wenn das klar ist, wird die Zielgruppe automatisch sichtbar.',
  },
  {
    id: 'page-faq-9',
    category: 'Marketing',
    question: 'Was ist ein USP und brauche ich überhaupt einen?',
    answer:
      'Ein USP ist nichts, was du erfindest – er ergibt sich aus deiner SWOT. Es ist das, was übrig bleibt, wenn du weißt, worin du wirklich gut bist. Du brauchst keinen USP im klassischen Sinne. Du brauchst Klarheit: Für wen bist du da, welches Problem löst du, und warum bist du genau dafür die richtige Wahl? Ein echter USP entsteht nicht durch Formulierung, sondern durch Entscheidung.',
  },
  {
    id: 'page-faq-16',
    category: 'Marketing',
    question: 'Ab wann lohnt sich Marketing wirklich?',
    answer:
      'Sobald du mit deiner Unternehmung öffentlich auftrittst, machst du automatisch Marketing. Marketing ist nicht Werbung – es ist, wie die Marke sich am Markt präsentiert. Die Frage ist eher: Ab wann ist es dir wichtig, gezielt wahrgenommen zu werden? Du kannst dein Marketing auch unkontrolliert laufen lassen. Ratsamer ist natürlich, von Anfang an auf eine klare Botschaft nach außen zu achten.',
  },
  {
    id: 'page-faq-17',
    category: 'Marketing',
    question: 'Wann sollte ich in Marketing investieren?',
    answer:
      'Strenggenommen von Anfang an. Später Fehler zu korrigieren wird aufwendiger und wahrscheinlich teurer, als gleich am Anfang das richtige Fundament zu bauen.',
  },
  {
    id: 'page-faq-18',
    category: 'Marketing',
    question: 'Was bringt mir Marketing langfristig wirklich?',
    answer:
      'Gutes Marketing bringt dir nicht nur Kunden. Es bringt dir Klarheit: darüber, wer deine Zielgruppe ist, was dein Angebot wirklich wert ist und wie du wahrgenommen wirst. Langfristig geht es nicht nur um mehr Anfragen, sondern um bessere Entscheidungen.',
  },
  {
    id: 'page-faq-21',
    category: 'Marketing',
    question: 'Muss ich wirklich auf TikTok, LinkedIn oder Instagram sein?',
    answer:
      'Nein. Du musst dort sein, wo deine Zielgruppe ist – nicht dort, wo gerade Aufmerksamkeit ist. Ein Kanal, der wirklich verstanden und sauber bespielt wird, bringt mehr als fünf halbherzige. Entscheidend ist nicht die Plattform. Entscheidend ist, ob du dort die richtigen Menschen erreichst.',
  },

  // ─── Google Ads & Performance ───────────────────────────────────
  {
    id: 'page-faq-10',
    category: 'Google Ads',
    question: 'Warum funktionieren meine Google Ads nicht?',
    answer:
      'Das kann verschiedene Faktoren haben. Oft vermittelt die Anzeige eine Erwartung, die die Landingpage nicht erfüllt. Die Ad und die Landingpage sind ein Zusammenspiel – wenn sie nicht aufeinander abgestimmt sind, wird es nicht funktionieren.',
  },
  {
    id: 'page-faq-11',
    category: 'Google Ads',
    question: 'Wie viel Budget brauche ich wirklich für Google Ads?',
    answer:
      'Nicht dein Budget entscheidet über den Erfolg, sondern dein Ziel. Die bessere Frage ist: Was muss am Ende dabei herauskommen? Ein realistisches Budget ergibt sich immer aus deinem Geschäftsmodell, deinem Angebot und dem Wert eines Kunden. Wer einfach „etwas Budget testet", sammelt oft nur Daten. Wer mit klarem Ziel startet, baut systematisch Ergebnisse auf.',
  },
  {
    id: 'page-faq-12',
    category: 'Google Ads',
    question: 'Warum habe ich Klicks, aber keine Anfragen?',
    answer:
      'Weil der Klick funktioniert, aber das Gesamtbild nicht. Die Anzeige weckt Interesse, aber die Website erfüllt die Erwartung nicht. Das kann an der Botschaft liegen, an der Struktur oder daran, dass der Nutzer nicht sofort versteht, was er tun soll. Klicks sind der Anfang. Anfragen entstehen erst, wenn alles danach zusammenpasst.',
  },
  {
    id: 'page-faq-13',
    category: 'Google Ads',
    question: 'Was ist wichtiger: Traffic oder Conversion?',
    answer:
      'Weder noch – entscheidend ist das Zusammenspiel. Traffic bringt Besucher, Conversion macht daraus Kunden. Ohne Traffic passiert nichts. Ohne Conversion bringt Traffic nichts. Viele optimieren das eine und vergessen das andere. Erfolg entsteht erst, wenn beides zusammen funktioniert.',
  },

  // ─── SEO & Sichtbarkeit ─────────────────────────────────────────
  {
    id: 'page-faq-22',
    category: 'SEO',
    question: 'Eine Agentur macht mein SEO, aber ich finde mich nicht bei Google. Warum?',
    answer:
      'Weil SEO mehr ist als Keywords und Inhalte. Wenn deine Website keine klare Struktur, keine relevante Positionierung oder keinen echten Mehrwert bietet, wird sie auch nicht sichtbar. SEO funktioniert nur, wenn das Gesamtbild stimmt: Inhalte, Technik und vor allem das, was du anbietest. Ohne Substanz kann auch SEO keine Ergebnisse liefern.',
  },
  {
    id: 'page-faq-24',
    category: 'SEO',
    question: 'Lohnt sich SEO überhaupt noch, wenn Google die Antworten selbst gibt?',
    answer:
      'Ja – aber anders als früher. SEO bedeutet heute nicht mehr nur, bei Google gefunden zu werden. Sondern auch, als Quelle für Antworten zu dienen. Wer nur auf Rankings setzt, verliert an Sichtbarkeit. Wer echte Fragen beantwortet, gewinnt an Relevanz. Das Ziel bleibt gleich: gefunden werden, wenn jemand nach einer Lösung sucht.',
  },

  // ─── KI & Zukunft ───────────────────────────────────────────────
  {
    id: 'page-faq-20',
    category: 'KI & Zukunft',
    question: 'Kann ich das nicht alles mit KI-Tools mittlerweile selbst machen?',
    answer:
      'Ja, kannst du. Die Frage ist nur, ob du weißt, was du tust. KI kann dir helfen, schneller Inhalte zu erstellen, Daten zu analysieren oder Ideen zu entwickeln. Was sie nicht ersetzt, ist das Verständnis für dein Geschäftsmodell, deine Zielgruppe und deine Positionierung. Wenn diese Grundlage fehlt, produziert KI vor allem eines: mehr vom Gleichen. KI ist ein Werkzeug. Ob es dir wirklich hilft, hängt davon ab, wie klar du selbst bist.',
  },
  {
    id: 'page-faq-23',
    category: 'KI & Zukunft',
    question: 'Werde ich bei ChatGPT oder Perplexity überhaupt empfohlen?',
    answer:
      'Nur, wenn du als relevante Quelle wahrgenommen wirst. KI-Systeme greifen auf Inhalte zurück, die klar, verständlich und vertrauenswürdig sind. Wenn deine Inhalte austauschbar sind, wirst du nicht erwähnt. Wenn du konkrete Fragen besser beantwortest als andere, steigt die Wahrscheinlichkeit deutlich. Es geht nicht darum, für KI zu optimieren – sondern darum, echte Probleme so zu erklären, dass sie verstanden werden.',
  },
  {
    id: 'page-faq-25',
    category: 'KI & Zukunft',
    question: 'Wie kann ich KI nutzen, ohne dass mein Marketing wie ein Roboter klingt?',
    answer:
      'Indem du nicht alles von der KI schreiben lässt. KI ist gut darin, Struktur zu liefern und Ideen zu entwickeln. Was sie nicht ersetzen kann, ist deine Perspektive, deine Erfahrung und deine Haltung. Wenn du KI nur nutzt, um Inhalte schneller zu produzieren, klingt es oft austauschbar. Wenn du sie nutzt, um deine eigenen Gedanken besser auszudrücken, bleibt dein Marketing menschlich.',
  },
  {
    id: 'page-faq-26',
    category: 'KI & Zukunft',
    question: 'Wie schütze ich meine Marke davor, dass KI Quatsch über mich erzählt?',
    answer:
      'Indem du selbst zur klaren Quelle wirst. KI greift auf vorhandene Informationen zurück. Wenn über dein Unternehmen wenig oder nur unklare Inhalte existieren, entstehen Lücken – und damit Ungenauigkeiten. Je klarer und konsistenter deine Inhalte sind, desto besser kann KI dich korrekt einordnen. Kontrolle entsteht nicht durch Abschottung, sondern durch Klarheit.',
  },
];

/** Alle einzigartigen Kategorien in der Reihenfolge wie sie im Array erscheinen */
export const faqPageCategories = ['Alle', 'Agentur', 'Marketing', 'Google Ads', 'SEO', 'KI & Zukunft'] as const;
export type FaqPageCategory = typeof faqPageCategories[number];
