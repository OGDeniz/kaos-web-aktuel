'use client';
import { motion } from 'framer-motion';
import Layout from '@/layouts/Layout';
import styles from './page.module.css';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={styles.sectionBlock}
  >
    <h3 className={styles.sectionTitle}>{title}</h3>
    <div className={styles.sectionBody}>{children}</div>
  </motion.div>
);

export default function DatenschutzPage() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.container}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.headerEyebrow}>
              <div className={styles.headerLine} />
              <span className={styles.headerLabel}>Rechtliches</span>
            </div>
            <h2 className={styles.headerTitle}>Datenschutzerklärung</h2>
            <p className={styles.headerMeta}>Stand: März 2026</p>
          </motion.div>

          {/* 1. Verantwortlicher */}
          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und sonstiger
              nationaler Datenschutzgesetze sowie anderer datenschutzrechtlicher Bestimmungen ist:
            </p>
            <div className={styles.infoBox}>
              <p className={styles.textWhite} style={{ fontWeight: 600 }}>KAOS Media</p>
              <p>Herbststraße 2</p>
              <p>86551 Aichach, Deutschland</p>
              <p>E-Mail: <a href="mailto:info@kaosmedia.de" className={styles.link}>info@kaosmedia.de</a></p>
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
              Diese Website wird auf einem Virtual Private Server (VPS) der netcup GmbH betrieben.
              Die Domainregistrierung erfolgt über die IONOS SE. Die personenbezogenen Daten, die auf
              dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei
              kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
              Website generiert werden, handeln.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
              und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <div className={styles.infoBox}>
              <p className={styles.textWhite} style={{ fontWeight: 600 }}>Server-Hosting: netcup GmbH</p>
              <p>Daimlerstraße 25, 76185 Karlsruhe</p>
              <p>
                Datenschutz:{' '}
                <a href="https://www.netcup.de/kontakt/datenschutzerklaerung.php" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  www.netcup.de/kontakt/datenschutzerklaerung.php
                </a>
              </p>
              <p>AVV: gemäß Art. 28 DSGVO geschlossen</p>
            </div>
            <div className={styles.infoBox} style={{ marginTop: '0.75rem' }}>
              <p className={styles.textWhite} style={{ fontWeight: 600 }}>Domain-Registrierung: IONOS SE</p>
              <p>Elgendorfer Str. 57, 56410 Montabaur</p>
              <p>
                Datenschutz:{' '}
                <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  www.ionos.de/terms-gtc/datenschutzerklaerung
                </a>
              </p>
            </div>
          </Section>

          {/* 4. Server-Log-Dateien */}
          <Section title="4. Server-Log-Dateien">
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die dein Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className={styles.list}>
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
            <p className={styles.textWhite} style={{ fontWeight: 600, marginTop: '0.5rem' }}>Einsatz von EmailJS</p>
            <p>
              Zur technischen Übermittlung der über das Kontaktformular gesendeten Nachrichten nutzen
              wir den Dienst <strong className={styles.textWhite}>EmailJS</strong> (Anbieter: EmailJS Ltd.,
              United Kingdom). Wenn du das Kontaktformular absendest, werden deine eingegebenen Daten
              (Name, E-Mail-Adresse, ggf. Telefonnummer, Betreff und Nachricht) über die Server von
              EmailJS an unsere E-Mail-Adresse weitergeleitet.
            </p>
            <p>
              EmailJS verarbeitet diese Daten ausschließlich zur Weiterleitung der Nachricht und speichert
              sie nicht dauerhaft. Rechtsgrundlage für die Übermittlung ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              funktionierenden Kontaktmöglichkeit).
            </p>
            <p>
              Weitere Informationen zum Datenschutz bei EmailJS findest du unter:{' '}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                www.emailjs.com/legal/privacy-policy
              </a>
            </p>
          </Section>

          {/* 7. Cookies & Einwilligungsmanagement */}
          <Section title="7. Cookies & Einwilligungsmanagement">
            <p>
              Unsere Website verwendet Cookies und ähnliche Technologien. Beim ersten Besuch wird dir
              ein Cookie-Hinweisbanner angezeigt, über den du deine Einwilligungen verwalten kannst.
              Deine Auswahl wird in deinem Browser gespeichert und kann jederzeit über den Link
              „Cookie-Einstellungen" im Footer dieser Website widerrufen oder geändert werden.
            </p>
            <p className={styles.textWhite} style={{ fontWeight: 600, marginTop: '1rem' }}>Kategorie 1: Notwendige Cookies</p>
            <p>
              Diese Cookies sind für den Betrieb der Website technisch erforderlich und können nicht
              deaktiviert werden. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und
              Sicherheit. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              Speicherdauer: Session bis max. 1 Jahr.
            </p>
            <p className={styles.textWhite} style={{ fontWeight: 600, marginTop: '1rem' }}>Kategorie 2: Statistik & Analyse (nur mit Einwilligung)</p>
            <p>
              Mit deiner Einwilligung setzen wir Google Analytics 4 ein, um das Nutzerverhalten auf
              unserer Website anonymisiert zu analysieren und unser Angebot zu verbessern. Die dabei
              erhobenen Daten werden an Server von Google LLC in den USA übertragen. Google Analytics
              ist mit dem Consent Mode v2 konfiguriert — Daten werden nur bei erteilter Einwilligung
              erfasst. Die IP-Adresse wird vor der Übertragung anonymisiert. Rechtsgrundlage:
              Art. 6 Abs. 1 lit. a DSGVO. Speicherdauer: bis zu 2 Jahre.
            </p>
            <p className={styles.textWhite} style={{ fontWeight: 600, marginTop: '1rem' }}>Kategorie 3: Marketing & Werbung (nur mit Einwilligung)</p>
            <p>
              Mit deiner Einwilligung können Marketing-Cookies eingesetzt werden, um personalisierte
              Werbung auszuspielen und die Wirksamkeit von Kampagnen zu messen. Rechtsgrundlage:
              Art. 6 Abs. 1 lit. a DSGVO. Speicherdauer: bis zu 2 Jahre.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem du
              die Cookie-Einstellungen über den entsprechenden Link im Footer dieser Website öffnest
              und deine Auswahl anpasst (Art. 7 Abs. 3 DSGVO).
            </p>
          </Section>

          {/* 8. Google Analytics 4 & Google Tag Manager */}
          <Section title="8. Google Analytics 4 & Google Tag Manager">
            <p>
              Diese Website nutzt Google Analytics 4 (GA4), einen Webanalysedienst der Google LLC,
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, sowie Google Tag Manager zur
              Verwaltung von Tracking-Tags. Beide Dienste werden nur aktiviert, wenn du in die
              Kategorie „Statistiken & Analyse" eingewilligt hast (Consent Mode v2).
            </p>
            <p>
              GA4 erfasst u. a. Seitenaufrufe, Verweildauer, Absprungraten und genutzte Geräte.
              Die IP-Adresse wird vor der Übertragung anonymisiert (IP-Anonymisierung ist in GA4
              standardmäßig aktiviert). Die erhobenen Daten werden auf Servern von Google in den USA
              gespeichert. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert,
              sodass ein angemessenes Datenschutzniveau gewährleistet ist.
            </p>
            <p>
              Mit Google wurde ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen.
              Die Datenspeicherung in GA4 ist auf 14 Monate begrenzt.
            </p>
            <p>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst deine Einwilligung
              jederzeit über die Cookie-Einstellungen im Footer widerrufen. Alternativ kannst du die
              Erfassung durch Google Analytics mit dem Browser-Add-on unter{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={styles.link}>
                tools.google.com/dlpage/gaoptout
              </a>{' '}
              deaktivieren.
            </p>
            <p>
              Weitere Informationen zum Datenschutz bei Google findest du unter:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={styles.link}>
                policies.google.com/privacy
              </a>
            </p>
          </Section>

          {/* 9. Rechte der betroffenen Person */}
          <Section title="9. Deine Rechte als betroffene Person">
            <p>Du hast gegenüber uns folgende Rechte hinsichtlich der dich betreffenden personenbezogenen Daten:</p>
            <div className={styles.rightsGrid}>
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
                <div key={title} className={styles.rightCard}>
                  <p className={styles.rightCardTitle}>{title}</p>
                  <p className={styles.rightCardText}>{text}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 10. Beschwerderecht bei der Aufsichtsbehörde */}
          <Section title="10. Beschwerderecht bei der Aufsichtsbehörde">
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
              steht dir das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn du der Ansicht
              bist, dass die Verarbeitung der dich betreffenden personenbezogenen Daten gegen die
              DSGVO verstößt (Art. 77 DSGVO).
            </p>
            <p>
              Die zuständige Aufsichtsbehörde für Bayern ist:
            </p>
            <div className={`${styles.infoBox} ${styles.textXs}`}>
              <p className={`${styles.textWhite} ${styles.textSm}`} style={{ fontWeight: 600 }}>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
              <p>Promenade 27</p>
              <p>91522 Ansbach</p>
              <p>Telefon: +49 981 53-1300</p>
              <p>E-Mail: <a href="mailto:poststelle@lda.bayern.de" className={styles.link}>poststelle@lda.bayern.de</a></p>
              <p>Website: <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className={styles.link}>www.lda.bayern.de</a></p>
            </div>
          </Section>

          {/* 11. Änderungen */}
          <Section title="11. Aktualität und Änderung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung hat den Stand März 2026. Wir behalten uns vor, diese
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
            className={styles.contactBox}
          >
            <h3 className={styles.contactBoxTitle}>Fragen zum Datenschutz?</h3>
            <p className={styles.contactBoxText}>
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung deiner personenbezogenen Daten,
              bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wende dich bitte an:
            </p>
            <a
              href="mailto:info@kaosmedia.de"
              className={styles.contactBoxLink}
            >
              info@kaosmedia.de
            </a>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
}
