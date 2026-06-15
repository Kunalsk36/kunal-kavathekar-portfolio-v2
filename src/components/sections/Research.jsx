'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { researchItems } from '@/data/research';
import { ExternalLink, FileText, FileBadge, BookOpen, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Helper to return specific icons based on category
function getCategoryIcon(category) {
  if (category.includes('Paper')) return <BookOpen className="w-3.5 h-3.5" strokeWidth={2} />;
  if (category.includes('Patent')) return <FileText className="w-3.5 h-3.5" strokeWidth={2} />;
  if (category.includes('Copyright')) return <FileBadge className="w-3.5 h-3.5" strokeWidth={2} />;
  return <FileText className="w-3.5 h-3.5" strokeWidth={2} />;
}

export function Research() {
  return (
    <section
      id="research"
      aria-label="Research & Intellectual Property Portfolio"
      className="relative bg-background border-t border-edge/30 py-20"
    >
      <Container>
        {/* Section label */}
        <SectionHeading index="05" label="RESEARCH & IP" className="mb-4 md:mb-6" />

        {/* Main Heading and Subtitle */}
        <div className="mb-10 max-w-[65ch]">
          <h3 className="text-[36px] sm:text-[42px] font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Research & Intellectual Property
          </h3>
          <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed">
            The PathReco AI project has been recognized academically and legally, resulting in a published research paper, a published patent, and a registered copyright.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // Very smooth spring-like ease
                delay: index * 0.1,
              }}
              className={cn(
                "group flex flex-col h-full overflow-hidden select-none",
                "bg-surface dark:bg-[#0A0A0C]", // Very subtle, flat premium dark background
                "border border-edge/40 dark:border-white/[0.04]", // Extremely subtle borders
                "rounded-[24px]",
                "shadow-sm dark:shadow-none",
                "transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:shadow-md dark:hover:border-white/[0.08]"
              )}
            >
              {/* Image Preview Container - Academic Thumbnail Style */}
              <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px] shrink-0 bg-white border-b border-edge/30 dark:border-white/[0.04] filter grayscale-[0.2] dark:grayscale-[0.3] contrast-[0.95] dark:contrast-[0.8] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={cn(
                    "block w-full h-full transition-transform duration-500 group-hover:scale-[1.02]",
                    item.id === 'pathreco-patent' ? 'object-contain object-top' : 'object-cover object-top'
                  )}
                  loading="lazy"
                />
              </div>

              {/* Content wrapper */}
              <div className="flex flex-col flex-1 px-6 pt-8 md:px-8">
                
                {/* Category & Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-orange">
                    {getCategoryIcon(item.category)}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-orange uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-[16px] md:text-[17px] font-bold text-foreground tracking-tight leading-[1.45] pr-2 mb-8">
                  {item.title}
                </h4>

                {/* Spacer to push publication details to bottom before the divider */}
                <div className="flex-grow" />

                {/* Publication Details / Metadata */}
                <div className="flex flex-col gap-1.5 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-secondary/60 font-semibold">
                    {item.metaLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary/40" />
                    <span className="text-[13px] text-foreground/80 font-medium">
                      {item.metaValue}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Link Footer */}
              {item.actionLink && (
                <div className="border-t border-edge/40 dark:border-white/[0.04] mt-auto shrink-0 bg-surface/50 dark:bg-white/[0.01]">
                  <a
                    href={item.actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-between w-full px-6 py-4 md:px-8 transition-colors duration-200 hover:bg-surface-elevated/30 dark:hover:bg-white/[0.02]"
                  >
                    <span className="text-[13px] font-semibold text-secondary group-hover/link:text-orange transition-colors duration-200">
                      {item.actionText}
                    </span>
                    <ExternalLink className="w-4 h-4 text-secondary/50 group-hover/link:text-orange transition-all duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Research;
