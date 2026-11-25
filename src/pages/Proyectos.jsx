import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../data";

export default function Proyectos() {
  return (
    <div className="pt-24">
      <Section id="proyectos" name="Proyectos">
        <h1
          className="mb-8 text-2xl font-bold text-[#E8E6E3]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Todos los proyectos
        </h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
