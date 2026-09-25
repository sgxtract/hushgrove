import { Navbar } from "@/components/layout/navbar/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/hero/Hero";
import { SectionCard } from "@/components/ui/SectionCard";
import { navLinks } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {navLinks
          .filter(({ id }) => id !== "about")
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
