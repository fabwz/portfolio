# DESIGN.md — Fabián Zamora Portfolio

Reference document for visual identity and the design system. Serves as the single source of truth for both visual generation (Claude Design) and implementation (Claude Code). Any visual value used in the project must come from here — do not improvise new values without updating this document first.

---

## 1. Concept and design direction

**Style:** "Liquid Glass" — exaggerated glassmorphism (bold and obvious, not subtle) combined with an overall minimalist layout. The glass effect should clearly stand out as the site's visual signature, without saturating the composition or affecting content readability.

**Feeling to convey:** modern, premium, technical but warm (not cold/corporate). A student portfolio with serious design judgment, not a generic template.

**Inspiration references** (not to be copied literally, used only as direction): inspiration.vasa.works, liquidglassdesign.com — floating oval navbar, buttons with fill-on-hover, mixed serif/sans-serif typography.

**Default mode:** Dark mode. Functional toggle to Light mode available to the user.

---

## 2. Color palette

### Dark mode (default)

| Token | Usage | Value |
|---|---|---|
| `--bg-base` | Base background | `#0A0A0F` |
| `--bg-surface` | Secondary background (cards, surfaces) | `#12121A` |
| `--blob-primary` | Primary blurred blob | `#7C3AED` |
| `--blob-secondary` | Secondary blurred blob | `#4C1D95` |
| `--accent` | Accent/brand (button hover, links, focus) | `#8B5CF6` |
| `--text-primary` | Primary text | `#F5F5F7` |
| `--text-secondary` | Secondary text | `#F5F5F7` at 72% opacity |
| `--border-glass` | Borders of glass elements | `rgba(255,255,255,0.14)` |
| `--glass-fill` | Base fill of glass surfaces | `rgba(255,255,255,0.08)` |

### Light mode

| Token | Usage | Value |
|---|---|---|
| `--bg-base` | Base background | `#FAFAFA` |
| `--bg-surface` | Secondary background (cards) | `#F2F0F7` |
| `--blob-primary` | Primary blurred blob | `#C4B5FD` |
| `--blob-secondary` | Secondary blurred blob | `#DDD6FE` |
| `--accent` | Accent/brand (identical to dark, brand consistency) | `#8B5CF6` |
| `--text-primary` | Primary text | `#18181B` |
| `--text-secondary` | Secondary text | `#18181B` at 72% opacity |
| `--border-glass` | Borders of glass elements | `rgba(0,0,0,0.10)` |
| `--glass-fill` | Base fill of glass surfaces | `rgba(0,0,0,0.05)` |

**Text hierarchy rule:** primary and secondary text share the same base color in each mode; hierarchy is achieved solely through opacity (72%), never through a different color tone. Do not introduce intermediate grays as a text color.

**Accent consistency rule:** `--accent` (`#8B5CF6`) is identical in both modes — it's the personal brand color and must not vary when switching themes.

---

## 3. Typography

| Usage | Font | Suggested weight |
|---|---|---|
| Large headings (Hero, section headers) | **Instrument Serif**, italic | Regular/Italic |
| Everything else (navigation, paragraphs, buttons, UI) | **Geist** | Regular (400) / Medium (500) for emphasis |

- Load both via `next/font` (Google Fonts), no external CDN.
- Use the serif/sans-serif mix sparingly: only large titles use Instrument Serif. Everything else is Geist.
- No logo or graphic wordmark — the navbar uses only the name as text (Geist).

---

## 4. "Liquid Glass" effect — technical specification

The effect must be **bold and obvious** (not timid glassmorphism). Base specification for any glass surface:

```css
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
background: var(--glass-fill);
border: 1px solid var(--border-glass);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24); /* dark mode */
```

- High blur (18–24px) so the blur of the content behind is clearly perceptible.
- Background blobs must be large/saturated enough for the blur to have something visually interesting to blur (a flat background behind the glass doesn't showcase the effect).
- Avoid applying the glass effect to too many small elements simultaneously in the same view (visually saturates) — reserve it for key pieces: navbar, buttons, cards, settings panel.

---

## 4.1 Focus state (keyboard accessibility)

Every interactive element (buttons, nav links, the gear icon, form controls if any) must have a visible `focus` state, distinct from `hover`, so keyboard navigation (Tab) is always perceivable. Not optional — this is the accessibility baseline for the project (see also section 9 checklist).

Base specification:

```css
outline: none; /* remove default browser outline */
box-shadow: 0 0 0 2px var(--bg-base), 0 0 0 4px var(--accent);
```

- Use `:focus-visible` (not plain `:focus`) so the ring only appears on keyboard navigation, not on mouse clicks.
- The ring color is always `--accent` (`#8B5CF6`), consistent in both dark and light mode — same principle as the accent consistency rule in section 2.
- The inner offset (`var(--bg-base)`) creates a visible gap between the element and the ring so it reads clearly against the glass surfaces.
- On `rounded-full` elements (buttons, navbar), the ring inherits the same border-radius so it doesn't look squared-off against a pill shape.

---

## 5. Components

### Navbar
- Shape: `rounded-full` (pill), floating, horizontally centered with top margin.
- Exaggerated glass effect (see section 4).
- Scroll behavior: on scrolling down, `--glass-fill` increases its opacity (from ~8% to ~20%) to improve readability over content passing behind it. Position: `fixed`/`sticky`, without changing size.
- Content: name as text (Geist medium) on the left, navigation links in the center/right, gear icon (⚙) on the far right that opens the settings panel (ES/EN language + light/dark theme).
- Mobile: collapses into a menu icon (hamburger) within the same glass pill; opens a drawer/panel with the links.

### Buttons

**Primary** (e.g. "Contact me", main CTA)
- Base state: subtle glass fill (`--glass-fill` + `--border-glass` border).
- Hover: fills completely with `--accent`, text switches to white/high contrast, 200–250ms transition.
- Shape: `rounded-full`.

**Secondary** (e.g. internal links, "View project")
- Base state: no fill, only `--border-glass` border.
- Hover: border intensifies + a very light glass fill appears (without reaching the solid fill of the primary button).
- Shape: `rounded-full`.

### Cards (projects, etc.)
- Glass effect more subtle than the navbar (lower blur, ~12px; lower `--glass-fill`).
- Shape: `rounded-2xl` (16px).
- Hover: slight elevation (`translateY(-4px)`) + intensified glass border.
- Visual content (screenshots/GIFs) as the protagonist — the glass shouldn't compete with the content.

### Settings panel (gear icon)
- Same glass treatment as the navbar.
- Contains: light/dark theme toggle + ES/EN language selector.

### Focus state (keyboard navigation)
- Every interactive element (nav links, buttons, gear icon, hamburger menu, cards if focusable) must show a visible focus state when navigated via `Tab`.
- Specification: `2px solid var(--accent)` outline (or Tailwind `ring-2 ring-[--accent]`), with `2px` offset from the element's edge, applied via `:focus-visible` (not plain `:focus`, to avoid showing the ring on mouse clicks — only on keyboard navigation).
- The focus ring uses the same `--accent` color in both modes, consistent with the button hover fill — reinforces it as "the interactive color" across the site.
- Icon-only buttons (gear icon, hamburger) additionally require an `aria-label` (see `CONTENT.md`, section 7) since they have no visible text for assistive technology.

---

## 6. Spacing and borders

- **Radii:** only two scales.
  - `rounded-full` → navbar, buttons, badges, settings panel (the characteristic "pill" look).
  - `rounded-2xl` (16px) → cards and large containers.
  - No intermediate radii.
- **Spacing:** Tailwind's default scale (4px base), no customization.
- **Content container:** `max-w-6xl` centered, with responsive side padding (`px-4` mobile → `px-8` desktop, fine-tune during implementation).

---

## 7. Animations and microinteractions

| Element | Animation | Detail |
|---|---|---|
| Hero avatar | Continuous floating | `translateY` oscillating ±8px, infinite loop, 4–6s, `ease-in-out` |
| Buttons (hover) | Color/fill transition | 200–250ms |
| Sections on scroll | Fade-in + subtle shift | `opacity` 0→1, `translateY` 20px→0, via `IntersectionObserver` (no libraries) |
| Theme change (dark/light) | Smooth color transition | ~300ms on background and text, avoids abrupt jump |
| Background blobs | Optional slow movement | To be confirmed during implementation based on performance impact; if implemented, must be extremely subtle and slow |

---

## 8. Responsive / Mobile

- Standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`) — no custom breakpoints.
- **Navbar:** collapses into a hamburger menu within the glass pill (see section 5).
- **Blurred blobs:** reduced in size/quantity on mobile, prioritizing performance on lower-end devices.
- **Hero avatar:** reduces in size and moves to be centered above the text (instead of beside it) on narrow layouts.

---

## 9. General principles (checklist before adding any new element)

- Is the glass effect on this element evident but not competing with the content?
- Is the same typographic pairing being used (Instrument Serif only for large titles, Geist for everything else)?
- Are the colors used within this document's palette (no improvised new tones)?
- Does the element have a defined mobile version?
- Is text hierarchy resolved with opacity, not with a different secondary color?

---

*Last updated: defined jointly during the architecture and design phase of the portfolio, prior to implementation in Next.js + Tailwind CSS.*
