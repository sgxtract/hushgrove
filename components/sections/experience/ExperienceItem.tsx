import { SkillChip } from "@/components/ui/SkillChip";
import { skillIcons } from "@/data/skills";
import { formatDuration, formatYearMonth, monthsBetween } from "@/lib/date";
import type { ExperienceItem as ExperienceItemData } from "@/types";

interface ExperienceItemProps {
  item: ExperienceItemData;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  const {
    role,
    company,
    employmentType,
    location,
    startDate,
    endDate,
    highlights,
    tags,
  } = item;
  const duration = formatDuration(monthsBetween(startDate, endDate));

  return (
    <article className="grid gap-3 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
      <div className="font-mono text-[0.7rem] leading-relaxed sm:pt-1">
        <p className="text-muted">
          <time dateTime={startDate}>{formatYearMonth(startDate)}</time>
          {" — "}
          {endDate ? (
            <time dateTime={endDate}>{formatYearMonth(endDate)}</time>
          ) : (
            "Present"
          )}
        </p>
        <p className="text-blue">{duration}</p>
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold leading-snug">{role}</h3>
        <p className="mt-1 text-[0.8rem] text-muted">
          {[company, employmentType, location].join(" · ")}
        </p>

        <ul className="mt-3.5 space-y-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2.5 text-[0.88rem] leading-relaxed text-muted"
            >
              <span aria-hidden="true" className="text-green/70">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <ul aria-label={`${role} skills`} className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <SkillChip name={tag} icon={skillIcons.get(tag)} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
