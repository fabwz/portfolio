<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Fabián Zamora Portfolio

> **How this file works:** `create-next-app` auto-generates a managed block at the top of this file (between `<!-- BEGIN:nextjs-agent-rules -->` and `<!-- END:nextjs-agent-rules -->`) pointing agents to Next.js's version-matched bundled docs. Never edit inside that block — Next.js updates it automatically on future upgrades. Everything below it is project-specific and belongs to this project, not to Next.js.
>
> The root `CLAUDE.md` that `create-next-app` also generates is a one-line pointer (`@AGENTS.md`) — leave it as-is. **This file is where all real project instructions live.** There is no separate `.claude/CLAUDE.md` for this project.

Read this file, `context/DESIGN.md`, and `context/CONTENT.md` before implementing anything. These three documents are the single source of truth — never invent a value (color, spacing, copy, structural decision) that isn't covered by them.

---

## 1. Project overview

A single-page personal portfolio for Fabián Zamora, second-year Software Engineering student (Universidad Técnica Nacional, Costa Rica). Built with Next.js + TypeScript + Tailwind CSS, following a "Liquid Glass" visual style (exaggerated glassmorphism + minimalism). Bilingual (ES/EN), with dark mode as default and a functional light mode toggle.

---

## 2. Reference documents

| File | Purpose |
|---|---|
| `context/DESIGN.md` | Visual system: colors, typography, component specs, spacing, animations, responsive rules |
| `context/CONTENT.md` | All site copy, in Spanish and English, keyed for the i18n dictionary |

Any new visual value or piece of text needed during implementation that isn't in these files must **not** be invented — stop and ask Fabián.

---

## 3. Tech stack

- **Language:** TypeScript
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Theming:** `next-themes` (dark/light toggle)
- **i18n:** Manual, no library — typed dictionary + React Context API (no pub/sub, no locale-based routing)
- **Package manager:** npm
- **Linting/Formatting:** ESLint (flat config, `eslint.config.mjs`) + Prettier, with `eslint-config-prettier` and `prettier-plugin-tailwindcss`
- **Testing:** none (intentionally out of scope for this project's size)
- **Environment variables:** none needed (no backend, no contact form)
- **Analytics/tracking:** none — do not add any (Vercel Analytics, Google Analytics, etc.)
- **Deployment target:** not yet decided — do not assume a platform or add platform-specific config

---

## 4. Architecture

- **Component organization by type**, not by feature:
  - `components/ui/` — small reusable pieces (Button, Card, Badge, BackgroundBlobs)
  - `components/layout/` — structural pieces (Navbar, MobileMenu, SettingsPanel, Footer)
  - `components/sections/` — the 5 large page sections (Hero, About, Projects, Skills, Contact)
- **Content/presentation separation:** all real content lives in `data/` (`projects.ts`, `skills.ts`), sourced from `context/CONTENT.md` — never hardcoded inside components
- **i18n:** `lib/i18n/dictionary.ts` (typed dictionary), `LanguageContext.tsx` (Context + Provider), `useTranslation.ts` (the `t(key)` hook, with fallback to Spanish and a console warning if a key is missing)
- **Shared types:** centralized in `types/index.ts` (e.g. `Project`, `SkillCategory`, `Language`)

### Folder structure

```
portfolio/
├── AGENTS.md                        (this file — Next.js managed block + our project rules)
├── CLAUDE.md                        (auto-generated, one line: @AGENTS.md — do not edit)
├── context/
│   ├── DESIGN.md
│   └── CONTENT.md
├── README.md
├── eslint.config.mjs
├── .prettierrc
├── .prettierignore
├── .gitignore
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   └── images/
│       ├── avatar/
│       │   └── hero-avatar.png
│       └── projects/
│           └── wc26/
│               └── wc26-project-demonstration.gif
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── providers.tsx
    │   └── globals.css
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   ├── Badge.tsx
    │   │   └── BackgroundBlobs.tsx
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── MobileMenu.tsx
    │   │   ├── SettingsPanel.tsx
    │   │   └── Footer.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── About.tsx
    │       ├── Projects.tsx
    │       ├── Skills.tsx
    │       └── Contact.tsx
    ├── data/
    │   ├── projects.ts
    │   └── skills.ts
    ├── lib/
    │   └── i18n/
    │       ├── dictionary.ts
    │       ├── LanguageContext.tsx
    │       └── useTranslation.ts
    └── types/
        └── index.ts
```

---

## 5. Site structure

Single page (`src/app/page.tsx`) rendering all 5 sections in order: Hero → About → Projects → Skills → Contact, each as a `<section id="...">`. Navbar uses anchor links (`#hero`, `#about`, etc.) with smooth scroll (`scroll-behavior: smooth`). No separate routes for sections — this is a scroll-based single-page site, not a multi-page one.

---

## 6. Code conventions

| Element | Convention | Example |
|---|---|---|
| Components | `PascalCase.tsx`, filename matches component name | `Navbar.tsx` |
| Hooks | `camelCase.ts`, `use` prefix | `useTranslation.ts` |
| Utilities/data files | `camelCase.ts` | `projects.ts` |
| Folders | lowercase / `kebab-case` | `ui/`, `sections/` |
| Exports | Named exports (`export function X()`), not `default` — except Next.js special files (`page.tsx`, `layout.tsx`) which require it | — |
| Props typing | `interface` with `Props` suffix | `interface ButtonProps { ... }` |
| Path alias | `@/*` from `src/` | `@/components/ui/Button` |

**Language policy:** all code — variable/function/component names, comments, file names, commit messages — is written in **English**, regardless of the site's bilingual ES/EN content. Only user-facing copy (sourced from `context/CONTENT.md`) is bilingual, stored as `{ es: "...", en: "..." }` values inside the dictionary.

---

## 7. Accessibility requirements

- Full keyboard navigation (`Tab`) across all interactive elements.
- Visible focus state on every interactive element, per `DESIGN.md` section 5 ("Focus state"): `:focus-visible` only (not plain `:focus`), `--accent`-colored ring, not the hover style.
- Icon-only buttons (gear icon, hamburger menu) require an `aria-label` — values are in `CONTENT.md` section 7.
- `document.documentElement.lang` must update dynamically (`es-CR` / `en`) when the language changes.
- Use semantic HTML (`<nav>`, `<button>`, `<section>`, etc.) — don't reach for generic `<div>`s with click handlers where a native interactive element applies.

No broader WCAG audit is in scope — this is the confirmed baseline, not a starting point to expand from without asking first.

---

## 8. SEO

Basic metadata is in scope for the MVP: page title, meta description, favicon, Open Graph tags (so the link looks good when shared, e.g. on LinkedIn). Use Next.js's built-in `metadata` export in `layout.tsx`/`page.tsx` — no external SEO library needed.

---

## 9. Scope boundaries (do not expand without asking)

- **No contact form** — contact is via direct links (email, LinkedIn, GitHub) only. Deferred to a future phase.
- **No "Services" section** — explicitly decided against; do not add one.
- **Single project for now** (WC26 Analytics) — do not invent placeholder/example projects to fill space.
- **No analytics/tracking tools.**
- **No environment variables** — if a future task seems to need one, stop and ask first.

---

## 10. Git & version control rules

- Claude Code may run **read-only** git commands only: `git status`, `git diff`, `git log`.
- Claude Code must **never** run write commands: `add`, `commit`, `push`, `merge`, `branch`, `checkout`, `rebase`, or any other command that changes repo state.
- Fabián executes all git actions manually.
- **Branching:** one branch per feature/section (e.g. `feature/navbar`, `feature/hero-section`), merged into `main` manually by Fabián after review. Never work assuming direct commits to `main`.
- **Commit convention:** Conventional Commits, in English, format `<type>(scope): <description>` — e.g. `feat(ui): add navbar liquid glass style`. Claude Code may suggest a commit message in this format when a task is done, but never executes the commit itself.

---

## 11. Dependency policy

Claude Code may install a new npm dependency only when it's clearly justified for the task at hand, and must state that justification when doing so. When in doubt about whether a dependency is warranted, ask first instead of installing.

---

## 12. The golden rule: never assume

If information needed to complete a task is missing or unclear — content not in `CONTENT.md`, a design value not in `DESIGN.md`, a structural or architectural decision not covered in this file — **stop and ask Fabián**. Do not infer, do not fill the gap with a "reasonable" guess, and do not proceed on an assumption. This applies to every part of the project: visual values, copy, architecture, scope, and process.

---

*This file (below the Next.js managed block) is the persistent source of truth for how coding agents should work on this project. If a decision made here needs to change, it must be updated here explicitly — never overridden silently by a one-off prompt.*
