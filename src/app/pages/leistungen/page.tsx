"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Layout from "@/layouts/Layout";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Branding & Positionierung",
    description: "Wir schärfen eure Marke vom Naming bis zum marktrelevanten Messaging.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    foerderbar: true,
    bullets: [
      "Markenanalyse & Zielgruppen-Research",
      "Brand Story, Tonalität & Corporate Language",
      "Visuelles Branding – Logo, Farbwelt, Styles",
    ],
  },
  {
    title: "Webdesign & Development",
    description: "Conversion-orientierte Websites, die eure Marke erlebbar machen.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    foerderbar: true,
    bullets: [
      "UX/UI Design mit Fokus auf Nutzerführung",
      "Headless & Next.js Entwicklung",
      "SEO-Basics, Tracking & Performance",
    ],
  },
  {
    title: "Content & Social Media",
    description: "Content, der eure Community aktiviert und für Wiedererkennung sorgt.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    foerderbar: false,
    bullets: [
      "Kampagnenplanung & Redaktionskonzept",
      "Content-Produktion (Foto, Video, Copy)",
      "Community-Management & Reporting",
    ],
  },
  {
    title: "Performance & Automation",
    description: "Wir skalieren Leads und Sales mit datengetriebenen Kampagnen.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    foerderbar: true,
    bullets: [
      "Paid Social & Search Kampagnen",
      "Landingpages & Lead-Funnels",
      "Automatisierung von Follow-ups",
    ],
  },
];

const workflow = [
  { step: "Kick-off & Analyse", detail: "Deep-Dive in Marke, Markt und Ziele – transparent dokumentiert." },
  { step: "Strategie & Konzept", detail: "Positionierung, Journey und Maßnahmenfahrplan." },
  { step: "Umsetzung & Launch", detail: "Kollaborative Umsetzung mit schnellen Feedback-Loops." },
  { step: "Optimierung", detail: "Kontinuierliche Analyse, Testing und Ausbau." },
];

const differentiators = [
  "Boutique-Agentur mit direktem Founder-Kontakt",
  "Strategie & Kreation aus einer Hand",
  "Messbare Ergebnisse statt PowerPoint-Folien",
  "Transparente Retainer- und Projektmodelle",
];

export default function LeistungenPage() {
  return (
    <Layout>
      <section className="px-6 md:px-12 pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto max-w-5xl space-y-28">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-10 md:px-10 md:py-12"
          >
            <div className="absolute inset-y-0 right-0 z-0 hidden w-full lg:block">
              <div className="relative ml-auto h-full w-[48%] min-w-[320px] opacity-40">
                <Image
                  src="/hero/leistungHero.png"
                  alt="Leistungen Hero"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-linear-to-l from-transparent to-[#0b0b0b]/80" />
              </div>
            </div>

            <div className="relative z-10 text-center lg:max-w-2xl lg:text-left">
              <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
                <div className="w-12 h-0.75 bg-accent rounded-full" />
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Unser Angebot</span>
                <div className="w-12 h-0.75 bg-accent rounded-full" />
              </div>
              <h1 className="text-white">Strukturierte Services,<br />kreative Ergebnisse</h1>
              <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Skalierbare Marken- und Digitallösungen für Gründer, Startups und KMU –
                individuell, messbar und ohne Ballast.
              </p>
              <a
                href="/pages/foerderung"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
              >
                Viele Leistungen bis zu 50 % förderfähig &rarr;
              </a>
            </div>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-500"
              >
                {service.foerderbar && (
                  <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-accent/90 text-white text-[10px] font-bold tracking-wider uppercase">
                    Förderfähig
                  </span>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-white font-bold text-xl">{service.title}</h3>
                  <p className="mt-2 text-text-secondary text-sm">{service.description}</p>
                  <ul className="mt-5 space-y-2 inline-block text-left">
                    {service.bullets.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Workflow + Differentiators */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-surface border border-border p-10"
            >
              <h3 className="text-white font-bold text-2xl mb-8 text-center">So arbeiten wir</h3>
              <ol className="space-y-6 max-w-sm mx-auto">
                {workflow.map((phase, index) => (
                  <li key={phase.step} className="flex gap-4 items-start">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold text-sm flex-none">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{phase.step}</p>
                      <p className="text-text-secondary text-sm mt-1">{phase.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-10"
            >
              <h3 className="text-white font-bold text-2xl mb-4 text-center">Warum KAOS Media?</h3>
              <p className="text-text-secondary text-sm mb-8 text-center max-w-md mx-auto">
                Wir verbinden Kreativität mit Daten und liefern euch ein Team, das wie eine Inhouse-Unit denkt – nur flexibler.
              </p>
              <ul className="space-y-4 max-w-sm mx-auto">
                {differentiators.map(point => (
                  <li key={point} className="flex items-center gap-3 text-text-secondary text-sm">
                    <span className="h-2 w-2 rounded-full bg-accent flex-none" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="/pages/contact">Jetzt Erstgespräch sichern</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
