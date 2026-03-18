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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative aspect-[16/10] overflow-hidden cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/65 transition-all duration-500" />

            {/* Red border frame on hover */}
            <div className="absolute inset-3 border border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content — slide up on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em] block mb-2">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
                <span className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-white/70 text-sm flex items-center gap-1">
                  Projekt ansehen <span>&rarr;</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
