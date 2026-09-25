import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/projects/Projects";
import { Skills } from "@/components/sections/Skills";

// Rebuild the page daily so "Present" durations and the footer year stay current
export const revalidate = 86400;

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
