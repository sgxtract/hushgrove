import type { ExperienceContent } from "@/types";

export const experience: ExperienceContent = {
  tag: "experience",
  title:
    "Roles where I've shipped and maintained real systems, not just built demos.",
  items: [
    {
      role: "IT System Analyst",
      company: "Local Government of Sorsogon",
      employmentType: "Contract",
      location: "Sorsogon City, Bicol Region, Philippines",
      startDate: "2024-08",
      endDate: null,
      highlights: [
        "Develop and maintain web-based applications and database-driven systems for local government operations.",
        "Gather requirements from stakeholders and translate them into practical technical solutions.",
        "Own testing, debugging, and quality assurance across deployed systems.",
      ],
      tags: [
        "Next.js",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Tailwind",
        "System Administration",
      ],
    },
    {
      role: "Co-Owner / Operations & IT Support",
      company: "The Rig Builders",
      employmentType: "Self-employed",
      location: "Makati, NCR, Philippines",
      startDate: "2020-07",
      endDate: null,
      highlights: [
        "Co-run day-to-day business operations, staff coordination, and internal workflows.",
        "Manage the company's website, Shopify store, and core business tooling.",
      ],
      tags: ["Leadership", "Operations", "Shopify"],
    },
    {
      role: "DevOps Engineer",
      company: "Chevron Holdings Inc. (Manila Shared Services Center)",
      employmentType: "Internship",
      location: "NCR, Philippines",
      startDate: "2019-12",
      endDate: "2020-03",
      highlights: [
        "Built automated test scripts with Selenium (C#/.NET) and Worksoft Certify.",
        "Supported Selenium Grid setup and Java-based test automation.",
        "Ran automated testing across enterprise systems including SAP, Salesforce, and Maximo.",
      ],
      tags: ["Selenium", "Test Automation", "C#/.NET"],
    },
    {
      role: "Software Quality Assurance Engineer",
      company: "Samsung Electronics",
      employmentType: "Internship",
      location: "Metro Manila, Philippines",
      startDate: "2019-08",
      endDate: "2019-11",
      highlights: [
        "Developed mobile test automation scripts using Selenium and Java.",
        "Performed QA testing and documented findings across test cycles.",
      ],
      tags: ["QA", "Selenium", "Java"],
    },
  ],
};
