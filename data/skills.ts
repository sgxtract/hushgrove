import { FaCss3Alt, FaMicrosoft } from "react-icons/fa6";
import { AiFillOpenAI } from "react-icons/ai";
import {
  SiClaude,
  SiGit,
  SiGithub,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import type { SkillsContent } from "@/types";

export const skills: SkillsContent = {
  tag: "tech stack",
  title: "Tools I reach for the most, and a few I'm adding.",
  groups: [
    {
      label: "Main skills",
      variant: "primary",
      items: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Linux Ubuntu", icon: SiUbuntu },
        { name: "VS Code", icon: VscVscode },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
      ],
    },
    {
      label: "Additional skills",
      variant: "secondary",
      items: [
        { name: "PHP", icon: SiPhp },
        { name: "Laravel", icon: SiLaravel },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
        { name: "Claude AI", icon: SiClaude },
        { name: "OpenAI / ChatGPT", icon: AiFillOpenAI },
        { name: "Google Sheets", icon: SiGooglesheets },
        { name: "Microsoft Apps", icon: FaMicrosoft },
        { name: "MySQL", icon: GrMysql },
      ],
    },
  ],
};

export const skillIcons = new Map(
  skills.groups
    .flatMap((group) => group.items)
    .map((skill) => [skill.name, skill.icon]),
);
