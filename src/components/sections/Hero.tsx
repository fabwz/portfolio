"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";

export function Hero() {
  const { t } = useTranslation();
  const ctaRef = useRef<HTMLAnchorElement>(null);

  function updateFillPosition(event: React.MouseEvent<HTMLAnchorElement>) {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--btn-x", `${event.clientX - rect.left}px`);
    btn.style.setProperty("--btn-y", `${event.clientY - rect.top}px`);
  }

  function handleFillEnter(event: React.MouseEvent<HTMLAnchorElement>) {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const diagonal = Math.hypot(rect.width, rect.height);
    btn.style.setProperty("--btn-spread", `${diagonal * 2}px`);
    updateFillPosition(event);
  }

  return (
    <div className="relative z-[5] mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 pt-40 pb-16 md:flex-row md:justify-start md:gap-8 md:px-8 md:pt-48">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="font-serif text-text-primary hero-title-glow max-w-xl text-4xl italic sm:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="text-text-secondary dark:text-[#B4B4C4] mt-6 max-w-md text-base sm:text-lg">
          {t("hero.tagline")}
        </p>
        <a
          ref={ctaRef}
          href="#contact"
          onMouseEnter={handleFillEnter}
          onMouseMove={updateFillPosition}
          className="navbar-glass btn-primary focus-ring mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium"
        >
          {t("hero.cta")}
        </a>
      </div>

      <div className="avatar-float relative h-64 w-64 shrink-0 overflow-hidden rounded-full sm:h-80 sm:w-80 md:ml-auto md:mr-8 md:h-48 md:w-48 lg:mr-16 lg:h-96 lg:w-96">
        <Image
          src="/images/avatar/hero-avatar.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 384px, 256px"
          className="scale-[1.08] object-cover"
          style={{ objectPosition: "40% 46%" }}
        />
      </div>
    </div>
  );
}
