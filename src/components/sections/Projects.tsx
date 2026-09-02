"use client";

import type { IconType } from "react-icons";
import { SiGithub, SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/i18n/useTranslation";

// DESIGN.md "Tech stack icons" — official brand marks via react-icons/si,
// keyed by the exact stack label in data/projects.ts.
const STACK_ICONS: Record<string, IconType> = {
  "JavaScript (Vanilla)": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
};

export function Projects() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const project = projects[0];

  return (
    <div
      ref={ref}
      data-revealed={isRevealed}
      className="scroll-reveal relative z-[5] mx-auto max-w-6xl px-4 py-16 md:px-8"
    >
      <h2 className="text-text-primary mx-auto max-w-2xl font-serif text-3xl italic sm:text-4xl">
        {t("nav.projects")}
      </h2>

      <Card className="mx-auto mt-8 max-w-3xl">
        <video
          src={isRevealed ? project.mediaPath : undefined}
          preload="none"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-xl"
        />

        <h3 className="text-text-primary mt-6 text-xl font-medium sm:text-2xl">
          {t(project.titleKey)}
        </h3>
        <p className="text-text-secondary mt-3 text-base sm:text-lg">
          {t(project.descriptionKey)}
        </p>
        <p className="text-text-secondary mt-4 text-base sm:text-lg">
          {t(project.highlightKey)}
        </p>

        <div className="text-text-secondary mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {project.stack.map((tag) => {
            const Icon = STACK_ICONS[tag];
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-sm"
              >
                {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                {tag}
              </span>
            );
          })}
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary focus-ring text-text-primary mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
        >
          <SiGithub className="h-4 w-4" aria-hidden="true" />
          {t(project.ctaKey)}
        </a>
      </Card>
    </div>
  );
}
