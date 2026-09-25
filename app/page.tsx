import { Navbar } from "@/components/layout/navbar/Navbar";
import { SectionCard } from "@/components/ui/SectionCard";
import { navLinks } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {navLinks.map(({ id, label }) => (
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
