"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh w-full bg-background overflow-hidden flex items-center justify-center py-24 md:py-28"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/redBackground.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img
            src="/KAOSmedialogoFinal.png"
            alt="KAOS Media Logo"
            className="mx-auto w-[12vw] max-w-50 min-w-15 h-auto"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white leading-[0.95]"
        >
          KREATIVITÄT
          <br />
          TRIFFT <span className="text-accent">STRUKTUR</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
        >
          Deine kreative Agentur für digitales Marketing aus Heidelberg
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#contact">Projekt starten</Button>
          <Button href="#services" variant="outline">
            Unsere Leistungen
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="relative w-px h-12 bg-white/10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-accent"
            animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
