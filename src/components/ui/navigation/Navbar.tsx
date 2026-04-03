'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import styles from './Navbar.module.css';

type NavLink =
  | { label: string; href: string; highlight?: boolean; children?: never }
  | { label: string; href?: never; highlight?: never; children: { label: string; href: string }[] };

const navLinks: NavLink[] = [
  { label: 'Leistungen', href: '/pages/leistungen' },
  { label: 'Preise', href: '/pages/preise' },
  { label: 'Förderung', href: '/pages/foerderung', highlight: true },
  {
    label: 'Story',
    children: [
      { label: 'Über uns', href: '/pages/about' },
      { label: 'Philosophie', href: '/pages/philosophie' },
    ],
  },
  { label: 'Portfolio', href: '/pages/portfolio' },
  { label: 'Kontakt', href: '/pages/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [mobileStoryOpen, setMobileStoryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isStoryActive = pathname.startsWith('/pages/about') || pathname.startsWith('/pages/philosophie');

  return (
    <>
      <header className={[styles.header, scrolled ? styles.headerScrolled : ''].filter(Boolean).join(' ')}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/logo/K_logo.svg" alt="KAOS Media Logo" width={40} height={40} style={{ flexShrink: 0, width: 40, height: 40 }} />
            <span className={styles.logoText}>
              KAOS <span className={styles.logoAccent}>MEDIA</span>
            </span>
          </Link>

          <ul className={styles.desktopMenu}>
            {navLinks.map(link => {
              if (link.children) {
                return (
                  <li key={link.label} className={styles.dropdownWrapper} onMouseEnter={() => setStoryOpen(true)} onMouseLeave={() => setStoryOpen(false)}>
                    <button
                      className={[styles.navLink, styles.dropdownTrigger, isStoryActive ? styles.navLinkActive : ''].filter(Boolean).join(' ')}
                      aria-expanded={storyOpen}
                    >
                      {link.label}
                      <span className={[styles.navUnderline, isStoryActive ? styles.navUnderlineActive : ''].filter(Boolean).join(' ')} />
                    </button>
                    <AnimatePresence>
                      {storyOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                          className={styles.dropdown}
                        >
                          {link.children.map(child => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={[styles.dropdownLink, pathname.startsWith(child.href) ? styles.dropdownLinkActive : ''].filter(Boolean).join(' ')}
                                onClick={() => setStoryOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              const isActive = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  {link.highlight ? (
                    <Link
                      href={link.href}
                      className={[styles.highlightLink, isActive ? styles.highlightLinkActive : ''].filter(Boolean).join(' ')}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className={[styles.navLink, isActive ? styles.navLinkActive : ''].filter(Boolean).join(' ')}
                    >
                      {link.label}
                      <span className={[styles.navUnderline, isActive ? styles.navUnderlineActive : ''].filter(Boolean).join(' ')} />
                    </Link>
                  )}
                </li>
              );
            })}
            <li>
              <Button href="/pages/contact" className={styles.ctaBtn}>
                Get your KAOS
              </Button>
            </li>
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={styles.hamburger}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={[styles.hamburgerLine, styles.hamburgerLineTop, mobileOpen ? styles.open : ''].filter(Boolean).join(' ')} />
            <span className={[styles.hamburgerLine, styles.hamburgerLineMid, mobileOpen ? styles.open : ''].filter(Boolean).join(' ')} />
            <span className={[styles.hamburgerLine, styles.hamburgerLineBot, mobileOpen ? styles.open : ''].filter(Boolean).join(' ')} />
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.mobileMenu}
            >
              <ul className={styles.mobileList}>
                {navLinks.map(link => {
                  if (link.children) {
                    return (
                      <li key={link.label} className={styles.mobileDropdownItem}>
                        <button
                          className={[styles.mobileLink, styles.mobileDropdownTrigger, isStoryActive ? styles.mobileLinkActive : ''].filter(Boolean).join(' ')}
                          onClick={() => setMobileStoryOpen(prev => !prev)}
                        >
                          {isStoryActive && <span className={styles.activeDot} />}
                          {link.label}
                        </button>
                        <AnimatePresence>
                          {mobileStoryOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className={styles.mobileSubList}
                            >
                              {link.children.map(child => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={[styles.mobileSubLink, pathname.startsWith(child.href) ? styles.mobileLinkActive : ''].filter(Boolean).join(' ')}
                                  >
                                    {pathname.startsWith(child.href) && <span className={styles.activeDot} />}
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  const isActive = pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={[styles.mobileLink, isActive ? styles.mobileLinkActive : ''].filter(Boolean).join(' ')}
                      >
                        {isActive && <span className={styles.activeDot} />}
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.mobileCta}>
                <Button href="/pages/contact" onClick={() => setMobileOpen(false)}>
                  Get your KAOS
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
