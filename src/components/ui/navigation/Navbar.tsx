'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Leistungen', href: '/pages/leistungen' },
  { label: 'Preise', href: '/pages/preise' },
  { label: 'Über uns', href: '/pages/about' },
  { label: 'Blog', href: '/pages/blog' },
  { label: 'Kontakt', href: '/pages/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Image src="/KAOS.png" alt="KAOS Media Logo" width={40} height={40} className="rounded-sm" />
          <span className="text-xl font-extrabold tracking-tight text-white">
            KAOS <span className="text-accent">MEDIA</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm text-text-secondary hover:text-white transition-colors duration-300 py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none"
          aria-label="Menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white mt-[5px] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white mt-[5px] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
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
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
