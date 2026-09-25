import { SectionCard } from "@/components/ui/SectionCard";
import { about } from "@/data/about";
import { sectionFiles } from "@/data/navigation";

export function About() {
  return (
    <SectionCard
      id="about"
      filename={sectionFiles.about}
      tag={about.tag}
      title={about.title}
    >
      <div className="max-w-[66ch] space-y-4 text-[0.92rem] leading-relaxed text-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul aria-label="Traits" className="mt-6 flex flex-wrap gap-2">
        {about.traits.map((trait) => (
          <li
            key={trait}
            className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.72rem] font-semibold text-aqua"
          >
            {trait}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
