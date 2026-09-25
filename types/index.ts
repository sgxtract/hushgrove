import type { ComponentType } from "react";

/** Any icon component: works with both lucide-react and react-icons */
export type IconComponent = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean;
}>;

export interface Profile {
  name: string;
  role: string;
  location: string;
  availability: string;
  bio: string;
  avatar?: string; // path in /public, e.g. "/avatar.jpg"
  resumeUrl: string;
  email: string;
  featuredStack: string[];
  exploring: string;
  socials: SocialLink[];
}

export interface Skill {
  name: string;
  icon?: IconComponent;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export type ProjectStatus = "in-progress" | "completed";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: ProjectStatus;
  sourceUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType: string;
  location: string;
  startDate: string; // "YYYY-MM"
  endDate: string | null; // null = Present
  highlights: string[];
  tags: string[];
}

export interface NavLink {
  id: string; // matches the section's id, e.g. "about"
  label: string; // tab text, e.g. "about.tsx"
}
