import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SkillChip } from "@/components/ui/SkillChip";
import { skillIcons } from "@/data/skills";
import { GrMysql } from "react-icons/gr";
import { cn } from "@/lib/utils";
import type { IconComponent, Project, ProjectStatus } from "@/types";

const statusStyles: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  "in-progress": {
    label: "In progress",
    className: "border-blue/35 bg-blue/15 text-blue",
  },
  completed: {
    label: "Completed",
    className: "border-green/35 bg-green/12 text-green",
  },
};

interface ProjectLinkProps {
  href: string;
  label: string;
  projectTitle: string;
  icon: IconComponent;
}

function ProjectLink({
  href,
  label,
  projectTitle,
  icon: Icon,
}: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-sm font-mono text-xs font-semibold text-muted transition-colors duration-200 hover:text-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
    >
      <Icon className="size-3.5 shrink-0" aria-hidden />
      {label}
      <span className="sr-only"> for {projectTitle}</span>
    </a>
  );
}

interface ProjectItemProps {
  project: Project;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
  const { title, description, tags, status, sourceUrl, liveUrl } = project;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid gap-2 sm:grid-cols-[3rem_1fr]">
      <span
        aria-hidden="true"
        className="font-mono text-xs text-muted sm:pt-1.5"
      >
        {number}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-display text-lg font-bold leading-snug">
            {title}
          </h3>

          {status && (
            <span
              className={cn(
                "rounded-full border px-2 py-0.5 font-mono text-[0.66rem] font-bold",
                statusStyles[status].className,
              )}
            >
              {statusStyles[status].label}
            </span>
          )}

          {(sourceUrl || liveUrl) && (
            <div className="flex items-center gap-4 sm:ml-auto">
              {sourceUrl && (
                <ProjectLink
                  href={sourceUrl}
                  label="Source"
                  projectTitle={title}
                  icon={FaGithub}
                />
              )}
              {liveUrl && (
                <ProjectLink
                  href={liveUrl}
                  label="Live"
                  projectTitle={title}
                  icon={ArrowUpRight}
                />
              )}
            </div>
          )}
        </div>

        <p className="mt-2.5 max-w-[70ch] text-[0.9rem] leading-relaxed text-muted">
          {description}
        </p>

        <ul
          aria-label={`${title} tech stack`}
          className="mt-4 flex flex-wrap gap-2"
        >
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
