'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE } from '@/lib/constants';

/* ─── Animation variants ──────────────────────────────────────────── */
const panelVariants = {
  hidden:  { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
};

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

const linkItemVariants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 + i * 0.045, duration: 0.26, ease: [0.4, 0, 0.2, 1] },
  }),
};

/* ─── Component ───────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* Scroll state */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Active section via Scroll Listener scroll-spy */
  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('section[id]'));
      if (!sections.length) return;

      const scrollPosition = window.scrollY;
      const offset = 160; // Navbar height + buffer (transition threshold)
      
      let currentActive = '';
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollPosition;
        
        if (scrollPosition >= top - offset) {
          currentActive = '#' + section.id;
        }
      }
      
      // Bottom of the page fallback: highlight the last section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom && sections.length > 0) {
        currentActive = '#' + sections[sections.length - 1].id;
      }

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    // Run initially
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Fallback run to ensure styles/layout heights have fully settled
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  /* Close panel on desktop viewport */
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  /* Lock body scroll while panel is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Header ───────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-[var(--border-color)]'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav
            className={cn(
              "flex items-center justify-between transition-all duration-300 w-full",
              scrolled ? "h-16" : "h-20"
            )}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="Kunal Kavathekar — home"
              className="flex items-center gap-3.5 flex-shrink-0 select-none group"
            >
              <Image
                src="/branding/logo.png"
                alt="Kunal Kavathekar Logo"
                width={40}
                height={40}
                className="h-[36px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
              <span className="font-semibold text-[15.5px] tracking-tight text-foreground transition-colors duration-200 group-hover:text-orange">
                Kunal Kavathekar
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeSection === href;
                return (
                  <li key={href} className="relative">
                    <Link
                      href={href}
                      className={cn(
                        'text-[13px] leading-none py-1 transition-colors duration-150',
                        isActive
                          ? 'text-foreground'
                          : 'text-secondary hover:text-foreground'
                      )}
                    >
                      {label}
                    </Link>
                    {/* Animated underline — uses layoutId so it slides between active links */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute -bottom-px left-0 right-0 h-px bg-orange"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Desktop right actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                as={Link}
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                Resume
              </Button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                className={cn(
                  'inline-flex items-center justify-center w-9 h-9',
                  'rounded-[var(--radius-sm)] border border-[var(--border-color)]',
                  'text-muted hover:text-foreground hover:border-[var(--foreground-muted)]',
                  'transition-all duration-150 cursor-pointer'
                )}
              >
                <Menu size={16} strokeWidth={1.75} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* ── Mobile slide panel ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm md:hidden"
              aria-hidden
            />

            {/* Panel */}
            <motion.div
              key="panel"
              id="mobile-nav"
              role="dialog"
              aria-label="Navigation menu"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={cn(
                'fixed top-0 right-0 bottom-0 z-50',
                'w-72 flex flex-col',
                'bg-surface border-l border-[var(--border-color)]',
                'md:hidden'
              )}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--border-color)] flex-shrink-0">
                <div className="flex items-center gap-2.5 select-none">
                  <Image
                    src="/branding/logo.png"
                    alt="Kunal Kavathekar Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="font-semibold text-[14px] tracking-tight text-foreground">Kunal Kavathekar</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className={cn(
                    'inline-flex items-center justify-center w-8 h-8',
                    'rounded-[var(--radius-sm)] border border-[var(--border-color)]',
                    'text-muted hover:text-foreground hover:border-[var(--foreground-muted)]',
                    'transition-all duration-150 cursor-pointer'
                  )}
                >
                  <X size={14} strokeWidth={1.75} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-3 py-5">
                <ul className="space-y-0.5" role="list">
                  {NAV_LINKS.map(({ label, href, index }, i) => {
                    const isActive = activeSection === href;
                    return (
                      <motion.li
                        key={href}
                        custom={i}
                        variants={linkItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'flex items-center gap-4 px-3 py-2.5 rounded-[var(--radius-sm)]',
                            'transition-all duration-150',
                            isActive
                              ? 'bg-orange/[0.08] text-foreground'
                              : 'text-secondary hover:text-foreground hover:bg-[var(--surface-elevated)]'
                          )}
                        >
                          <span className="font-mono text-[10px] text-muted w-5 shrink-0">
                            {index}
                          </span>
                          <span className="text-[13px] font-medium">{label}</span>
                          {isActive && (
                            <span className="ml-auto w-1 h-1 rounded-full bg-orange shrink-0" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Panel footer */}
              <div className="flex-shrink-0 px-4 pb-8 pt-4 border-t border-[var(--border-color)]">
                <Button
                  as={Link}
                  href={SITE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
