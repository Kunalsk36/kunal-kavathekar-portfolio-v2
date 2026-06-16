import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Research } from '@/components/sections/Research';
import { Academics } from '@/components/sections/Academics';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Academics />
      <Certifications />
      <Contact />
    </>
  );
}
