'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const values = ['MUT', 'KLARHEIT', 'AUTHENTIZITÄT'];

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
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden mx-auto max-w-md">
            <Image
              src="/philosophy/perfekt.png"
              alt="KAOS Media Team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
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
          className="order-1 lg:order-2 text-center lg:text-left space-y-5"
        >
          <p className="text-text-secondary text-base leading-relaxed">
            Echte Perfektion entsteht nicht im stillen Kämmerlein – sondern dort, wo Ideen mutig aufeinandertreffen,
            wachsen und sich entfalten dürfen.
          </p>
          <p className="text-text-secondary text-base leading-relaxed">
            Bei KAOS Media ist &ldquo;Chaos&rdquo; kein Fehler, sondern ein Prinzip. Wir ordnen kreative Vielfalt,
            technische Präzision und menschliche Leidenschaft zu einem Ganzen – für Gründer:innen,
            Unternehmer:innen und Visionäre, die mehr wollen als 08/15.
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
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

          {/* Quote Block */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pl-5 border-l-2 border-accent mt-2"
          >
            <p className="text-white font-semibold text-base italic leading-relaxed">
              &ldquo;Am Anfang war das KAOS – und nur im KAOS entsteht Perfektion.&rdquo;
            </p>
          </motion.blockquote>

          <div className="flex justify-center lg:justify-start pt-2">
            <Button href="/pages/philosophie" variant="outline">Unsere Philosophie</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
