'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const projects = [
  { title: 'Brand Relaunch', category: 'Branding', image: '/hero/img1.jpg' },
  { title: 'E-Commerce Redesign', category: 'Webdesign', image: '/hero/img3.jpg' },
  { title: 'Social Campaign', category: 'Content', image: '/hero/img5.jpg' },
  { title: 'Performance Boost', category: 'Marketing', image: '/hero/img7.jpg' },
];

export default function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" alt>
      <SectionHeading
        title="Ausgewählte Projekte"
        subtitle="Ein Einblick in unsere Arbeit – von Branding über Web bis Performance."
        label="Portfolio"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500 flex flex-col items-center justify-center text-center p-8">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                {project.category}
              </span>
              <h3 className="text-white font-bold text-2xl">{project.title}</h3>
              <span className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white/80 text-sm">
                Projekt ansehen &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
