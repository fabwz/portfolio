"use client";

import type { ReactNode } from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
  label: string;
  icon?: ReactNode;
}

export function ToggleSwitch({
  checked,
  onChange,
  ariaLabel,
  label,
  icon,
}: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-3">
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
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 ease-in-out ${
            checked
              ? "bg-blob-secondary translate-x-9 text-white"
              : "bg-text-primary/20 text-text-primary translate-x-0"
          }`}
        >
          {icon}
        </span>
      </button>
      <span className="text-text-primary text-sm font-medium">{label}</span>
    </div>
  );
}
