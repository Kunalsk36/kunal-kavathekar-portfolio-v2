'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CertificateModal } from '@/components/ui/CertificateModal';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { cn } from '@/lib/utils';

export function Certifications() {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', image: '' });
  const scrollContainerRef = useRef(null);

  const openCertificate = (cert) => {
    if (cert.image) {
      setModalState({ isOpen: true, title: cert.name, image: cert.image });
    }
  };

  const closeCertificate = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.7; // smoother scroll amount
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="relative bg-background border-t border-edge/30 py-20 overflow-hidden"
    >
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <SectionHeading index="07" label="CERTIFICATIONS" className="mb-4 md:mb-6" />
            <h3 className="text-[36px] sm:text-[42px] font-bold leading-[1.1] tracking-tight text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed max-w-[600px]">
              A collection of professional certifications across web development, cloud computing, cybersecurity, AI and modern technologies.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0 hidden md:flex pb-1">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-edge/40 dark:border-white/[0.06] text-secondary hover:text-foreground hover:bg-surface-elevated hover:shadow-sm dark:hover:border-white/[0.1] transition-all duration-200"
              aria-label="Previous certificates"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-edge/40 dark:border-white/[0.06] text-secondary hover:text-foreground hover:bg-surface-elevated hover:shadow-sm dark:hover:border-white/[0.1] transition-all duration-200"
              aria-label="Next certificates"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container - Constrained to section container */}
        <div className="w-full relative mt-4">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-4 gap-6 md:gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group snap-start shrink-0 flex flex-col h-[390px] overflow-hidden select-none",
                  "bg-surface dark:bg-[#111214]", // Match Projects/Academics
                  "border border-edge/60 dark:border-white/[0.08]", // Differentiate from background
                  "rounded-[24px]", // Match Academic/Research rounding
                  "shadow-sm dark:shadow-none",
                  "transition-all duration-300 ease-out",
                  "hover:border-edge/90 dark:hover:border-white/[0.15]",
                  "hover:bg-surface-elevated/40 dark:hover:bg-[#16171A]",
                  "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(33.333%-21.3px)]" // Exact width math to fit 3 cards per view on desktop, 2 on tablet, 1 on mobile
                )}
              >
                {/* Certificate Preview (Hero Area) - 58% height, containment and padding */}
                <div 
                  className={cn(
                    "relative w-full h-[58%] shrink-0 border-b border-edge/30 dark:border-white/[0.08] overflow-hidden bg-surface-elevated p-0 flex items-center justify-center",
                    "filter grayscale-[0.2] dark:grayscale-[0.3] contrast-[0.95] dark:contrast-[0.8] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 cursor-pointer"
                  )}
                  onClick={() => openCertificate(cert)}
                >
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      className="max-w-full max-h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03] rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-black/[0.04] dark:border-white/[0.04]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted gap-2 bg-gradient-to-br from-surface-elevated to-surface">
                      <span className="font-mono text-[11px] uppercase tracking-widest font-medium opacity-60">Certificate</span>
                      <span className="font-mono text-[9px] uppercase tracking-wider opacity-40">Document Pending</span>
                    </div>
                  )}
                </div>

                {/* Certificate Info */}
                <div className="flex flex-col flex-1 px-6 pt-5 md:px-7 justify-start">
                  <h4 className="text-[16px] md:text-[17px] font-bold text-foreground tracking-tight leading-[1.3] mb-1.5 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-[12.5px] uppercase tracking-wider text-secondary/70 font-semibold flex items-center gap-1.5 mt-1">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-edge/60 dark:bg-white/20"></span>
                    <span>{cert.year}</span>
                  </p>
                </div>

                {/* Action Link Footer - Matches Research/Academics style */}
                <div className="border-t border-edge/40 dark:border-white/[0.08] mt-auto shrink-0 bg-surface/50 dark:bg-white/[0.01]">
                  <button
                    onClick={() => openCertificate(cert)}
                    disabled={!cert.image}
                    className={cn(
                      "group/link flex items-center justify-between w-full px-6 py-4 md:px-7 transition-colors duration-200",
                      cert.image ? "hover:bg-surface-elevated/30 dark:hover:bg-white/[0.02] cursor-pointer" : "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <span className={cn(
                      "text-[13px] font-semibold transition-colors duration-200",
                      cert.image ? "text-secondary group-hover/link:text-orange" : "text-muted"
                    )}>
                      View Certificate
                    </span>
                    {cert.image && (
                      <ExternalLink className="w-4 h-4 text-secondary/50 group-hover/link:text-orange transition-all duration-300 group-hover/link:translate-x-1" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      <CertificateModal
        isOpen={modalState.isOpen}
        onClose={closeCertificate}
        title={modalState.title}
        image={modalState.image}
      />
    </section>
  );
}

export default Certifications;
