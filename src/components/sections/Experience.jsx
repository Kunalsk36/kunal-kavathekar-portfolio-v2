'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experience } from '@/data/experience';

/* ─── Motion Variants ────────────────────────────────────────────────
 *
 * containerVariants: Staggers the entry animations of each experience block.
 * itemVariants: Subtle slide-up fade reveal for each item.
 * ──────────────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="relative bg-background border-t border-edge/30 py-10"
    >
      <Container>
        {/* Section label */}
        <SectionHeading index="02" label="EXPERIENCE" className="mb-4 md:mb-6" />

        {/* Main Heading */}
        <h3 className="text-[36px] sm:text-[42px] font-bold leading-[1.1] tracking-tight text-foreground mb-6">
          Where I&apos;ve worked
        </h3>

        {/* Experience List */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {experience.map((item) => (
            <motion.div
              key={item.id}
              className="border-t border-edge/60 py-6 md:py-8 last:border-b last:border-edge/80"
              variants={itemVariants}
            >
              {/* Header Row: Title & Duration */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-y-2 md:gap-y-0">
                <h4 className="text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-foreground tracking-tight leading-tight">
                  {item.title}
                </h4>
                <span className="text-[13.5px] md:text-[14px] text-muted dark:text-secondary/80 font-medium font-sans">
                  {item.duration}
                </span>
              </div>

              {/* Company Info (Sub-title) */}
              <div className="text-[15.5px] md:text-[16.5px] font-medium text-secondary mt-2">
                {item.company}
              </div>

              {/* Contributions Section */}
              <div className="mt-4">
                <span className="text-[11.5px] font-semibold uppercase tracking-wider text-muted select-none">
                  Key Contributions
                </span>
                <ul className="space-y-1 mt-4 max-w-[680px]" role="list">
                  {item.contributions.map((contribution, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-[14.5px] text-secondary leading-relaxed"
                    >
                      <span className="text-orange select-none mt-1.5 shrink-0 text-[10px]" aria-hidden>
                        ●
                      </span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Section */}
              <div className="mt-4">
                <span className="text-[11.5px] font-semibold uppercase tracking-wider text-muted select-none">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2.5 mt-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12.5px] text-secondary bg-surface-elevated/60 dark:bg-white/[0.03] border border-edge/60 dark:border-white/[0.08] px-3 py-1 rounded-[6px] transition-colors duration-150 select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Experience;
