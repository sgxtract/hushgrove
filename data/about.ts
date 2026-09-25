import type { AboutContent } from "@/types";
import { profile } from "./profile";

export const about: AboutContent = {
  tag: "who am i",
  title: "A developer who enjoys turning ideas into working software.",
  paragraphs: [
    `I'm a ${profile.role.toLowerCase()} based in ${profile.location}, focused on building reliable, scalable web applications from the ground up. I enjoy working across the entire stack from designing PostgreSQL schemas to crafting clean, responsive React interfaces.`,
    "Right now I'm deepening my skills in AI-assisted development. When I'm not coding, I'm usually exploring new tools, tinkering with my Linux Ubuntu setup, or taking apart side projects just to see how they work.",
  ],
  traits: [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Explorer",
    "Linux Enthusiast",
    "Lifelong Learner",
  ],
};
