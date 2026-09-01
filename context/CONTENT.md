# CONTENT.md — Fabián Zamora Portfolio

Single source of truth for all copy/content on the site, in Spanish (`es`) and English (`en`). This is the human-readable source that gets translated into the actual i18n dictionary (`lib/i18n/dictionary.ts`) and data files (`data/projects.ts`, `data/skills.ts`) during implementation.

> ✅ All content in this document has been reviewed and approved (contact info, English translations, and the WC26 Analytics project description).

---

## 1. Navigation (navbar links)

| Key | ES | EN |
|---|---|---|
| `nav.home` | Inicio | Home |
| `nav.about` | Sobre mí | About |
| `nav.projects` | Proyectos | Projects |
| `nav.skills` | Habilidades | Skills |
| `nav.contact` | Contacto | Contact |

---

## 2. Hero

| Key | ES | EN |
|---|---|---|
| `hero.title` | Soy Fabián Zamora | I'm Fabián Zamora |
| `hero.tagline` | Estudiante de Ingeniería del Software apasionado por el desarrollo web y la arquitectura de software | Software Engineering student passionate about web development and software architecture |
| `hero.cta` | Contáctame | Contact me |

**Assets:** Hero avatar — static PNG generated with Leonardo.ai (already produced, needs adjustments per earlier conversation).

---

## 3. About me

| Key | ES | EN |
|---|---|---|
| `about.paragraph1` | Desde niño sentí curiosidad por la tecnología — especialmente por entender cómo funcionan y se construyen los programas y las páginas web. Esa curiosidad es la que me llevó a estudiar Ingeniería del Software. | Since I was a kid I've been curious about technology — especially about how programs and websites work and are built. That curiosity is what led me to study Software Engineering. |
| `about.paragraph2` | Actualmente estoy aprendiendo por mi cuenta sobre Docker y arquitectura de software, ampliando lo que veo en la universidad. | I'm currently learning about Docker and software architecture on my own, building on what I study at university. |
| `about.paragraph3` | Dentro del desarrollo, lo que más me apasiona es el diseño frontend y la arquitectura de software. Fuera de la programación, me gusta el deporte y los videojuegos. | Within development, what I'm most passionate about is frontend design and software architecture. Outside of programming, I enjoy sports and video games. |

---

## 4. Skills

| Category key | ES label | EN label |
|---|---|---|
| `skills.languages` | Lenguajes | Languages |
| `skills.frontend` | Frontend | Frontend |
| `skills.backend` | Backend | Backend |
| `skills.databases` | Bases de datos | Databases |
| `skills.tools` | Herramientas y otros | Tools & Others |

| Category | Items |
|---|---|
| Languages | Java, JavaScript, Python, SQL |
| Frontend | HTML, CSS, Tailwind CSS |
| Backend | Flask |
| Databases | PostgreSQL, SQL Server |
| Tools & Others | Git, Docker *(learning / en aprendizaje)* |

Note: technology names are proper nouns and are not translated. Only the "(learning)" tag is bilingual:

| Key | ES | EN |
|---|---|---|
| `skills.learning_tag` | en aprendizaje | learning |

---

## 5. Projects

### Project 1 — WC26 Analytics *(featured / case study)*

| Key | ES | EN |
|---|---|---|
| `project.wc26.title` | WC26 Analytics | WC26 Analytics |
| `project.wc26.description` | Aplicación web (SPA) construida en JavaScript vanilla que consume la API pública del Mundial 2026 para generar 5 vistas de analítica: itinerario de un equipo, partidos con mayor diferencia de gol, mejores defensas, asistencia por estadio y matriz de empates por grupo. | A vanilla JavaScript single-page application that consumes the FIFA World Cup 2026 public API to generate 5 analytics views: a team's match itinerary, biggest-margin wins, top defenses, stadium attendance, and a group-stage draws matrix. |
| `project.wc26.highlight` | El reto técnico principal fue el manejo robusto de errores de red: sesiones expiradas, límite de peticiones con reintento automático y caché offline con localStorage — todo implementado sin frameworks ni librerías externas, solo JavaScript ES6+ y fetch nativo. | The main technical challenge was robust error handling: expired sessions, rate limiting with automatic backoff, and offline caching with localStorage — all implemented without frameworks or external libraries, using only vanilla ES6+ JavaScript and native fetch. |
| `project.wc26.cta` | Ver repositorio | View repository |

- **Stack tags:** JavaScript (Vanilla), Tailwind CSS, Vite, Fetch API
- **Repo:** https://github.com/fabwz/wc26-client-isw521
- **Live demo:** none (local only)
- **Media:** screenshots pending + short GIF/clip recommended per earlier discussion (not yet produced)

---

## 6. Contact

| Key | ES | EN |
|---|---|---|
| `contact.title` | Contacto | Contact |
| `contact.email_label` | Correo | Email |
| `contact.linkedin_label` | LinkedIn | LinkedIn |
| `contact.github_label` | GitHub | GitHub |

- **Email:** `fabianzaar@gmail.com`
- **LinkedIn URL:** `https://www.linkedin.com/in/fabi%C3%A1n-zamora-a-bab25836a/`
- **GitHub profile URL:** `https://github.com/fabwz`

No contact form (deferred to a future phase per earlier decision).

---

## 7. Accessibility-related strings

| Key | ES | EN |
|---|---|---|
| `a11y.theme_toggle` | Cambiar tema | Toggle theme |
| `a11y.language_toggle` | Cambiar idioma | Toggle language |
| `a11y.menu_open` | Abrir menú | Open menu |
| `a11y.menu_close` | Cerrar menú | Close menu |

These are `aria-label` values for icon-only interactive elements (gear icon, hamburger menu) — required since those buttons have no visible text.

---

## 8. Settings panel — toggle switch labels

| Key | ES | EN |
|---|---|---|
| `settings.theme_dark` | Oscuro | Dark |
| `settings.theme_light` | Claro | Light |

Visible state-label text for the theme Toggle Switch (`DESIGN.md` section 5, "Toggle switch"). The language toggle uses the current language code ("ES"/"EN") as its label — not a translated string.

---

*Source of truth for all site copy. Any new text added to the project must be added here first, in both languages, before being implemented in code.*
