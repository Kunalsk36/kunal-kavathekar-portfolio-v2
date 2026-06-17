'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

/* ─── Motion Variants ────────────────────────────────────────────────
 *
 * containerVariants: Fades and slides the whole section up when visible.
 * childVariants: Staggers the visual fade-in of the core strengths.
 * ──────────────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ─── About Section ────────────────────────────────────────────────── */
export function About() {
  return (
    <section
      id="about"
      aria-label="About Kunal Kavathekar"
      className="relative bg-background border-t border-edge/30 pt-10 pb-8 md:pb-12 lg:pb-20"
    >
      <Container>
        <motion.div
          className={cn(
            'grid grid-cols-1 md:grid-cols-12',
            'gap-y-4 md:gap-y-12 md:gap-x-8',
            'lg:gap-y-0 lg:gap-x-12 xl:gap-x-16'
          )}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {/* ── Left Column: Section Label & Personal Statement ──────── */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
            <SectionHeading index="01" label="ABOUT" className="mb-3 md:mb-4 lg:mb-10" />

            {/* Statement */}
            <h3 className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-bold leading-[1.1] tracking-tight text-foreground max-w-[280px] sm:max-w-sm lg:max-w-xs xl:max-w-sm">
              Building digital products with logic, design, and impact.
            </h3>

            {/* Personal Note */}
            <p className="text-[13.5px] md:text-[14px] text-muted font-normal mt-4 md:mt-5 lg:mt-6 leading-relaxed max-w-sm sm:max-w-xs">
              From BSc Computer Science to MCA, my journey has been driven by curiosity, continuous learning, and building meaningful digital experiences.
            </p>
          </div>

          {/* ── Right Column: Paragraph & Core Strengths ──────────────── */}
          <div className="flex flex-col md:contents lg:flex lg:flex-col lg:col-span-7 lg:justify-start lg:pt-16">
            {/* Paragraph */}
            <p className="md:col-span-6 lg:col-span-full text-[15px] md:text-[16px] lg:text-[17.5px] text-secondary leading-relaxed mb-4 md:mb-0 lg:mb-16 max-w-[620px] text-pretty md:self-end">
              I enjoy turning complex ideas into practical digital solutions. My experience spans full-stack web development, automation workflows, and AI-powered applications — with a focus on writing maintainable code and creating intuitive user experiences.
            </p>

            {/* Core Strengths */}
            <div className="md:col-span-12 lg:col-span-full grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-y-5 md:gap-x-6 lg:gap-8">
              <motion.div className="border-t border-edge pt-3 lg:pt-4 flex flex-col" variants={childVariants}>
                <h4 className="font-semibold text-[14px] md:text-[15px] text-foreground mb-1 lg:mb-2">
                  Full-Stack Development
                </h4>
                <p className="text-[12.5px] md:text-[13px] text-muted leading-relaxed">
                  Next.js, Node.js, JavaScript, MySQL, and modern web architecture.
                </p>
              </motion.div>

              <motion.div className="border-t border-edge pt-3 lg:pt-4 flex flex-col" variants={childVariants}>
                <h4 className="font-semibold text-[14px] md:text-[15px] text-foreground mb-1 lg:mb-2">
                  Automation &amp; Integration
                </h4>
                <p className="text-[12.5px] md:text-[13px] text-muted leading-relaxed">
                  RPA workflows, AI integrations, and intelligent application features.
                </p>
              </motion.div>

              <motion.div className="border-t border-edge pt-3 lg:pt-4 flex flex-col" variants={childVariants}>
                <h4 className="font-semibold text-[14px] md:text-[15px] text-foreground mb-1 lg:mb-2">
                  Performance &amp; UX
                </h4>
                <p className="text-[12.5px] md:text-[13px] text-muted leading-relaxed">
                  Clean interfaces, responsive design, and scalable user experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
export default About;
