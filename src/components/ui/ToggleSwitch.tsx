"use client";

import type { ReactNode } from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
  thumbContent: ReactNode;
}

export function ToggleSwitch({
  checked,
  onChange,
  ariaLabel,
  thumbContent,
}: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onChange}
      className="focus-ring border-border-glass bg-glass-fill relative inline-flex h-9 w-[72px] shrink-0 items-center rounded-full border p-1 backdrop-blur-[24px] backdrop-saturate-150"
    >
      <span
        aria-hidden="true"
        className={`bg-accent flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold text-white transition-transform duration-200 ease-in-out ${
          checked ? "translate-x-9" : "translate-x-0"
        }`}
      >
        {thumbContent}
      </span>
    </button>
  );
}
