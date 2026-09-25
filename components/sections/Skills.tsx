import { SectionCard } from "@/components/ui/SectionCard";
import { SkillChip } from "@/components/ui/SkillChip";
import { StatusPill } from "@/components/ui/StatusPill";
import { sectionFiles } from "@/data/navigation";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { GiArtificialHive } from "react-icons/gi";
import type { SkillGroup as SkillGroupData } from "@/types";

function SkillGroup({ label, variant, items }: SkillGroupData) {
  const labelId = `skills-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div>
      <h3
        id={labelId}
        className="mb-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-muted"
      >
        {label}
      </h3>
      <ul aria-labelledby={labelId} className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <li key={skill.name}>
            <SkillChip name={skill.name} icon={skill.icon} variant={variant} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <SectionCard
      id="skills"
      filename={sectionFiles.skills}
      tag={skills.tag}
      title={skills.title}
    >
      <div className="space-y-7">
        {skills.groups.map((group) => (
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>

      <StatusPill className="mt-8">
        Currently exploring: <GiArtificialHive />{profile.exploring}
      </StatusPill>
    </SectionCard>
  );
}
