'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-edge bg-surface dark:bg-transparent py-6 md:py-12 select-none">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-x-12 md:gap-y-0 text-center items-stretch">
            {/* Column 1 — Identity (Primary Focus) */}
            <div className="flex flex-col justify-center items-center md:items-start md:text-left md:border-r md:border-edge md:pr-12 md:mr-2">
              <h2 className="text-[14px] sm:text-[18px] font-bold tracking-tight text-foreground leading-tight">
                Kunal Kavathekar
              </h2>
              <p className="text-[12px] sm:text-[14px] text-foreground/90 mt-1.5 leading-relaxed">
                Software Developer &amp; Problem Solver
              </p>
            </div>

            {/* Column 2 — Personal Philosophy */}
            <div className="flex flex-col justify-center items-center md:items-center md:text-center md:border-r md:border-edge md:pr-12 md:mr-2">
              <p className="text-[12px] sm:text-[14.5px] text-foreground/80 font-medium leading-relaxed">
                Always Learning.
              </p>
              <p className="text-[12px] sm:text-[14.5px] text-foreground/80 font-medium leading-relaxed mt-1">
                Always Building.
              </p>
            </div>

            {/* Column 3 — Craftsmanship & Mindset */}
            <div className="flex flex-col justify-center items-center md:items-end md:text-right leading-relaxed">
              <p className="text-[13px] sm:text-[14px] text-secondary/90">
                Crafted with attention to detail.
              </p>
              <p className="text-[13px] sm:text-[14px] text-secondary/90 mt-1">
                Ready for the next challenge.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
