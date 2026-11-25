import { Link } from "react-router";
import { ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl border border-[#262B36] bg-[#171A21] p-6 transition-colors hover:border-[#7C9EFF]/50">
      <div className="mb-5 flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C9EFF]/15 to-[#F2B84B]/10">
        {project.imagen ? (
            <img
              src={project.imagen}
              alt={project.title}
              className="h-full max-h-20 max-w-full object-contain"
            />
          ) : (
            <Code2 className="h-7 w-7 text-[#7C9EFF]" />
        )}
      </div>
      <h3
        className="mb-2 text-lg font-semibold text-[#E8E6E3]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[#8A8F98]">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded bg-[#0F1115] px-2 py-1 font-mono text-xs text-[#8A8F98]">
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/proyectos/${project.slug}`}
        className="inline-flex items-center gap-1 text-sm text-[#7C9EFF] hover:underline"
      >
        Ver detalle <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
