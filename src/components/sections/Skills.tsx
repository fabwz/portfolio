"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
} from "react-icons/fi";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/i18n/useTranslation";
import type { DictionaryKey } from "@/lib/i18n/dictionary";

// DESIGN.md "Skills category icons" — generic/conceptual icons via
// react-icons/fi, keyed by category label key.
const CATEGORY_ICONS: Partial<Record<DictionaryKey, IconType>> = {
  "skills.languages": FiCode,
  "skills.frontend": FiLayout,
  "skills.backend": FiServer,
  "skills.databases": FiDatabase,
  "skills.tools": FiTool,
};

export function Skills() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-revealed={isRevealed}
      className="scroll-reveal relative z-[5] mx-auto max-w-6xl px-4 py-16 md:px-8"
    >
      <h2 className="text-text-primary mx-auto max-w-2xl text-center font-serif text-3xl italic sm:text-4xl">
        {t("nav.skills")}
      </h2>
      <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-base sm:text-lg">
        {t("skills.intro")}
      </p>

      <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-10">
        {skillCategories.map((category, index) => {
          const Icon = CATEGORY_ICONS[category.labelKey];
          return (
            <div
              key={category.labelKey}
              className="stagger-child flex flex-col items-center"
              style={
                { "--stagger-delay": `${index * 70}ms` } as CSSProperties
              }
            >
              <h3 className="text-text-primary flex items-center justify-center gap-2 text-base font-medium">
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                {t(category.labelKey)}
              </h3>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {category.items.map((item) => (
                  <Badge key={item}>
                    {item}
                    {item === category.learningItem && (
                      <span className="text-text-primary/85 ml-1 text-[11px] italic">
                        ({t("skills.learning_tag")})
                      </span>
                    )}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
