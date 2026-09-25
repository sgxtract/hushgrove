import { Navbar } from "@/components/layout/navbar/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/hero/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/projects/Projects";
import { Experience } from "@/components/sections/experience/Experience";
import { SectionCard } from "@/components/ui/SectionCard";
import { navLinks } from "@/data/navigation";

// Rebuild the page daily so "Present" durations stay current
export const revalidate = 86400;

const builtSections = ["about", "skills", "projects", "experience"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {navLinks
          .filter(({ id }) => !builtSections.includes(id))
          .map(({ id, label }) => (
            <SectionCard
              key={id}
              id={id}
              filename={label}
              tag={id}
              title={`Placeholder for ${id}`}
            >
              <div className="h-[60vh]" />
            </SectionCard>
          ))}
      </main>
    </>
  );
}
