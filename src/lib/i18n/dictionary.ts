interface DictionaryEntry {
  es: string;
  en: string;
}

export const dictionary = {
  // Navigation — CONTENT.md section 1
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.about": { es: "Sobre mí", en: "About" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.skills": { es: "Habilidades", en: "Skills" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero — CONTENT.md section 2
  "hero.title": { es: "Soy Fabián Zamora", en: "I'm Fabián Zamora" },
  "hero.tagline": {
    es: "Estudiante de Ingeniería del Software apasionado por el desarrollo web y la arquitectura de software.",
    en: "Software Engineering student passionate about web development and software architecture.",
  },
  "hero.cta": { es: "Contáctame", en: "Contact me" },

  // About me — CONTENT.md section 3
  "about.paragraph1": {
    es: "Desde niño sentí curiosidad por la tecnología — especialmente por entender cómo funcionan y se construyen los programas y las páginas web. Esa curiosidad es la que me llevó a estudiar Ingeniería del Software.",
    en: "Since I was a kid I've been curious about technology — especially about how programs and websites work and are built. That curiosity is what led me to study Software Engineering.",
  },
  "about.paragraph2": {
    es: "Actualmente estoy aprendiendo por mi cuenta sobre Docker y arquitectura de software, ampliando lo que veo en la universidad.",
    en: "I'm currently learning about Docker and software architecture on my own, building on what I study at university.",
  },
  "about.paragraph3": {
    es: "Dentro del desarrollo, lo que más me apasiona es el diseño frontend y la arquitectura de software. Fuera de la programación, me gusta el deporte y los videojuegos.",
    en: "Within development, what I'm most passionate about is frontend design and software architecture. Outside of programming, I enjoy sports and video games.",
  },

  // Skills — CONTENT.md section 4 (category labels only; item names are proper nouns, not translated)
  "skills.intro": {
    es: "He trabajado con lenguajes y tecnologías como Python, Java y JavaScript, y sigo ampliando mi stack constantemente.",
    en: "I've worked with languages and technologies like Python, Java, and JavaScript, and I keep expanding my stack constantly.",
  },
  "skills.languages": { es: "Lenguajes", en: "Languages" },
  "skills.frontend": { es: "Frontend", en: "Frontend" },
  "skills.backend": { es: "Backend", en: "Backend" },
  "skills.databases": { es: "Bases de datos", en: "Databases" },
  "skills.tools": { es: "Herramientas y otros", en: "Tools & Others" },
  "skills.learning_tag": { es: "en aprendizaje", en: "learning" },

  // Projects — CONTENT.md section 5
  "project.wc26.title": { es: "WC26 Analytics", en: "WC26 Analytics" },
  "project.wc26.description": {
    es: "Aplicación web (SPA) construida en JavaScript vanilla que consume la API pública del Mundial 2026 para generar 5 vistas de analítica: itinerario de un equipo, partidos con mayor diferencia de gol, mejores defensas, asistencia por estadio y matriz de empates por grupo.",
    en: "A vanilla JavaScript single-page application that consumes the FIFA World Cup 2026 public API to generate 5 analytics views: a team's match itinerary, biggest-margin wins, top defenses, stadium attendance, and a group-stage draws matrix.",
  },
  "project.wc26.highlight": {
    es: "El reto técnico principal fue el manejo robusto de errores de red: sesiones expiradas, límite de peticiones con reintento automático y caché offline con localStorage — todo implementado sin frameworks ni librerías externas, solo JavaScript ES6+ y fetch nativo.",
    en: "The main technical challenge was robust error handling: expired sessions, rate limiting with automatic backoff, and offline caching with localStorage — all implemented without frameworks or external libraries, using only vanilla ES6+ JavaScript and native fetch.",
  },
  "project.wc26.cta": { es: "Ver en GitHub", en: "View on GitHub" },

  // Contact — CONTENT.md section 6
  "contact.title": { es: "Contacto", en: "Contact" },
  "contact.email_label": { es: "Correo", en: "Email" },
  "contact.linkedin_label": { es: "LinkedIn", en: "LinkedIn" },
  "contact.github_label": { es: "GitHub", en: "GitHub" },

  // Accessibility-related strings — CONTENT.md section 7
  "a11y.theme_toggle": { es: "Cambiar tema", en: "Toggle theme" },
  "a11y.language_toggle": { es: "Cambiar idioma", en: "Toggle language" },
  "a11y.menu_open": { es: "Abrir menú", en: "Open menu" },
  "a11y.menu_close": { es: "Cerrar menú", en: "Close menu" },

  // Settings panel toggle labels — CONTENT.md section 8
  "settings.theme_dark": { es: "Oscuro", en: "Dark" },
  "settings.theme_light": { es: "Claro", en: "Light" },
} as const satisfies Record<string, DictionaryEntry>;

export type DictionaryKey = keyof typeof dictionary;
