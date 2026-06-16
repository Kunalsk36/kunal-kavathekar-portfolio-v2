'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificateModal } from '@/components/ui/CertificateModal';
import { academicJourney, achievements } from '@/data/academics';
import { ExternalLink, Award, Trophy, Star, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

// Helper for achievement icons
function getAchievementIcon(id, isPrimary) {
  if (isPrimary || id === 'gold-medal') return <Award className="w-4 h-4 text-orange/90" strokeWidth={2} />;
  if (id.includes('rank') || id.includes('phoenix')) return <Trophy className="w-4 h-4 text-orange/90" strokeWidth={2} />;
  return <Star className="w-4 h-4 text-orange/90" strokeWidth={2} />;
}

export function Academics() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="academics"
      aria-label="Academics & Achievements Portfolio"
      className="relative bg-background border-t border-edge/30 py-12"
    >
      <Container>
        {/* Section label */}
        <SectionHeading index="06" label="ACADEMICS & ACHIEVEMENTS" className="mb-4 md:mb-6" />

        {/* --- ACADEMIC JOURNEY --- */}
        <div className="mb-16">
          <h3 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground mb-10">
            Academic Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {academicJourney.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={cn(
                  "group flex flex-col h-full bg-surface border rounded-[14px] overflow-hidden select-none p-8",
                  "border-edge/60 dark:border-[rgba(255,255,255,0.08)]",
                  "dark:bg-[#111214]",
                  "shadow-[0_4px_20px_rgba(0,0,0,0.02),0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-none",
                  "transition-all duration-300 ease-out",
                  "hover:border-edge/90 dark:hover:border-[rgba(255,255,255,0.15)]",
                  "hover:bg-surface-elevated/40 dark:hover:bg-[#16171A]"
                )}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 rounded-full bg-surface-elevated dark:bg-white/[0.03] border border-edge/30 dark:border-white/[0.06] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-orange/90" strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] font-semibold tracking-wider text-secondary/70 bg-surface-elevated/50 dark:bg-white/[0.02] border border-edge/30 dark:border-white/[0.04] px-3.5 py-1.5 rounded-full uppercase">
                    {item.duration}
                  </span>
                </div>
                
                <h4 className="text-[20px] md:text-[22px] font-bold text-foreground leading-[1.3] mb-3 pr-4">
                  {item.degree}
                </h4>
                <p className="text-[15px] text-secondary/80 font-medium mb-10">
                  {item.institution}
                </p>
                
                <div className="mt-auto">
                  <span className={cn(
                    "inline-flex items-center rounded-full px-3 py-1.5 text-[12px] font-medium tracking-tight",
                    "bg-surface-elevated/80 dark:bg-white/[0.03] border border-edge/30 dark:border-white/[0.06] text-secondary dark:text-neutral-300"
                  )}>
                    {item.statusLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ACHIEVEMENTS & RECOGNITION --- */}
        <div>
          <h3 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-foreground mb-10">
            Achievements & Recognition
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* First Row (3 items) */}
            {achievements.slice(0, 3).map((item, index) => (
              <AchievementCard key={item.id} item={item} index={index} onSelect={() => setSelectedCert(item)} />
            ))}
            
            {/* Second Row (2 items) centered on large screens via w-[66.666%] and mx-auto. 
                Using a nested grid so they perfectly align with the columns above. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-3 lg:w-[calc(66.666%-0.666rem)] lg:mx-auto gap-6 lg:gap-8">
              {achievements.slice(3, 5).map((item, index) => (
                <AchievementCard key={item.id} item={item} index={index + 3} onSelect={() => setSelectedCert(item)} />
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
        image={selectedCert?.certificateImage}
      />
    </section>
  );
}

// Sub-component for achievement cards
function AchievementCard({ item, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className={cn(
        "group flex flex-col h-full bg-surface border rounded-[14px] overflow-hidden select-none",
        "border-edge/60 dark:border-[rgba(255,255,255,0.08)]",
        "dark:bg-[#111214]",
        "shadow-[0_4px_20px_rgba(0,0,0,0.02),0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-none",
        "transition-all duration-300 ease-out",
        "hover:border-edge/90 dark:hover:border-[rgba(255,255,255,0.15)]",
        "hover:bg-surface-elevated/40 dark:hover:bg-[#16171A]"
      )}
    >
      <div className="flex flex-col flex-1 p-7 md:p-8">
        
        {/* Category Label */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-elevated dark:bg-white/[0.03] border border-edge/30 dark:border-white/[0.06]">
            {getAchievementIcon(item.id)}
          </div>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-secondary dark:text-neutral-400">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-[18px] md:text-[20px] font-bold tracking-tight leading-[1.3] mb-4 pr-2 text-foreground">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-[14px] leading-relaxed text-secondary/80">
          {item.description}
        </p>

      </div>

      {/* Action Footer */}
      <div className="border-t border-[#EFEFEF] dark:border-[rgba(255,255,255,0.05)] bg-[#FAFAFA] dark:bg-[rgba(255,255,255,0.02)] mt-auto shrink-0">
        <button
          onClick={onSelect}
          className="group/link flex items-center justify-between w-full px-8 py-4 transition-colors duration-200 hover:bg-[#F0F0F0] dark:hover:bg-[rgba(255,255,255,0.04)] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
        >
          <span className="text-[13px] font-semibold transition-colors duration-200 text-secondary group-hover/link:text-orange">
            {item.actionText}
          </span>
          <ExternalLink className={cn(
            "w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1",
            "text-secondary/50 group-hover/link:text-orange"
          )} />
        </button>
      </div>
    </motion.div>
  );
}

export default Academics;
