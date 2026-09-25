import type { NavLink } from "@/types";

export const sectionFiles = {
  about: "about.md",
  skills: "skills.ts",
  projects: "projects.tsx",
  experience: "experience.ts",
  contact: "contact.tsx",
} as const;

export type SectionId = keyof typeof sectionFiles;

export const navLinks: NavLink[] = Object.entries(sectionFiles).map(
  ([id, label]) => ({ id, label }),
);
