import { SectionCard } from "@/components/ui/SectionCard";
import { experience } from "@/data/experience";
import { sectionFiles } from "@/data/navigation";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <SectionCard
      id="experience"
      filename={sectionFiles.experience}
      tag={experience.tag}
      title={experience.title}
    >
      <ol className="divide-y divide-line">
        {experience.items.map((item) => (
          <li
            key={`${item.role}-${item.company}`}
            className="py-6 first:pt-2 last:pb-0"
          >
            <ExperienceItem item={item} />
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
