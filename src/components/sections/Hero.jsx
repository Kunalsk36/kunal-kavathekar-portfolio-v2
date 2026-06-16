'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Download, ArrowRight, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { SITE, HERO_METRICS } from '@/lib/constants';

/* ─── Motion ──────────────────────────────────────────────────────────
 *
 * Four direct children of the grid are staggered sequentially:
 *   1. Zone A (name)   → slides up, 0.1s
 *   2. Zone B (photo)  → scale reveal, 0.22s
 *   3. Zone C (info)   → slides up, 0.34s
 *   4. Zone D (metrics)→ slides up, 0.46s
 *
 * This creates a deliberate "the page is being built" effect that feels
 * intentional rather than decorative.
 * ──────────────────────────────────────────────────────────────────────── */
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const slideUpVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const photoVariants = {
  hidden:  { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ─── Social icon button ──────────────────────────────────────────── */
function SocialIconLink({ href, label, children, external = true }) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={cn(
        'w-9 h-9 inline-flex items-center justify-center',
        'rounded-[10px]',
        'border border-[var(--border-color)]',
        'text-muted hover:text-foreground hover:border-[var(--foreground-muted)]',
        'transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-orange'
      )}
    >
      {children}
    </Link>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative bg-[var(--surface)] dark:bg-transparent"
    >
      <Container className="pt-30 pb-20">
        <motion.div
          className={cn(
            'grid grid-cols-1',
            'gap-y-12 lg:gap-y-0',
            'lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12'
          )}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >

          {/* ── Zone A: Identity ──────────────────────────────────── */}
          <motion.div
            className="lg:col-start-1 lg:col-span-7 xl:col-span-8 lg:row-start-1"
            variants={slideUpVariants}
          >
            {/* Name */}
            <h1
              className={cn(
                'text-[44px] sm:text-[52px] lg:text-[64px]',
                'font-black leading-[1.02] tracking-[-0.03em]',
                'text-foreground mb-4'
              )}
            >
              Kunal Kavathekar
            </h1>
          </motion.div>

          {/* ── Zone B: Portrait ──────────────────────────────────── */}
          <motion.div
            className={cn(
              'flex justify-center lg:justify-end lg:items-start',
              'lg:col-start-8 xl:col-start-9',
              'lg:col-span-5 xl:col-span-4',
              'lg:row-start-1 lg:row-span-2'
            )}
            variants={photoVariants}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] mx-auto lg:mr-0 lg:ml-auto">
              {/* Background Layer Card */}
              <div className="absolute inset-0 bottom-8 bg-surface-elevated border border-edge rounded-[24px] shadow-sm select-none" />
              
              {/* Front Portrait Image Card */}
              <div
                className={cn(
                  'absolute inset-4 overflow-hidden z-10',
                  'rounded-[16px]',
                  'border border-edge dark:border-white/10',
                  'shadow-sm',
                  'bg-surface'
                )}
              >
                <Image
                  src="/images/profile/kunal-profile.png"
                  alt="Kunal Kavathekar — Software Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 248px, (max-width: 768px) 288px, 320px"
                  className="object-cover object-top select-none"
                />
              </div>

              {/* Elegant Building Since 2021 Signature Label */}
              <div
                className={cn(
                  'absolute bottom-[0] left-1/2 -translate-x-1/2 z-20',
                  'bg-surface border border-edge rounded-[10px] px-3.5 py-1.5',
                  'flex items-center gap-1.5 shadow-sm whitespace-nowrap select-none'
                )}
              >
                <Terminal size={11} className="text-orange" />
                <span className="text-[11px] font-medium text-foreground tracking-tight">Building since 2021</span>
              </div>
            </div>
          </motion.div>

          {/* ── Zone C: Professional Information ──────────────────── */}
          <motion.div
            className={cn(
              'lg:col-start-1 lg:col-span-7 xl:col-span-8',
              'lg:row-start-2',
              'lg:pt-7 lg:border-t lg:border-[var(--border-color)]'
            )}
            variants={slideUpVariants}
          >
            {/* Title / Subtitle Row */}
            <div className="flex flex-wrap gap-3 mb-8 items-end">
              <span className="text-[28px] sm:text-[32px] font-semibold text-foreground tracking-tight leading-none">
                Software Developer</span>
               <span className='relative w-1.5 h-1.5 bg-[var(--accent-orange)] rounded-full inline-block -top-2'></span> 
              
              <span className="font-mono text-[12.5px] sm:text-[13px] text-muted dark:text-secondary/80 tracking-[0.06em]">
                Full Stack • Modern Web • Scalable Solutions
              </span>
            </div>

            <p className="text-[15.5px] sm:text-[17.5px] text-secondary leading-[1.7] max-w-[620px] mb-8 text-pretty">
              {SITE.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Button
                as={Link}
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                className="group"
              >
                Download Resume
                <Download size={14} strokeWidth={2.4} className="transition-transform duration-200" />
              </Button>
              <Button
                as={Link}
                href="#projects"
                variant="secondary"
                size="md"
                className="group"
              >
                View Projects
                <ArrowRight size={14} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2" role="list" aria-label="Social profiles">
                <SocialIconLink href={SITE.github} label="GitHub profile">
                  <FaGithub size={15} />
                </SocialIconLink>
                <SocialIconLink href={SITE.linkedin} label="LinkedIn profile">
                  <FaLinkedin size={15} />
                </SocialIconLink>
                <SocialIconLink
                  href={`mailto:${SITE.email}`}
                  label={`Email: ${SITE.email}`}
                  external={false}
                >
                  <Mail size={14} strokeWidth={1.75} />
                </SocialIconLink>
              </div>

              <span className="w-px h-4 bg-[var(--border-color)]" aria-hidden />

              <span className="flex items-center gap-1.5 text-[14px] text-muted dark:text-secondary/80 select-none">
                <MapPin size={14} strokeWidth={1.75} aria-hidden />
                {SITE.location}
              </span>
            </div>
          </motion.div>

          {/* ── Zone D: Proof Metrics ─────────────────────────────── */}
          <motion.div
            className={cn(
              'lg:col-start-1 lg:col-span-12 lg:row-start-3',
              'w-full'
            )}
            variants={slideUpVariants}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-edge border border-edge rounded-[18px] overflow-hidden mt-12 md:mt-16">
              {HERO_METRICS.map((metric, i) => (
                <div key={metric.value + i} className="bg-surface dark:bg-background p-6 sm:p-7 flex flex-col justify-center min-h-[108px] transition-colors duration-300">
                  <span className="text-[28px] sm:text-[34px] font-bold tracking-tight text-foreground leading-none mb-2 select-none">
                    {metric.value}
                  </span>
                  <span className="text-[13px] text-secondary leading-snug">
                    {metric.label.split('\n').join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
