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
    <div className="text-text-secondary text-sm leading-relaxed pl-5 space-y-2">{children}</div>
  </motion.div>
);

export default function DatenschutzPage() {
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
            <h2 className="text-white">Datenschutzerklärung</h2>
            <p className="mt-4 text-text-muted text-sm">Stand: Februar 2026</p>
          </motion.div>

          {/* 1. Verantwortlicher */}
          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und sonstiger
              nationaler Datenschutzgesetze sowie anderer datenschutzrechtlicher Bestimmungen ist:
            </p>
            <div className="mt-2 rounded-lg bg-surface border border-border p-4 text-text-secondary space-y-0.5">
              <p className="font-semibold text-white">KAOS Media</p>
              {/* TODO: Adresse eintragen */}
              <p>[Straße und Hausnummer]</p>
              <p>[PLZ] Heidelberg, Deutschland</p>
              <p>E-Mail: <a href="mailto:info@kaos.media" className="text-accent hover:text-accent-hover transition-colors">info@kaos.media</a></p>
            </div>
          </Section>

          {/* 2. Allgemeines zur Datenverarbeitung */}
          <Section title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
              Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, E-Mail-Adresse) erhoben werden,
              erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
              per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
              Zugriff durch Dritte ist nicht möglich.
            </p>
          </Section>

          {/* 3. Hosting */}
          <Section title="3. Hosting">
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen
              Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
              Website generiert werden, handeln.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
              und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Unser Hoster wird deine Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
              Leistungspflichten erforderlich ist, und unsere Weisungen in Bezug auf diese Daten befolgen.
              Mit dem Hoster wurde ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
            </p>
          </Section>

          {/* 4. Server-Log-Dateien */}
          <Section title="4. Server-Log-Dateien">
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die dein Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>
          </Section>

          {/* 5. SSL/TLS-Verschlüsselung */}
          <Section title="5. SSL/TLS-Verschlüsselung">
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte, wie zum Beispiel Anfragen, die du an uns als Seitenbetreiber sendest, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass
              die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
              Schloss-Symbol in deiner Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die du an uns
              übermittelst, nicht von Dritten mitgelesen werden.
            </p>
          </Section>

          {/* 6. Kontaktformular & E-Mail-Kontakt */}
          <Section title="6. Kontaktformular & E-Mail-Kontakt">
            <p>
              Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt, werden deine Angaben
              aus dem Anfrageformular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
              nicht ohne deine Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
              Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf deiner Einwilligung (Art. 6 Abs. 1 lit. a
              DSGVO), sofern diese abgefragt wurde.
            </p>
            <p>
              Die von dir im Kontaktformular eingegebenen Daten verbleiben bei uns, bis du uns zur Löschung
              aufforderst, deine Einwilligung zur Speicherung widerrufst oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung deiner Anfrage).
              Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </Section>

          {/* 7. Cookies */}
          <Section title="7. Cookies">
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb
              der Website erforderlich sind. Diese Cookies ermöglichen grundlegende Funktionen wie
              Seitensicherheit und Netzwerkverwaltung.
            </p>
            <p>
              Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
              Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Eine Einwilligung
              ist für diese Cookies nicht erforderlich.
            </p>
            <p>
              Wir setzen keine Tracking-, Analyse- oder Marketing-Cookies ein und geben keine Daten
              an Dritte zu Werbezwecken weiter.
            </p>
          </Section>

          {/* 8. Rechte der betroffenen Person */}
          <Section title="8. Deine Rechte als betroffene Person">
            <p>Du hast gegenüber uns folgende Rechte hinsichtlich der dich betreffenden personenbezogenen Daten:</p>
            <div className="space-y-3 mt-2">
              {[
                {
                  title: 'Recht auf Auskunft (Art. 15 DSGVO)',
                  text: 'Du hast das Recht, eine Bestätigung darüber zu verlangen, ob personenbezogene Daten, die dich betreffen, von uns verarbeitet werden.',
                },
                {
                  title: 'Recht auf Berichtigung (Art. 16 DSGVO)',
                  text: 'Du hast das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten zu verlangen.',
                },
                {
                  title: 'Recht auf Löschung (Art. 17 DSGVO)',
                  text: 'Du hast das Recht, die Löschung deiner personenbezogenen Daten zu verlangen, sofern die gesetzlichen Voraussetzungen hierfür erfüllt sind.',
                },
                {
                  title: 'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                  text: 'Du hast das Recht, die Einschränkung der Verarbeitung deiner personenbezogenen Daten zu verlangen.',
                },
                {
                  title: 'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                  text: 'Du hast das Recht, deine personenbezogenen Daten, die du uns bereitgestellt hast, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.',
                },
                {
                  title: 'Widerspruchsrecht (Art. 21 DSGVO)',
                  text: 'Du hast das Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit gegen die Verarbeitung der dich betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO erfolgt, Widerspruch einzulegen.',
                },
                {
                  title: 'Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)',
                  text: 'Sofern die Verarbeitung deiner Daten auf einer Einwilligung beruht, hast du das Recht, diese jederzeit mit Wirkung für die Zukunft zu widerrufen. Die bis zum Widerruf erfolgte Verarbeitung bleibt rechtmäßig.',
                },
              ].map(({ title, text }) => (
                <div key={title} className="rounded-lg bg-surface border border-border p-4">
                  <p className="font-semibold text-white text-xs mb-1">{title}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 9. Beschwerderecht bei der Aufsichtsbehörde */}
          <Section title="9. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
              steht dir das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn du der Ansicht
              bist, dass die Verarbeitung der dich betreffenden personenbezogenen Daten gegen die
              DSGVO verstößt (Art. 77 DSGVO).
            </p>
            <p>
              Die zuständige Aufsichtsbehörde für Baden-Württemberg ist:
            </p>
            <div className="rounded-lg bg-surface border border-border p-4 text-text-secondary space-y-0.5 text-xs">
              <p className="font-semibold text-white text-sm">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</p>
              <p>Lautenschlagerstraße 20</p>
              <p>70173 Stuttgart</p>
              <p>Telefon: +49 711 615541-0</p>
              <p>E-Mail: <a href="mailto:poststelle@lfdi.bwl.de" className="text-accent hover:text-accent-hover transition-colors">poststelle@lfdi.bwl.de</a></p>
              <p>Website: <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors">www.baden-wuerttemberg.datenschutz.de</a></p>
            </div>
          </Section>

          {/* 10. Änderungen */}
          <Section title="10. Aktualität und Änderung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung hat den Stand Februar 2026. Wir behalten uns vor, diese
              Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
              entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
              z. B. bei der Einführung neuer Services.
            </p>
            <p>
              Für deinen erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </Section>

          {/* Kontakt für Datenschutzanfragen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-surface border border-accent/20 p-6 space-y-2"
          >
            <h3 className="text-white font-bold text-base">Fragen zum Datenschutz?</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung deiner personenbezogenen Daten,
              bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wende dich bitte an:
            </p>
            <a
              href="mailto:info@kaos.media"
              className="inline-block text-accent hover:text-accent-hover transition-colors text-sm font-semibold"
            >
              info@kaos.media
            </a>
          </motion.div>

          {/* Hinweis-Box */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-xl bg-surface border border-border p-6 text-xs text-text-muted"
          >
            <p>
              <span className="text-accent font-semibold">Hinweis:</span> Angaben in eckigen Klammern
              im Impressum und auf dieser Seite müssen noch durch die korrekten Daten ersetzt werden
              (Nachname, Adresse). Vor Veröffentlichung der Website empfiehlt sich eine rechtliche
              Prüfung durch einen Fachanwalt für IT-Recht.
            </p>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
