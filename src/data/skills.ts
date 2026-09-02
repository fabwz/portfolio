import type { SkillCategory } from "@/types";

// CONTENT.md section 4 — Skills
export const skillCategories: SkillCategory[] = [
  {
    labelKey: "skills.languages",
    items: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    labelKey: "skills.frontend",
    items: ["HTML", "CSS", "Tailwind CSS"],
  },
  {
    labelKey: "skills.backend",
    items: ["Flask"],
  },
  {
    labelKey: "skills.databases",
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    labelKey: "skills.tools",
    items: ["Git", "Docker", "Webpack", "Vite"],
    learningItem: "Docker",
  },
];
