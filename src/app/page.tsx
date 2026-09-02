import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
