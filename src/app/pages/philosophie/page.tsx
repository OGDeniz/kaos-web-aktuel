"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";

const values = ["KREATIV", "ANALYTISCH", "ORIGINELL", "STRUKTURIERT"];

export default function PhilosophiePage() {
  return (
    <Layout>
      <section className="px-6 md:px-12 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto max-w-4xl space-y-28">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Philosophie</span>
              <div className="w-12 h-[3px] bg-accent rounded-full" />
            </div>
            <h1 className="text-white">
              Perfektion entsteht<br />nur mit <span className="text-accent">KAOS</span>
            </h1>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Wir sind KAOS Media – die Agentur, bei der alles zusammenpasst: Webdesign, SEO, SEA,
              Social Media & AI-Marketing, Branding und Positionierung – aus einer Hand.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-lg mx-auto"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/philosophy/perfekt.png"
                alt="KAOS Philosophie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6 text-text-secondary leading-relaxed text-center"
          >
            <p>
              Wir unterstützen vor allem KMU, Gründer und Startups mit digitalen Lösungen auf höchstem Niveau.
              Durch die Anwendung modernster Technik und AI-Marketing verschaffen wir Ihnen die Vorteile und
              Positionen, die Sie brauchen.
            </p>
            <p>
              Wir sind keine Uni-Absolventen mit Buzzwords, sondern die &ldquo;alte Garde&rdquo; mit echter
              Unternehmererfahrung. Beide über 40, beide selbst schon durch die Höhen und Tiefen der
              Selbstständigkeit gegangen.
            </p>
            <p>
              Bei uns gibt es kein Marketing von der Stange, sondern ehrliche Arbeit mit Empathie,
              Leidenschaft, Erfahrung und Know-how.
            </p>
            <p>
              So perfekt wie unsere Leistung, so perfekt sind unsere Preise. Nicht, weil wir es nicht
              draufhaben, sondern weil wir bei KMU wirklich etwas bewirken wollen.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface border border-border rounded-xl py-5 px-6 text-center"
              >
                <span className="text-accent font-bold tracking-widest text-sm">{v}</span>
              </motion.div>
            ))}
          </div>

          {/* Outro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center rounded-2xl bg-accent/10 border border-accent/20 py-10 px-8 max-w-2xl mx-auto"
          >
            <p className="text-xl font-semibold text-white">
              Weil Perfektion nicht vom Band kommt.
            </p>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <Button href="/pages/contact">Get your KAOS</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
