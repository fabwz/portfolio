"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-[5] px-4 py-8 text-center">
      <p className="text-text-secondary text-xs">{t("footer.text")}</p>
    </footer>
  );
}
