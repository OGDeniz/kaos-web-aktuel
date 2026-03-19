'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type ConsentState = {
  statistics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = 'kaos_cookie_consent';

const categories = [
  {
    id: 'necessary',
    name: 'Notwendig',
    locked: true,
    description:
      'Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website. Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren.',
    providers: ['Webserver (netcup)', 'Next.js'],
    examples: 'Session-ID, CSRF-Token',
    retention: 'Session / max. 1 Jahr',
    legalBasis: 'Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)',
  },
  {
    id: 'statistics',
    name: 'Statistiken & Analyse',
    locked: false,
    description:
      'Statistik-Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. Die Informationen werden anonymisiert gesammelt und helfen uns, die Performance und Nutzererfahrung kontinuierlich zu verbessern. Deine IP-Adresse wird dabei anonymisiert.',
    providers: ['Google Analytics 4 (via Google Tag Manager)'],
    examples: '_ga, _gid, _ga_*',
    retention: 'Bis zu 2 Jahre',
    legalBasis: 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)',
  },
  {
    id: 'marketing',
    name: 'Marketing & Werbung',
    locked: false,
    description:
      'Marketing-Cookies ermöglichen es uns, dir relevante Werbeanzeigen auf anderen Plattformen auszuspielen und die Wirksamkeit unserer Kampagnen zu messen. Diese Cookies können dein Surf-Verhalten über verschiedene Websites hinweg verfolgen.',
    providers: ['Google Ads', 'Google Tag Manager'],
    examples: '_gcl_au, IDE, DSID',
    retention: 'Bis zu 2 Jahre',
    legalBasis: 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)',
  },
];

function updateGTMConsent(state: ConsentState) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      analytics_storage: state.statistics ? 'granted' : 'denied',
      ad_storage: state.marketing ? 'granted' : 'denied',
      ad_user_data: state.marketing ? 'granted' : 'denied',
      ad_personalization: state.marketing ? 'granted' : 'denied',
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [consent, setConsent] = useState<ConsentState>({
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      setTimeout(() => setVisible(true), 800);
    } else {
      try {
        const parsed: ConsentState = JSON.parse(saved);
        updateGTMConsent(parsed);
      } catch {
        setVisible(true);
      }
    }

    const handler = () => {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (saved) {
        try {
          const parsed: ConsentState = JSON.parse(saved);
          setConsent(parsed);
        } catch { /* empty */ }
      }
      setVisible(true);
      setShowSettings(true);
    };
    window.addEventListener('kaos:openCookieSettings', handler);
    return () => window.removeEventListener('kaos:openCookieSettings', handler);
  }, []);

  function saveConsent(state: ConsentState) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
    updateGTMConsent(state);
    setVisible(false);
    setShowSettings(false);
  }

  function acceptAll() {
    saveConsent({ statistics: true, marketing: true });
  }

  function rejectAll() {
    saveConsent({ statistics: false, marketing: false });
  }

  function saveSelection() {
    saveConsent(consent);
  }

  function toggleCategory(id: string) {
    if (id === 'necessary') return;
    setConsent((prev) => ({
      ...prev,
      [id]: !prev[id as keyof ConsentState],
    }));
  }

  if (!visible) return null;

  return (
    <AnimatePresence>
      {showSettings && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            onClick={() => setShowSettings(false)}
          />

          {/* Settings Modal */}
          <motion.div
            key="settings-modal"
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-surface border border-border rounded-2xl z-[9999] flex flex-col overflow-hidden"
            style={{ maxHeight: '90vh' }}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-border shrink-0">
              <div>
                <h2 className="text-xl font-bold text-text-primary">Cookie-Einstellungen</h2>
                <p className="text-text-secondary text-sm mt-1">
                  Verwalte deine Datenschutzpräferenzen
                </p>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                aria-label="Schließen"
                className="text-text-muted hover:text-text-primary transition-colors p-1.5 hover:bg-white/10 rounded-lg ml-4 shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 space-y-5">
              <p className="text-text-secondary text-sm leading-relaxed">
                Wir nutzen Cookies und ähnliche Technologien auf unserer Website. Einige sind technisch
                notwendig, während andere uns helfen, unser Angebot zu verbessern. Du kannst selbst
                entscheiden, welche Kategorien du zulassen möchtest. Bitte beachte, dass auf Basis
                deiner Einstellungen möglicherweise nicht alle Funktionen der Website zur Verfügung stehen.
                Weitere Informationen findest du in unserer{' '}
                <Link href="/datenschutz" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Datenschutzerklärung
                </Link>.
              </p>

              {/* Category Cards */}
              <div className="space-y-3">
                {categories.map((cat) => {
                  const isActive = cat.locked || consent[cat.id as keyof ConsentState];
                  const isExpanded = expandedCategory === cat.id;

                  return (
                    <div key={cat.id} className="border border-border rounded-xl overflow-hidden">
                      {/* Category Header */}
                      <div className="flex items-center gap-4 p-4">
                        {/* Expand Button */}
                        <button
                          onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                          className="flex items-center gap-2 flex-1 text-left group"
                          aria-expanded={isExpanded}
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-text-muted group-hover:text-text-secondary transition-colors shrink-0"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </motion.div>
                          <span className="font-semibold text-text-primary text-sm">{cat.name}</span>
                          {cat.locked && (
                            <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-medium">
                              Immer aktiv
                            </span>
                          )}
                        </button>

                        {/* Toggle Switch */}
                        {cat.locked ? (
                          <div className="w-10 h-5 bg-accent rounded-full flex items-center justify-end pr-0.5 shrink-0">
                            <div className="w-4 h-4 bg-white rounded-full shadow" />
                          </div>
                        ) : (
                          <button
                            role="switch"
                            aria-checked={consent[cat.id as keyof ConsentState]}
                            aria-label={`${cat.name} ${consent[cat.id as keyof ConsentState] ? 'deaktivieren' : 'aktivieren'}`}
                            onClick={() => toggleCategory(cat.id)}
                            className={`relative w-10 h-5 rounded-full transition-colors duration-200 shrink-0 ${
                              consent[cat.id as keyof ConsentState] ? 'bg-accent' : 'bg-surface-light'
                            }`}
                          >
                            <motion.div
                              layout
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow ${
                                consent[cat.id as keyof ConsentState] ? 'left-[calc(100%-18px)]' : 'left-0.5'
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Expanded Details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 border-t border-border/50 pt-3 space-y-3">
                              <p className="text-text-secondary text-sm leading-relaxed">
                                {cat.description}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div className="bg-background rounded-lg p-3">
                                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">Anbieter</p>
                                  <p className="text-text-secondary text-xs">{cat.providers.join(', ')}</p>
                                </div>
                                <div className="bg-background rounded-lg p-3">
                                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">Cookie-Namen</p>
                                  <p className="text-text-secondary text-xs font-mono">{cat.examples}</p>
                                </div>
                                <div className="bg-background rounded-lg p-3">
                                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">Speicherdauer</p>
                                  <p className="text-text-secondary text-xs">{cat.retention}</p>
                                </div>
                                <div className="bg-background rounded-lg p-3">
                                  <p className="text-text-muted text-xs font-medium uppercase tracking-wider mb-1">Rechtsgrundlage</p>
                                  <p className="text-text-secondary text-xs">{cat.legalBasis}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <p className="text-text-muted text-xs leading-relaxed">
                Du kannst deine Einwilligung jederzeit über den Link &quot;Cookie-Einstellungen&quot; im Footer
                dieser Website widerrufen. Eine Übersicht aller eingesetzten Cookies und weiterer
                Informationen findest du in unserer{' '}
                <Link href="/datenschutz" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Datenschutzerklärung
                </Link>{' '}
                sowie unserem{' '}
                <Link href="/impressum" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                  Impressum
                </Link>.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-border shrink-0 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={rejectAll}
                className="flex-1 py-2.5 px-4 rounded-lg border border-border text-text-secondary hover:border-border hover:text-text-primary hover:bg-white/5 transition-all text-sm font-medium"
              >
                Alle ablehnen
              </button>
              <button
                onClick={saveSelection}
                className="flex-1 py-2.5 px-4 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-all text-sm font-semibold"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 py-2.5 px-4 rounded-lg bg-accent hover:bg-accent-hover text-white transition-colors text-sm font-bold"
              >
                Alle akzeptieren
              </button>
            </div>
          </motion.div>
        </>
      )}

      {/* Bottom Banner */}
      {!showSettings && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="fixed bottom-0 left-0 right-0 z-[9990] bg-surface/95 backdrop-blur-md border-t border-border"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-text-primary text-sm leading-snug">
                  Wir nutzen Cookies
                </p>
                <p className="text-text-secondary text-xs leading-relaxed mt-0.5">
                  Um dir die bestmögliche Erfahrung zu bieten, setzen wir Cookies ein — u. a. für Analyse
                  und Marketing. Du entscheidest, was du zulässt.{' '}
                  <Link href="/datenschutz" className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="px-3.5 py-2 text-xs font-medium border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/5 transition-all"
              >
                Einstellungen
              </button>
              <button
                onClick={rejectAll}
                className="px-3.5 py-2 text-xs font-medium border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/5 transition-all"
              >
                Nur notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs font-bold bg-accent hover:bg-accent-hover rounded-lg text-white transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
