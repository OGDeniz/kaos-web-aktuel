"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";

const principles = [
  {
    title: "MUT",
    description:
      "Wir glauben an mutige Ideen, die aufeinandertreffen, wachsen und sich entfalten dürfen. Perfektion braucht den Mut zur Unordnung.",
  },
  {
    title: "KLARHEIT",
    description:
      "Chaos ohne Struktur ist Lärm. Wir ordnen kreative Vielfalt und technische Präzision zu einem klaren, wirkungsvollen Ganzen.",
  },
  {
    title: "AUTHENTIZITÄT",
    description:
      "Wir arbeiten nicht für Zahlen oder Awards – sondern für Menschen. Mit echter Hingabe, ohne Kompromisse bei dem, was wirklich zählt.",
  },
];

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
              <div className="w-12 h-0.75 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Philosophie</span>
              <div className="w-12 h-0.75 bg-accent rounded-full" />
            </div>
            <h1 className="text-white">
              Perfektion entsteht<br />nur mit <span className="text-accent">KAOS</span>
            </h1>
            <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Bei KAOS Media ist &ldquo;Chaos&rdquo; kein Fehler, sondern ein Prinzip: Wir ordnen kreative Vielfalt,
              technische Präzision und menschliche Leidenschaft zu einem Ganzen.
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
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
              <Image
                src="/philosophy/perfekt.png"
                alt="KAOS Philosophie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
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
              Wir glauben daran, dass echte Perfektion nicht im stillen Kämmerlein entsteht – sondern dort,
              wo Ideen mutig aufeinandertreffen, wachsen und sich entfalten dürfen.
            </p>
            <p>
              Wir arbeiten nicht für Zahlen oder Awards – wir arbeiten für Menschen. Für Gründer:innen,
              für Unternehmer:innen, für Visionäre. Für alle, die mehr wollen als 08/15.
            </p>
            <p>
              Wir begleiten unsere Kunden nicht nur mit Know-how, sondern mit echter Hingabe.
              Wir glauben an nachhaltigen Erfolg – nicht an schnelle Trends.
            </p>
          </motion.div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-surface border border-border rounded-2xl p-6 text-center flex flex-col gap-3 hover:border-accent/40 transition-colors duration-300"
              >
                <span className="text-accent font-bold tracking-widest text-sm">{p.title}</span>
                <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Pull Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative text-center rounded-2xl bg-accent/10 border border-accent/20 py-14 px-8 max-w-2xl mx-auto overflow-hidden"
          >
            <div className="absolute -top-4 left-4 text-accent/10 text-[7rem] font-black leading-none select-none pointer-events-none">
              &ldquo;
            </div>
            <p className="relative text-2xl md:text-3xl font-bold text-white leading-tight">
              Am Anfang war das KAOS –<br />
              <span className="text-accent">und nur im KAOS</span><br />
              entsteht Perfektion!
            </p>
            <div className="absolute -bottom-12 right-4 text-accent/10 text-[7rem] font-black leading-none select-none pointer-events-none">
              &rdquo;
            </div>
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
