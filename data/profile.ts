import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Nestor Jr. Agnis",
  role: "Full Stack Developer",
  location: "Philippines",
  availability: "Available for work",
  bio: "I build fast, reliable web apps end to end from PostgreSQL schemas to polished React interfaces with a growing focus on practical AI-driven tools.",
  avatar: "/avatar.png",
  resumeUrl: "/resume.pdf",
  email: "njagnis@gmail.com",
  featuredStack: ["Next.js", "TypeScript", "PostgreSQL"],
  exploring: "AI-driven tools",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/sgxtract",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tonagnis/",
      icon: FaLinkedin,
    },
    {
      label: "Discord",
      href: "https://discord.com/users/329884902277382144",
      icon: FaDiscord,
    },
  ],
};
