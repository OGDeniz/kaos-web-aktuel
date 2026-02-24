'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const values = ['KREATIV', 'ANALYTISCH', 'ORIGINELL', 'STRUKTURIERT'];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="Wer wir sind" label="Über uns" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mx-auto max-w-md">
            <Image
              src="/aboutus/team.jpg"
              alt="KAOS Media Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          {/* Decorative */}
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-accent/20 rounded-2xl hidden lg:block" />
          <div className="absolute -top-3 -left-3 w-14 h-14 border-2 border-white/5 rounded-xl hidden lg:block" />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <p className="text-text-secondary text-base leading-relaxed">
            KAOS Media wurde von Flo & Deniz gegründet – zwei Kreative aus Heidelberg, die Marken
            nicht nur gestalten, sondern strategisch denken. Wir kombinieren Kreativität mit Daten und
            liefern Ergebnisse, die wirken.
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            Als Boutique-Agentur mit direktem Founder-Kontakt sind wir flexibel, schnell und
            persönlich – ohne unnötigen Overhead.
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap gap-3 mt-8 mb-10 justify-center lg:justify-start">
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="px-5 py-2.5 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-widest"
              >
                {v}
              </motion.span>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <Button href="/pages/about" variant="outline">Mehr erfahren</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
