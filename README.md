# Fabián Zamora — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-8B5CF6?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-8B5CF6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-8B5CF6?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-8B5CF6?style=for-the-badge&logo=react&logoColor=white)

A single-page personal portfolio built with Next.js, TypeScript, and Tailwind CSS, following a custom "Liquid Glass" design system — exaggerated glassmorphism with a minimalist, restrained layout.

**Live site:** [fabianz-portfolio.vercel.app](https://fabianz-portfolio.vercel.app/)

---

## Features

- **Bilingual (ES/EN)** — manual i18n system, no external library, with a live language toggle
- **Dark mode by default**, with a functional light mode toggle
- **Liquid Glass design system** — a custom glassmorphism visual identity, documented end-to-end in [`context/DESIGN.md`](context/DESIGN.md)
- **Single-page, smooth-scrolling** navigation with an active-section indicator
- **Accessible by design** — full keyboard navigation, visible focus states, proper accessible names on every interactive element, WCAG AA color contrast (verified against actual rendered pixels, not just theoretical values)
- **Performance-conscious** — lazy-loaded media, reserved layout space to avoid content shifts, optimized fonts and images

## Tech stack

| Category | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Theming | `next-themes` |
| Icons | `react-icons` (Simple Icons + Feather Icons) |
| Linting/Formatting | ESLint (flat config) + Prettier |
| Package manager | npm |

No i18n library, no CMS, no backend — content is sourced from a typed dictionary and static data files, kept in sync with the human-readable [`context/CONTENT.md`](context/CONTENT.md).

## Getting started

```bash
git clone https://github.com/fabwz/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Project architecture

This project is documented as thoroughly as it's built. Three files serve as the living source of truth:

- **[`AGENTS.md`](AGENTS.md)** — project rules, tech stack, architecture, and conventions
- **[`context/DESIGN.md`](context/DESIGN.md)** — the full visual design system (colors, typography, component specs, animations)
- **[`context/CONTENT.md`](context/CONTENT.md)** — all site copy, in both Spanish and English

### Folder structure

```
src/
├── app/                  # Next.js App Router entry, layout, global styles
├── components/
│   ├── ui/               # Small reusable pieces (Button, Card, Badge, ToggleSwitch)
│   ├── layout/            # Navbar, MobileMenu, SettingsPanel, Footer
│   └── sections/          # Hero, About, Projects, Skills, Contact
├── data/                  # Content data files (projects, skills)
├── hooks/                 # Reusable hooks (scroll reveal, active section, cursor tracking)
├── lib/i18n/               # Dictionary, language context, translation hook
└── types/                  # Shared TypeScript types
```