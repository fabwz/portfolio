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
| `--blob-primary` | Primary blurred blob | `#160239` |
| `--blob-secondary` | Secondary blurred blob | `#160239` (same hue as primary — blobs are differentiated by size/blur/opacity per instance, not color, per the approved reference) |
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

**Text hierarchy rule:** primary and secondary text share the same base color in each mode by default, with hierarchy achieved through opacity (72%). **Exception:** the Hero tagline specifically uses a dedicated muted hex (`#B4B4C4` in dark mode) instead of the opacity-based approach, per the approved Claude Design reference — this is a deliberate, scoped exception for that one element, not a change to the general rule. Do not extend this hex to other secondary text elsewhere without approval.

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
- **Hero title glow:** the Hero's `<h1>` specifically carries a subtle purple text-shadow (confirmed from the approved reference), simulating ambient light from the background blob positioned behind it:
  ```css
  text-shadow: 0 0 18px rgba(139,92,246,0.55), 0 0 46px rgba(124,58,237,0.35);
  ```
  This is scoped to the Hero title only — do not apply it to other headings without approval, and keep the intensity as specified (subtle), not stronger.

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
- **Exaggerated glass effect — specific parameters (stronger than the generic section 4 baseline, root-cause-corrected after a real legibility bug):**
  ```css
  /* Dark mode */
  background: rgba(10, 10, 15, 0.75);   /* tinted with --bg-base, not white */
  border: 1px solid rgba(255,255,255,0.14);
  backdrop-filter: blur(36px) saturate(200%);
  -webkit-backdrop-filter: blur(36px) saturate(200%);
  box-shadow: 0 8px 32px rgba(0,0,0,0.35),
              inset 0 1px 0 rgba(255,255,255,0.5),
              inset 0 -1px 0 rgba(255,255,255,0.08);

  /* Light mode */
  background: rgba(250, 250, 250, 0.75); /* tinted with --bg-base, not black */
  border: 1px solid rgba(0,0,0,0.10);
  backdrop-filter: blur(36px) saturate(200%);
  -webkit-backdrop-filter: blur(36px) saturate(200%);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12),
              inset 0 1px 0 rgba(255,255,255,0.6),
              inset 0 -1px 0 rgba(0,0,0,0.04);
  ```
  **Why the tint changed from white to each theme's own `--bg-base`:** a white tint (even at higher opacity) doesn't meaningfully reduce contrast against light-colored text passing behind it in dark mode — the earlier version caused a real bug where body text remained legible and bled into the nav links, both becoming unreadable together. Tinting with the theme's own base color (near-black in dark mode, near-white in light mode) actually obscures content behind it, which is the entire point of the effect. This is a correction, not a style preference — do not revert to a white-based tint even at higher opacity.
  The inset highlights simulate a glossy top edge and subtle bottom shadow — this is what makes the glass read as "exaggerated" rather than a flat translucent panel. Apply the same corrected treatment to SettingsPanel and MobileMenu (they already share the navbar's glass treatment per their own subsections below).
- **Appearance stays constant at all scroll positions** — no dynamic opacity change on scroll. The corrected glass treatment above is strong enough on its own to stay legible over any content passing behind it, in both themes. Position: `fixed`/`sticky`, without changing size or appearance.
- Content: no name/logo/wordmark — navigation links centered within the pill, gear icon (⚙) on the far right that opens the settings panel (ES/EN language + light/dark theme). Personal identity is carried by the Hero title ("Soy Fabián Zamora"), not the navbar.
- Mobile: collapses into a menu icon (hamburger) within the same glass pill; opens a drawer/panel with the links.
- **Stacking order (important — prevents background blobs rendering in front of the navbar):** the navbar must have an explicit `z-index: 10` (or higher than the Hero content and background blobs) so it always renders above them regardless of theme.

### Buttons

**Primary** (e.g. "Contact me", main CTA)
- Base state: solid dark purple fill with glass treatment — confirmed exact values from the approved Claude Design export:
  ```css
  background-color: #1E0447;
  border: 1px solid #383246;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 10px 34px rgba(56,30,112,0.4), inset 0 1px 0 rgba(255,255,255,0.4);
  ```
  **These values are fixed and do not change between dark/light theme** — the primary button keeps the same look in both modes, it does not invert like the page background/text does.
- Hover: fills completely with `--accent` (`#7C3AED`), border matches, text switches to white/high contrast, updated glow:
  ```css
  background: #7C3AED;
  border-color: #7C3AED;
  box-shadow: 0 10px 34px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.5);
  ```
  Transition 200–250ms on background/border/box-shadow.
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

### Background blobs (global layer)
- Rendered as a single component, mounted once at the root layout (not duplicated per section).
- Absolutely positioned, `pointer-events: none`, sitting behind all content (lowest z-index).
- **Technique:** solid-color circles (`border-radius: 50%`) with `filter: blur()` — not `radial-gradient`. Confirmed from the approved Claude Design export.
- **Exact values from the approved reference** (3 blobs, all using `--blob-primary`/`--blob-secondary`, i.e. the same near-black purple `#160239`):

| Blob | Position | Size | Blur | Opacity |
|---|---|---|---|---|
| 1 | top-center, overlapping the navbar area (`top: -70px`, `left: 46%` in the reference's coordinate space) | 420×300px | 70px | 0.85 |
| 2 | lower-right | 460×460px | 100px | 0.80 |
| 3 | lower-left | 380×340px | 100px | 0.50 |

- When adapting these to the actual global layer (which spans more viewport height than the reference's single-hero mockup), preserve the *relative composition* — one blob anchored near the top-center behind the navbar, one lower-right, one lower-left — using proportional/percentage positioning rather than copying the literal pixel values verbatim.
- **Baseline:** the page background must still read as predominantly near-black (`--bg-base`) — the blobs are moody, low-key glow, not a bright saturated tint. If in doubt, the blob effect is too strong or too bright.
- **Stacking order (important):** the blob layer must have a low/no explicit `z-index` (e.g. `z-index: 0` or unset) and sit first in the DOM, so it always renders **behind** the navbar (`z-index: 10`) and page content (`z-index: 5`) — in both themes. If blobs appear to render in front of content in either theme, this is a bug, not a style choice.

### Badge
- Shape: `rounded-full`, small pill — smaller footprint than a button.
- Style: minimal glass tint — `--glass-fill` + `--border-glass`, no accent color, no icon or status-dot decoration (per the Claude Design exploration: the plain minimal-glass option was approved, the accent-tinted "active state" dot variant was explicitly rejected as feeling generic/templated).
- Text: Geist, small size (~12-13px), medium weight.
- No hover/interactive state — it's a static label, not clickable.
- Usage: reserved for potential future use (e.g. Skills section) — **not used for the Projects stack tags**, see "Tech stack icons" below instead, which replaced the original badge-based approach after review.

### Tech stack icons (Projects)
- Technology stack tags on project cards are **not** pill/badge shaped — they're a plain inline row of brand icon + text label, no background/border/fill at all. This was a deliberate simplification after the badge-pill approach felt too generic/templated.
- Icons: official brand marks via the `react-icons` package (Simple Icons subset, e.g. `react-icons/si`) — justified dependency for accurate, recognizable logos (JavaScript, Tailwind CSS, Vite, GitHub). Don't hand-draw brand logos.
- Color: **monochrome**, matching secondary text color/opacity for the current theme (not the `--accent` purple) — purple is reserved exclusively for interactive elements (hover, focus, active states) elsewhere in the design system; these icons are static labels, not interactive, so they shouldn't borrow the "interactive" color signal.
- If a technology has no official brand mark (e.g. a generic web API rather than a product), omit it from the stack list entirely rather than using a generic/unrelated icon or leaving it text-only inconsistent with the rest.
- The "View on GitHub" link (Secondary button style) also uses the GitHub mark from the same icon set, for visual consistency.

### Skills category icons
- Each Skills category heading (Languages, Frontend, Backend, Databases, Tools & Others) carries a small generic/conceptual icon before its label — e.g. `</>` for Languages, a database icon for Databases — **not** brand logos (different from the Projects tech stack icons, which are brand marks for specific technologies). Since these are conceptual rather than brand-specific, every category can consistently have one, avoiding the inconsistency problem that ruled out per-technology icons here.
- Source: `react-icons` (already installed for Projects) — a generic set like Feather Icons (`react-icons/fi`), not the brand-specific Simple Icons set used in Projects.
- Color: monochrome, matching the category label's text color — not `--accent` (same reasoning as the Projects tech icons: purple is reserved for interactive elements).
- Size: roughly 16-18px, sitting inline before the category label text.

### Settings panel (gear icon)
- Same glass treatment as the navbar.
- Contains two Toggle Switches (see below): one for theme (dark/light), one for language (ES/EN).

### Toggle switch (theme & language)
- Track: `rounded-full`, ~72px wide × ~36px tall, base glass treatment (`--glass-fill` + `--border-glass`).
- Thumb: circular, ~28px diameter, sits inside the track, slides between two positions with a 200–250ms transition (consistent with button hover timing in section 7).
- **No external text label** (revised — the sun/moon icon and ES/EN text inside the thumb are sufficient, an outside label like "Dark"/"Light" is redundant):
  - **Theme switch:** the thumb itself displays a sun icon (light mode active) or moon icon (dark mode active), swapping as it slides.
  - **Language switch:** the thumb itself displays the text "ES" or "EN" (matching the currently active language), swapping as it slides — same pattern as the theme switch, not a separate visual language.
- **Thumb color:** always filled with `--accent`, solid and clearly visible, in **both** positions and **both** themes. Neither switch has a true "off"/inactive state — dark/light and ES/EN are both equally valid selections, not an on/off toggle — so the thumb must never become low-contrast or hard to see regardless of which side it's on or which theme is active. (This was a real bug: the language thumb was nearly invisible in light mode when set to EN — must not recur.)
- Accessibility: `role="switch"`, `aria-checked` reflecting state, operable via keyboard (Enter/Space), with the standard focus-visible ring applied to the whole control.

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
| Background blobs | Slow drift | `transform: translate()` oscillating ~±30px on both axes, ~25–30s duration, `ease-in-out`, `infinite alternate` — subtle and slow enough to feel ambient, not distracting. Use `transform`, not `top`/`left`, for GPU-accelerated performance. |

**Reduced motion:** every animation in this table (avatar floating, button/scroll transitions, blob drift) must respect the `prefers-reduced-motion: reduce` media query — when active, disable or drastically shorten these animations rather than ignoring the user's OS-level accessibility preference.

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