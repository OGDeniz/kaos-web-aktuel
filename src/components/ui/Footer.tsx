'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
/* eslint-disable @next/next/no-img-element */

const footerNav = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/pages/leistungen' },
  { label: 'Preise', href: '/pages/preise' },
  { label: 'Über uns', href: '/pages/about' },
  { label: 'Portfolio', href: '/pages/portfolio' },
  { label: 'Kontakt', href: '/pages/contact' },
];

const services = [
  'Branding & Positionierung',
  'Webdesign & Development',
  'Content & Social Media',
  'Performance & Automation',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
        src="/backgrounds/12882-242487537_medium.mp4"
      />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/kaosLogo.jpeg" alt="KAOS Media Logo" width={36} height={36} style={{ borderRadius: '2px' }} />
              <span className={styles.logoText}>
                KAOS <span className={styles.logoAccent}>MEDIA</span>
              </span>
            </Link>
            <p className={styles.brandDesc}>
              Deine kreative Agentur für digitales Marketing! Strategie. Klarheit. Wirkung.
            </p>
          </div>

          <div>
            <h4 className={styles.colHeading}>Navigation</h4>
            <ul className={styles.list}>
              {footerNav.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colHeading}>Services</h4>
            <ul className={styles.list}>
              {services.map(s => (
                <li key={s} className={styles.serviceItem}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colHeading}>Kontakt</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>info@kaosmedia.de</li>
              <li className={styles.contactItem}>Aichach, Deutschland</li>
              <li className={styles.contactItem}>Heidelberg, Deutschland</li>
              <li className={styles.contactItem}>Barcelona, Spanien</li>
            </ul>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <img src="/icons/insta.svg" alt="Instagram" width={20} height={20} className={styles.socialIcon} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <img src="/icons/lk.svg" alt="LinkedIn" width={20} height={20} className={styles.socialIcon} />
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <img src="/icons/fb.svg" alt="Facebook" width={20} height={20} className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} KAOS Media. Alle Rechte vorbehalten.</p>
          <nav className={styles.bottomNav}>
            <Link href="/impressum" className={styles.bottomNavLink}>Impressum</Link>
            <Link href="/datenschutz" className={styles.bottomNavLink}>Datenschutz</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
