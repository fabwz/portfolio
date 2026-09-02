"use client";

import { useEffect, useState } from "react";

/**
 * Continuous scroll tracking: returns the id of the section currently most
 * in-view, updated live via IntersectionObserver (unlike useScrollReveal,
 * this never disconnects — it keeps tracking for the page's lifetime).
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveId(mostVisible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    // The center band above never reaches the last section when the page
    // doesn't scroll far enough past it (e.g. a short final section with
    // just a footer beneath) — without this, its nav link could never
    // activate. Falls back to marking it active once the page bottoms out.
    function handleReachedBottom() {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    }
    window.addEventListener("scroll", handleReachedBottom, { passive: true });
    handleReachedBottom();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleReachedBottom);
    };
  }, [sectionIds]);

  return activeId;
}
