"use client";

import { useEffect, useState } from "react";
import type { DictionaryKey } from "@/lib/i18n/dictionary";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { MobileMenu } from "./MobileMenu";
import { SettingsPanel } from "./SettingsPanel";

export interface NavLink {
  key: DictionaryKey;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav
        data-scrolled={scrolled}
        className="navbar-glass border-border-glass grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-[24px] backdrop-saturate-150 md:flex md:w-fit md:gap-6 md:px-4 md:py-2"
      >
        <MobileMenu links={NAV_LINKS} />

        <ul className="col-start-2 hidden items-center justify-center gap-4 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="focus-ring text-text-primary hover:text-accent rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="col-start-3 flex justify-end">
          <SettingsPanel />
        </div>
      </nav>
    </header>
  );
}
