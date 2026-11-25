
import { Link, useParams } from "react-router";

import { ArrowUpRight, Code2 } from "lucide-react";

import { GithubIcon } from "../components/BrandIcons";

import { Section } from "../components/Section";

import { PROJECTS } from "../data";

export default function ProyectoDetalle() {
  const { slug } = useParams();

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-24">
        <Section id="no-encontrado" name="Proyecto">
          <p className="text-[#8A8F98]">
            No se encontró este proyecto.
          </p>

          <Link
            to="/proyectos"
            className="mt-4 inline-block font-mono text-sm text-[#7C9EFF] hover:underline"
          >
            ← Volver a proyectos
          </Link>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <Section
        id="proyecto"
        name={project.title.replace(/\s+/g, "-")}
      >
        <Link
          to="/proyectos"
          className="mb-8 inline-block font-mono text-sm text-[#7C9EFF] hover:underline"
        >
          ← Volver a proyectos
        </Link>

        <div className="mb-8 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#7C9EFF]/15 to-[#F2B84B]/10">
          {project.imagen ? (
            <img
              src={project.imagen}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <Code2 className="h-10 w-10 text-[#7C9EFF]" />
          )}
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-xs text-[#4B515C]">
          <span>{project.año}</span>
          <span>·</span>
          <span>{project.rol}</span>
        </div>

        <h1
          className="mb-4 text-3xl font-bold text-[#E8E6E3]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h1>

        <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-[#8A8F98]">
          {project.descripcionLarga}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-[#171A21] px-2 py-1 font-mono text-xs text-[#8A8F98]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-[#7C9EFF] px-4 py-2 text-sm font-medium text-[#0F1115] transition-opacity hover:opacity-90"
          >
            Ver demo
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-[#262B36] px-4 py-2 text-sm text-[#E8E6E3] transition-colors hover:border-[#7C9EFF] hover:text-[#7C9EFF]"
          >
            Código
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Section>
    </div>
  );
}

