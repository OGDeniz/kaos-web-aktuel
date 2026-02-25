'use client';
import { motion } from 'framer-motion';
import Layout from '@/layouts/Layout';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-3"
  >
    <h3 className="text-white text-lg font-bold border-l-4 border-accent pl-4">{title}</h3>
    <div className="text-text-secondary text-sm leading-relaxed pl-5 space-y-1">{children}</div>
  </motion.div>
);

export default function ImpressumPage() {
  return (
    <Layout>
      <section className="px-6 md:px-12 py-28 md:py-36">
        <div className="mx-auto max-w-3xl space-y-14">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-0.5 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Rechtliches</span>
            </div>
            <h2 className="text-white">Impressum</h2>
          </motion.div>

          {/* Angaben gemäß § 5 TMG */}
          <Section title="Angaben gemäß § 5 TMG">
            <p className="font-semibold text-white">KAOS Media UG</p>
            {/* TODO: Echte Adresse eintragen */}
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ] Heidelberg</p>
            <p>Deutschland</p>
          </Section>

          {/* Vertreten durch */}
          <Section title="Vertreten durch">
            {/* TODO: Vollständige Namen eintragen */}
            <p>Florian Kos</p>
            <p>Deniz Yavuzkaya</p>
            <p>Anna Katharina Dhillon</p>
          </Section>

          {/* Kontakt */}
          <Section title="Kontakt">
            {/* TODO: Telefonnummer eintragen falls vorhanden */}
            {/* <p>Telefon: +49 [NUMMER]</p> */}
            <p>E-Mail: <a href="mailto:info@kaos.media" className="text-accent hover:text-accent-hover transition-colors">info@kaos.media</a></p>
          </Section>

          {/* Umsatzsteuer-ID */}
          <Section title="Umsatzsteuer-Identifikationsnummer">
            {/* TODO: USt-IdNr eintragen, sobald vorhanden – oder Abschnitt entfernen falls keine Umsatzsteuerpflicht */}
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p className="font-mono text-white">[DE-XXXXXXXXX]</p>
          </Section>

          {/* Verantwortlich für den Inhalt */}
          <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            {/* TODO: Verantwortliche Person eintragen */}
            <p>Florian [Nachname] &amp; Deniz [Nachname]</p>
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ] Heidelberg</p>
          </Section>

          {/* Streitschlichtung */}
          <Section title="Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          {/* Haftung für Inhalte */}
          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </Section>

          {/* Haftung für Links */}
          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
            <p className="mt-2">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Section>

          {/* Urheberrecht */}
          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="mt-2">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </Section>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-xl bg-surface border border-border p-6 text-xs text-text-muted"
          >
            <p>
              <span className="text-accent font-semibold">Hinweis:</span> Angaben in eckigen Klammern
              müssen noch durch die korrekten Daten ersetzt werden (Nachname, Adresse, ggf. USt-IdNr.).
            </p>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
