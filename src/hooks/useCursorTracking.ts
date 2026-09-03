"use client";

import { useRef } from "react";

// Tracks the cursor position within an element via --btn-x/--btn-y CSS
// custom properties, consumed by .btn-primary's liquid fill and
// .btn-secondary's cursor-tracked glow (see globals.css, DESIGN.md
// section 5 "Buttons").
export function useCursorTracking<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  function updateCursorPosition(event: React.MouseEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--btn-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--btn-y", `${event.clientY - rect.top}px`);
  }

  return { ref, updateCursorPosition };
}
