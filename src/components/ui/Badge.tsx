import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

// DESIGN.md section 5 "Badge" — minimal glass pill, no accent color, no
// icon, not interactive/hoverable.
export function Badge({ children }: BadgeProps) {
  return (
    <span className="bg-glass-fill border-border-glass text-text-primary rounded-full border px-3 py-1 text-xs font-medium sm:text-[13px]">
      {children}
    </span>
  );
}
