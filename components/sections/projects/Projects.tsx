import { SectionCard } from "@/components/ui/SectionCard";
import { sectionFiles } from "@/data/navigation";
import { projects } from "@/data/projects";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <SectionCard
      id="projects"
      filename={sectionFiles.projects}
      tag={projects.tag}
      title={projects.title}
    >
      <ol className="divide-y divide-line">
        {projects.items.map((project, index) => (
          <li key={project.title} className="py-6 first:pt-2 last:pb-0">
            <ProjectItem project={project} index={index} />
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
