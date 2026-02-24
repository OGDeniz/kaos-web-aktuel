'use client';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Branding & Positionierung',
    desc: 'Wir schärfen eure Marke vom Naming bis zum marktrelevanten Messaging – für Wiedererkennung und Vertrauen.',
  },
  {
    num: '02',
    title: 'Webdesign & Development',
    desc: 'Conversion-orientierte Websites mit modernem Stack, die eure Marke digital erlebbar machen.',
  },
  {
    num: '03',
    title: 'Content & Social Media',
    desc: 'Content, der eure Community aktiviert – von der Strategie über Produktion bis zum Reporting.',
  },
  {
    num: '04',
    title: 'Performance & Automation',
    desc: 'Datengetriebene Kampagnen, die Leads und Sales skalieren – messbar und effizient.',
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" alt>
      <SectionHeading
        title="Was wir machen"
        subtitle="Skalierbare Marken- und Digitallösungen für Gründer, Startups und KMU."
        label="Services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] text-center"
          >
            <span className="text-6xl font-extrabold text-white/[0.03] group-hover:text-accent/10 transition-colors duration-500 block">
              {service.num}
            </span>
            <h3 className="mt-2 text-white font-bold">{service.title}</h3>
            <p className="mt-4 text-text-secondary text-base leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/pages/leistungen"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors text-lg"
        >
          Alle Leistungen ansehen
          <span className="text-xl">&rarr;</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
