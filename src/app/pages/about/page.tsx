"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";

const values = ["MUT", "KLARHEIT", "AUTHENTIZITÄT"];

export default function AboutPage() {
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
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Über uns</span>
              <div className="w-12 h-0.75 bg-accent rounded-full" />
            </div>
            <h1 className="text-white">Die Macher von<br /><span className="border-b-4 border-white pb-1">KAOS <span className="text-accent">Media</span></span></h1>
          </motion.div>

          {/* Team */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mx-auto">
                <Image src="/aboutus/flo1.png" alt="Florian" fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-white font-bold text-lg">Florian</h3>
              <p className="text-text-secondary text-sm">Co-Founder & Strategie</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/KAOSmedia.svg" alt="KAOS Media Logo" className="w-28 h-28 object-contain invert" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mx-auto">
                <Image src="/aboutus/deniz1.jpg" alt="Deniz" fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-white font-bold text-lg">Deniz</h3>
              <p className="text-text-secondary text-sm">Co-Founder & Kreation</p>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto rounded-2xl bg-surface border border-border p-10 md:p-12 text-center space-y-6"
          >
            <p className="text-text-secondary leading-relaxed">
              <span className="font-bold text-accent">Wir sind KAOS Media</span> – die Boutique-Agentur für Gründer, Startups und KMU, die Großes vorhaben.
              Hinter KAOS stehen <span className="font-bold text-white">Florian</span>, <span className="font-bold text-white">Deniz</span> und <span className="font-bold text-white">Anna</span> – drei erfahrene Unternehmer mit echten Höhen, Tiefen und Visionen.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Unsere Stärke liegt im Spagat zwischen kreativer Freiheit und analytischer Präzision.
              Wir kombinieren Technologie, Strategie und Herzblut zu messbarem Erfolg – <span className="italic text-accent">ohne Bullshit</span>.
            </p>
          </motion.div>

          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6 text-text-secondary leading-relaxed text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-8 h-0.5 bg-accent/50 rounded-full" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Unsere Philosophie</span>
              <div className="w-8 h-0.5 bg-accent/50 rounded-full" />
            </div>
            <p>
              Wir glauben daran, dass echte Perfektion nicht im stillen Kämmerlein entsteht – sondern dort,
              wo Ideen mutig aufeinandertreffen, wachsen und sich entfalten dürfen.
            </p>
            <p>
              Bei KAOS Media ist &ldquo;Chaos&rdquo; kein Fehler, sondern ein Prinzip: Wir ordnen kreative Vielfalt,
              technische Präzision und menschliche Leidenschaft zu einem Ganzen.
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

          {/* Values */}
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 rounded-full border border-accent/30 text-accent text-sm font-bold tracking-widest"
              >
                {v}
              </motion.span>
            ))}
          </div>

          {/* Quote */}
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
            <Button href="/pages/contact">Jetzt Erstgespräch sichern</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
