'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { cn } from '@/lib/utils';

const contactItems = [
  {
    label: 'EMAIL',
    value: 'kunalkavathekar@gmail.com',
    href: 'mailto:kunalkavathekar@gmail.com',
    icon: Mail,
  },
  {
    label: 'PHONE',
    value: '+91 9067889136',
    href: 'tel:+919067889136',
    icon: Phone,
  },
  {
    label: 'GITHUB',
    value: '@Kunalsk36',
    href: 'https://github.com/Kunalsk36/',
    icon: FaGithub,
  },
  {
    label: 'LINKEDIN',
    value: 'Kunal Kavathekar',
    href: 'https://www.linkedin.com/in/kunal-kavathekar/',
    icon: FaLinkedin,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative bg-background border-t border-edge/30 pt-8 lg:pt-12 pb-8 lg:pb-14"
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="w-full">
            <SectionHeading index="08" label="CONTACT" align="center" className="mb-4 md:mb-6" />
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            variants={itemVariants}
            className="text-[36px] sm:text-[46px] lg:text-[54px] font-black leading-[1.1] tracking-[-0.02em] text-foreground max-w-3xl mx-auto mb-6"
          >
            Let&apos;s build something meaningful together.
          </motion.h3>

          {/* Supporting Description */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-[16.5px] text-secondary leading-relaxed max-w-[580px] mx-auto mb-10 text-pretty"
          >
            Open to opportunities, collaborations, and meaningful professional conversations. I usually respond within a day.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Button
              as="a"
              href="mailto:kunalkavathekar@gmail.com"
              variant="primary"
              size="md"
              className="group flex items-center gap-2"
            >
              <Mail size={14} strokeWidth={2.4} className="transition-transform duration-200" />
              Get in Touch
            </Button>
            
            <Button
              as="a"
              href="/documents/Kunal_Kavathekar_Resume.pdf"
              download="Kunal_Kavathekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              className="group flex items-center gap-2"
            >
              <Download size={14} strokeWidth={2.2} className="transition-transform duration-200" />
              Download Resume
            </Button>
          </motion.div>

          {/* Contact Information Bar */}
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.8fr_1.15fr] gap-px bg-edge border border-edge rounded-[18px] overflow-hidden w-full">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label !== 'EMAIL' && item.label !== 'PHONE' ? "_blank" : undefined}
                    rel={item.label !== 'EMAIL' && item.label !== 'PHONE' ? "noopener noreferrer" : undefined}
                    className={cn(
                      "bg-surface dark:bg-[#111214] p-8 sm:p-9 md:p-10 flex flex-col justify-center items-start min-h-[136px] transition-all duration-300 group cursor-pointer relative"
                    )}
                  >
                    {/* Label Row */}
                    <div className="flex items-center gap-2 mb-3.5 select-none">
                      <Icon size={13} className="text-secondary/60 group-hover:text-orange transition-colors duration-300" strokeWidth={2} />
                      <span className="block font-mono text-[10px] font-semibold tracking-[0.2em] text-secondary/70 group-hover:text-foreground uppercase transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>

                    {/* Contact Value */}
                    <span className="block text-[14.5px] sm:text-[15.5px] font-semibold text-foreground/90 group-hover:text-foreground tracking-tight leading-snug select-all transition-colors duration-300">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
