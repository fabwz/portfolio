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
    <header className="fixed inset-x-0 top-6 z-10 flex justify-center px-4">
      <nav
        data-scrolled={scrolled}
        className="navbar-glass grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full px-2 py-1.5 md:flex md:w-fit md:gap-2 md:px-3 md:py-1.5"
      >
        <MobileMenu links={NAV_LINKS} />

        <ul className="col-start-2 hidden items-center justify-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="focus-ring text-text-primary hover:text-accent rounded-full px-2 py-1 text-sm font-medium transition-colors"
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
