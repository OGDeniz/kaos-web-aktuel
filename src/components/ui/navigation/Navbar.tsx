'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Leistungen', href: '/pages/leistungen' },
  { label: 'Preise', href: '/pages/preise' },
  { label: 'Förderung', href: '/pages/foerderung', highlight: true },
  { label: 'Über uns', href: '/pages/about' },
  { label: 'Portfolio', href: '/pages/portfolio' },
  { label: 'Kontakt', href: '/pages/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo/K_logo.svg" alt="KAOS Media Logo" width={40} height={40} />
          <span className="text-xl font-extrabold tracking-tight text-white">
            KAOS <span className="text-accent">MEDIA</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-5 xl:gap-8">
          {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                {link.highlight ? (
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold border px-3 py-1 rounded-full transition-colors duration-300 ${
                      isActive
                        ? 'bg-accent text-white border-accent'
                        : 'text-accent border-accent/30 hover:bg-accent hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative text-sm transition-colors duration-300 pb-1 group ${
                      isActive ? 'text-white' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white mt-1.25 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white mt-1.25 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.75' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="flex flex-col items-center gap-6 py-10">
              {navLinks.map(link => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg transition-colors flex items-center gap-2 ${
                        isActive ? 'text-white font-semibold' : 'text-text-secondary hover:text-white'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
