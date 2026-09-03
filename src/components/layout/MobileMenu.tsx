"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import type { NavLink } from "./Navbar";

function HamburgerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

interface MobileMenuProps {
  links: NavLink[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
        const target = event.target as HTMLElement;
        const clickedFocusable = target.closest(
          'a[href], button, input, select, textarea, [tabindex]',
        );
        if (!clickedFocusable) {
          // Prevent the browser's default focus-follows-click behavior
          // (which would otherwise move focus to <body> after this
          // handler runs) so our explicit focus restoration sticks.
          event.preventDefault();
          triggerRef.current?.focus();
        }
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative col-start-1 flex md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? t("a11y.menu_close") : t("a11y.menu_open")}
        aria-expanded={open}
        className="focus-ring border-border-glass text-text-primary hover:text-accent flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      {open && (
        <div className="navbar-glass absolute top-full left-0 mt-3 w-48 rounded-2xl p-2">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring text-text-primary hover:text-accent block rounded-full px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
