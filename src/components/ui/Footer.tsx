'use client';
import Link from 'next/link';
import Image from 'next/image';

const footerNav = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/pages/leistungen' },
  { label: 'Preise', href: '/pages/preise' },
  { label: 'Über uns', href: '/pages/about' },
  { label: 'Blog', href: '/pages/blog' },
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
    <footer className="bg-background-alt border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo & Text */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/kaosLogo.jpeg" alt="KAOS Media Logo" width={36} height={36} className="rounded-sm" />
              <span className="text-2xl font-extrabold tracking-tight text-white">
                KAOS <span className="text-accent">MEDIA</span>
              </span>
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Deine kreative Agentur für digitales Marketing aus Heidelberg. Strategie. Klarheit. Wirkung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerNav.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s} className="text-text-secondary text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-6">Kontakt</h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>info@kaos.media</li>
              <li>Heidelberg, Deutschland</li>
            </ul>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/insta.svg" alt="Instagram" width={20} height={20} className="invert" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/lk.svg" alt="LinkedIn" width={20} height={20} className="invert" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/fb.svg" alt="Facebook" width={20} height={20} className="invert" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-xs">
          <p>&copy; {new Date().getFullYear()} KAOS Media. Alle Rechte vorbehalten.</p>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
