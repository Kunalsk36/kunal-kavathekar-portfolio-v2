'use client';

import { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { professionalProjects, personalProjects } from '@/data/projects';
import { ExternalLink, Lock, Terminal, Sparkles, Cpu, Smartphone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { cn } from '@/lib/utils';

/* ─── Image Fit & Positioning Helper ────────────────────────────────── */
const getImageFitClass = (id) => {
  if (id === 'blogaura') {
    return 'object-fill object-center';
  }
  const websites = [
    'learnbetter',
    'arthshastra',
    'sahyadri-rural-connect',
    'tech4bharat',
    'humora-technology',
    'kkmusic'
  ];
  if (websites.includes(id)) {
    return 'object-cover object-top';
  }
  // Game and interactive screen shots
  if (id === 'block-banger' || id === 'tic-tac-toe') {
    return 'object-cover object-center';
  }
  return 'object-cover object-center';
};

/* ─── Project Fallback Preview Component ───────────────────────────── */
function ProjectFallback({ project }) {
  let Icon = Terminal;
  let textLabel = 'Project Prototype';

  if (project.projectType === 'Company Project') {
    Icon = Lock;
    textLabel = 'Private Company Solution';
  } else if (project.projectType === 'Research & IP') {
    Icon = Cpu;
    textLabel = 'Research Project';
  } else if (project.projectType === 'Android App') {
    Icon = Smartphone;
    textLabel = 'Android Application';
  } else if (project.category.toLowerCase().includes('ai')) {
    Icon = Sparkles;
    textLabel = 'AI / Intelligent System';
  }

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-surface-elevated to-surface/40 dark:from-[#16171A] dark:to-[#111214] w-full h-full select-none group-hover:from-surface-elevated/80 dark:group-hover:from-[#1A1B1E] transition-colors duration-300">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />

      <Icon className="text-muted w-8 h-8 group-hover:text-orange/80 group-hover:scale-105 transition-all duration-300" strokeWidth={1.5} />

      <span className="uppercase font-mono tracking-widest text-muted mt-2.5 text-[11px] font-medium">
        {textLabel}
      </span>

      {project.privacyStatus === 'private' && (
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-background/50 dark:bg-background/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-edge/30 text-[9px] text-muted select-none">
          <Lock className="w-2.2 h-2.2 text-orange" strokeWidth={2} />
          <span className="font-mono tracking-wide font-medium">CONFIDENTIAL</span>
        </div>
      )}
    </div>
  );
}

/* ─── Project Card Component ────────────────────────────────────────── */
const ProjectCard = forwardRef(({ project, index = 0, className }, ref) => {
  const hasLinks = project.github || project.liveDemo;
  const isPrivate = project.privacyStatus === 'private';

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.08,
      }}
      className={cn(
        "group flex flex-col h-full bg-surface border rounded-[14px] overflow-hidden select-none",
        "border-edge/60 dark:border-[rgba(255,255,255,0.08)]",
        "dark:bg-[#111214]",
        "shadow-[0_4px_20px_rgba(0,0,0,0.02),0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-none",
        "transition-all duration-300 ease-out",
        "hover:border-edge/90 dark:hover:border-[rgba(255,255,255,0.15)]",
        "hover:bg-surface-elevated/40 dark:hover:bg-[#16171A]",
        className
      )}
    >
      {/* 1. Project Preview */}
      <div className="overflow-hidden relative w-full h-[140px] md:h-[180px] border-b border-edge/20 dark:border-[rgba(255,255,255,0.08)] shrink-0">
        {project.id === 'kknotes' ? (
          <div className="relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 dark:from-[#1A1A1E] dark:to-[#111214] flex items-center justify-center overflow-hidden">
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            {/* Mockup container */}
            <div className="flex gap-4 items-center justify-center h-[90%] relative z-10 translate-y-2 group-hover:translate-y-1 transition-transform duration-500">
              {/* Left Phone */}
              <div className="relative h-full aspect-[9/19] rounded-[8px] border-[1.5px] border-neutral-700/80 bg-neutral-950 shadow-2xl overflow-hidden transform -rotate-3 group-hover:-rotate-1 transition-all duration-500">
                <img
                  src="/images/projects/kknotes/screen-01.png"
                  alt="KKNotes Screen 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Right Phone */}
              <div className="relative h-full aspect-[9/19] rounded-[8px] border-[1.5px] border-neutral-700/80 bg-neutral-950 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-1 transition-all duration-500">
                <img
                  src="/images/projects/kknotes/screen-02.png"
                  alt="KKNotes Screen 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className={cn(
              "w-full h-full transition-transform duration-500 group-hover:scale-[1.03]",
              getImageFitClass(project.id)
            )}
            loading="lazy"
          />
        ) : (
          <ProjectFallback project={project} />
        )}
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col flex-1 p-5 lg:p-7">
        {/* 2. Title and Type Badge Row */}
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <h4 className="text-[16px] md:text-[19px] lg:text-[20px] font-bold text-foreground tracking-tight leading-tight">
            {project.title}
          </h4>

          {/* Subtle outline project type badge */}
          <span className="border border-orange/30 dark:border-orange/20 text-orange dark:text-orange/90 rounded-full px-2 py-0.5 lg:px-2.5 text-[9.5px] md:text-[10.5px] lg:text-[11px] font-semibold tracking-wide uppercase select-none shrink-0">
            {project.projectType}
          </span>
        </div>

        {/* 3. Full Description */}
        <p className="text-[13.5px] md:text-[14px] text-secondary leading-relaxed mt-2.5 md:mt-3 lg:mt-4 mb-3 md:mb-4">
          {project.description}
        </p>

        {/* Flex spacer to align cards in row */}
        <div className="flex-grow" />

        {/* 4. Technology Tags */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 lg:mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-surface-elevated/50 dark:bg-white/[0.03] border border-edge/30 dark:border-white/[0.06] rounded px-1.5 py-0.5 md:px-2 text-[11px] md:text-[11.5px] font-mono text-muted dark:text-neutral-400 tracking-tight select-none"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 5. Footer Actions */}
        {(hasLinks || isPrivate) ? (
          <div className="pt-3 md:pt-4 border-t border-edge/30 flex items-center justify-between min-h-[36px] md:min-h-[40px] shrink-0">
            {hasLinks ? (
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] text-foreground/85 hover:text-orange transition-colors duration-200 font-semibold hover:underline underline-offset-4"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] text-foreground/85 hover:text-orange transition-colors duration-200 font-semibold hover:underline underline-offset-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            ) : isPrivate ? (
              <span className="text-[11.5px] text-muted italic flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-orange/60" />
                <span>Source code private due to company confidentiality.</span>
              </span>
            ) : null}
          </div>
        ) : (
          <div className="min-h-[36px] md:min-h-[40px] pt-3 md:pt-4 border-t border-transparent shrink-0" />
        )}
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = 'ProjectCard';

/* ─── Projects Section ────────────────────────────────────────────── */
export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollAnchorRef = useRef(null);
  const firstNewProjectRef = useRef(null);

  // Filter projects by 'featured' property
  const visibleProfessional = isExpanded
    ? professionalProjects
    : professionalProjects.filter((p) => p.featured);

  const visiblePersonal = isExpanded
    ? personalProjects
    : personalProjects.filter((p) => p.featured);

  const hasMoreProjects = professionalProjects.some((p) => !p.featured) || personalProjects.some((p) => !p.featured);
  const firstNewProfessionalId = professionalProjects.find(p => !p.featured)?.id;

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      if (firstNewProjectRef.current) {
        firstNewProjectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    // Wait for the collapse animation (500ms) to complete so the page height settles
    setTimeout(() => {
      const element = scrollAnchorRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        // Align the bottom of the button container with the bottom of the viewport
        // with an extra 60px padding for breathing room
        const targetScrollY = absoluteTop - window.innerHeight + rect.height + 60;
        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      }
    }, 600);
  };

  return (
    <section
      id="projects"
      aria-label="Projects Portfolio"
      className="relative bg-background border-t border-edge/30 py-10"
    >
      <Container>
        {/* Section label */}
        <SectionHeading index="03" label="PROJECTS" className="mb-4 md:mb-6" />

        {/* Main Heading */}
        <h3 className="text-[26px] md:text-[32px] xl:text-[42px] font-bold leading-[1.1] tracking-tight text-foreground mb-6 md:mb-8 lg:mb-10">
          Selected Work
        </h3>

        {/* ── Professional Projects ── */}
        <div>
          <span className="text-[11px] lg:text-[11.5px] font-semibold uppercase tracking-wider text-muted mb-4 lg:mb-6 block select-none">
            03.1 — Professional Work
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProfessional.map((project, i, arr) => {
                const isFirstNew = project.id === firstNewProfessionalId;
                const isLastOdd = arr.length % 2 !== 0 && i === arr.length - 1;
                return (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                    index={i}
                    ref={isFirstNew ? firstNewProjectRef : null}
                    className={cn(isLastOdd && "md:col-span-2 md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] md:mx-auto")}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Personal & Research Projects ── */}
        <div className="mt-8 md:mt-16 lg:mt-20">
          <span className="text-[11px] lg:text-[11.5px] font-semibold uppercase tracking-wider text-muted mb-4 lg:mb-6 block select-none">
            03.2 — Personal &amp; Research Work
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visiblePersonal.map((project, i, arr) => {
                const isLastOdd = arr.length % 2 !== 0 && i === arr.length - 1;
                return (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={i} 
                    className={cn(isLastOdd && "md:col-span-2 md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] md:mx-auto xl:col-span-1 xl:w-full xl:mx-0")}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Expand Toggle Button ── */}
        {hasMoreProjects && (
          <div ref={scrollAnchorRef} className="mt-8 md:mt-12 flex justify-center">
            <Button
              type="button"
              variant="secondary"
              size="md"
              onClick={isExpanded ? handleCollapse : handleExpand}
              className="px-6 py-2.5 font-medium flex items-center gap-2 select-none"
            >
              {isExpanded ? 'Show Less Projects' : 'View More Projects'}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Projects;
