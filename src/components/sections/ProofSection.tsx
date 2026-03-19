"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./ProofSection.module.css";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

type ProjectItem = {
  title: string;
  category: string;
  text: string;
  result: string;
};

const stats: StatItem[] = [
  {
    value: 25,
    suffix: "+",
    label: "Projekte umgesetzt",
    description: "Digitale Lösungen für Marken, Unternehmen und Wachstum.",
  },
  {
    value: 120,
    suffix: "%",
    label: "mehr Sichtbarkeit",
    description: "Durch klarere Positionierung, Struktur und Performance-Fokus.",
  },
  {
    value: 95,
    suffix: "%",
    label: "positive Zusammenarbeit",
    description: "Partnerschaftlich, transparent und mit klarem Prozess.",
  },
  {
    value: 3,
    suffix: "x",
    label: "schnellere Prozesse",
    description: "Durch saubere Systeme, klare Abläufe und moderne Workflows.",
  },
];

const projects: ProjectItem[] = [
  {
    title: "Brand & Web Presence",
    category: "Branding / Webdesign",
    text: "Klarere Markenwirkung durch moderne visuelle Sprache, bessere Struktur und stärkere Nutzerführung.",
    result: "Mehr Wiedererkennung und professionellerer Auftritt",
  },
  {
    title: "Website Relaunch",
    category: "UX / Entwicklung",
    text: "Reduktion von Reibungspunkten im Funnel, bessere mobile Nutzbarkeit und mehr Klarheit in der Kommunikation.",
    result: "Höhere Conversion und bessere User Journey",
  },
  {
    title: "Performance & Struktur",
    category: "SEO / Performance",
    text: "Optimierte Ladezeiten, saubere Seitenstruktur und bessere technische Basis für Wachstum.",
    result: "Mehr Sichtbarkeit, bessere Core Web Vitals",
  },
];

function CountUp({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 90,
    mass: 1,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      animate(motionValue, value, { duration, ease: "easeOut" });
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <span ref={ref} className={styles.statValue} aria-label={`${value}${suffix}`}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ProofSection() {
  const statItems = useMemo(() => stats, []);
  const projectItems = useMemo(() => projects, []);

  return (
    <SectionWrapper id="proof">
      <SectionHeading
        title="Ergebnisse, die sichtbar werden."
        subtitle="Strategie, Design und Entwicklung mit Fokus auf Wirkung, Performance und nachhaltiges Wachstum."
        label="Proof"
      />

      <div className={styles.statsGrid}>
        {statItems.map((item, index) => (
          <motion.article
            key={item.label}
            className={styles.statCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <CountUp value={item.value} suffix={item.suffix} />
            <h3 className={styles.statLabel}>{item.label}</h3>
            <p className={styles.statDescription}>{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {projectItems.map((project, index) => (
          <motion.article
            key={project.title}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <span className={styles.projectCategory}>{project.category}</span>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectText}>{project.text}</p>
            <div className={styles.projectResult}>
              <span className={styles.projectResultLabel}>Ergebnis</span>
              <p className={styles.projectResultText}>{project.result}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
