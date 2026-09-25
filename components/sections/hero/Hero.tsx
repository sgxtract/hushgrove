import { CodeCard } from "./CodeCard";
import { HeroIntro } from "./HeroIntro";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative z-10 mx-auto grid max-w-4xl items-center gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16"
    >
      <HeroIntro />
      <CodeCard />
    </section>
  );
}
