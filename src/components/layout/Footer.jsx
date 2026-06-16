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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-7 md:gap-y-10 lg:gap-x-12 lg:gap-y-0 text-center items-stretch">
            {/* Column 1 — Identity (Primary Focus) */}
            <div className="flex flex-col justify-center items-center md:items-start md:text-left lg:border-r lg:border-edge lg:pr-12 lg:mr-2">
              <h2 className="text-[14px] sm:text-[18px] font-bold tracking-tight text-foreground leading-tight">
                Kunal Kavathekar
              </h2>
              <p className="text-[12px] sm:text-[14px] text-foreground/90 mt-1.5 leading-relaxed">
                Software Developer &amp; Problem Solver
              </p>
            </div>

            {/* Column 2 — Personal Philosophy */}
            <div className="flex flex-col justify-center items-center md:items-end md:text-right lg:items-center lg:text-center lg:border-r lg:border-edge lg:pr-12 lg:mr-2">
              <p className="text-[12.5px] sm:text-[14.5px] text-foreground/80 font-medium leading-relaxed">
                Always Learning.
              </p>
              <p className="text-[12.5px] sm:text-[14.5px] text-foreground/80 font-medium leading-relaxed mt-1">
                Always Building.
              </p>
            </div>

            {/* Column 3 — Craftsmanship & Mindset */}
            <div className="flex flex-col md:flex-row lg:flex-col justify-center md:justify-between lg:justify-center items-center md:col-span-2 lg:col-span-1 lg:items-end lg:text-right leading-relaxed">
              <p className="text-[12px] sm:text-[14px] text-secondary/90">
                Crafted with attention to detail.
              </p>
              <p className="text-[12px] sm:text-[14px] text-secondary/90 mt-1">
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
