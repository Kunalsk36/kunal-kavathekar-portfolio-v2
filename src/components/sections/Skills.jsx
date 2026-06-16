'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills Portfolio"
      className="relative bg-background py-12 border-t border-edge/30"
    >
      <Container>
        {/* Section label */}
        <SectionHeading index="04" label="SKILLS" className="mb-4 md:mb-6" />

        {/* Main Heading */}
        <h3 className="text-[32px]s md:text-[36px] xl:text-[42px] font-bold leading-[1.1] tracking-tight text-foreground mb-10">
          Technical Toolkit
        </h3>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1,
              }}
              className={cn(
                "group flex flex-col rounded-[20px] p-7 lg:p-8",
                "bg-surface dark:bg-gradient-to-b dark:from-[#16171A] dark:to-[#111214]",
                "border border-edge/60 dark:border-[rgba(255,255,255,0.08)]",
                "shadow-[0_4px_20px_rgba(0,0,0,0.02),0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-none",
                "transition-all duration-300 ease-out",
                "hover:border-edge/80 dark:hover:border-[rgba(255,255,255,0.15)]",
                "hover:bg-surface-elevated/40 dark:hover:from-[#1A1B1E] dark:hover:to-[#16171A]"
              )}
            >
              <div className="flex items-center gap-2.5 mb-6 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-orange/80 shadow-[0_0_8px_rgba(234,88,12,0.6)]"></span>
                <h4 className="text-[11px] font-bold tracking-[0.15em] text-orange uppercase">
                  {category.title}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-sm px-3.5 py-1.5 text-[13px] font-medium tracking-tight select-none",
                      "bg-surface-elevated border border-edge/40 shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
                      "dark:bg-white/[0.03] dark:border-white/[0.08] dark:shadow-none",
                      "text-foreground dark:text-neutral-300",
                      "transition-colors duration-300",
                      "hover:bg-surface-elevated/80 dark:hover:bg-white/[0.05]",
                      "hover:border-orange/40 hover:text-orange dark:hover:border-orange/40 dark:hover:text-orange/90"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
