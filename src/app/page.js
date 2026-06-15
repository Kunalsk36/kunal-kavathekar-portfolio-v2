import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Research } from '@/components/sections/Research';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />

      {/*
       * Section placeholders — provide scroll targets for Navbar active-section
       * detection and realistic page depth so the Hero can be judged in context
       * of a full website rather than sitting directly above the footer.
       *
       * Min-heights are intentional estimates of each section's final rendered
       * size. Replace each placeholder with its full implementation as phases
       * progress.
       */}
      <Skills />
      <Research />
      <section id="education"  aria-label="Education"   className="min-h-[400px]"  />
      <section id="contact"    aria-label="Contact"     className="min-h-[600px]"  />
    </>
  );
}
