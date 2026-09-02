"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function About() {
  const { t } = useTranslation();
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-revealed={isRevealed}
      className="scroll-reveal relative z-[5] mx-auto max-w-6xl px-4 py-16 md:px-8"
    >
      <h2 className="font-serif text-text-primary mx-auto max-w-2xl text-3xl italic sm:text-4xl">
        {t("nav.about")}
      </h2>
      <div className="text-text-secondary mx-auto mt-8 flex max-w-2xl flex-col gap-4">
        <p className="text-base sm:text-lg">{t("about.paragraph1")}</p>
        <p className="text-base sm:text-lg">{t("about.paragraph2")}</p>
        <p className="text-base sm:text-lg">{t("about.paragraph3")}</p>
      </div>
    </div>
  );
}
