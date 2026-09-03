import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

// DESIGN.md section 5 "Cards" — subtler glass than the navbar (~12px blur,
// lower glass-fill), rounded-2xl, hover elevation + intensified border.
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-glass-fill border-border-glass hover:border-accent/40 rounded-2xl border p-6 backdrop-blur-[12px] transition-[translate,border-color] duration-300 ease-out hover:-translate-y-1 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
