import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
