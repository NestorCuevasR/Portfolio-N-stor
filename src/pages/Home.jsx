import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Circle } from "lucide-react";
import { Section } from "../components/Section";
import { SkillTag } from "../components/SkillTag";
import { ProjectCard } from "../components/ProjectCard";
import { PERFIL, SKILLS, PROJECTS } from "../data";

/*
  Paleta nueva (clara):
  fondo   #F4F5F0   tinta   #1B1F2A   texto suave #5D6470
  línea   #D5D9CF   acento  #3B3BF0   ámbar #FFB86B   verde #2FA866
  Tipografías (cárgalas en tu index.html / CSS):
  "Bricolage Grotesque" (títulos), "Figtree" (texto), "JetBrains Mono" (solo código)
*/

const HEADING = { fontFamily: "'Bricolage Grotesque', sans-serif" };

const CODE_LINES = [
  "const perfil = {",
  `  nombre: "Néstor Cuevas Romero",`,
  `  rol: "${PERFIL.rol}",`,
  "  disponible: true,",
  "};",
];

function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const timer = setTimeout(() => setVisibleLines((n) => n + 1), 220);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <header className="mx-auto grid max-w-5xl gap-14 px-6 pb-20 pt-28 md:grid-cols-2 md:gap-16 md:items-center md:pt-36">
      <div className="min-w-0">
        <img
          src="/FotoCVUltima.png"
          alt="Néstor Cuevas Romero"
          className="mb-6 h-28 w-28 rounded-2xl border-2 border-[#1B1F2A] object-cover"
        />
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1B1F2A]/5 px-3 py-1.5">
          <Circle className="h-2 w-2 fill-[#2FA866] text-[#2FA866]" />
          <span className="text-xs font-medium text-[#f9f9fa]">Disponible para nuevos proyectos</span>
        </div>
        <h1
          className="break-words text-4xl font-extrabold leading-[1.1] tracking-tight text-[#e4e8f1] md:text-[2.6rem] lg:text-5xl"
          style={HEADING}
        >
          Desarrollo web full stack especializándome en IA y big data.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-[#5D6470]">{PERFIL.bio}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/proyectos"
            className="rounded-full bg-[#3B3BF0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B1F2A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B3BF0]"
          >
            Ver proyectos
          </Link>
          <Link
            to="/contacto"
            className="rounded-full border-2 border-[#1B1F2A] px-6 py-3 text-sm font-semibold text-[#1B1F2A] transition-colors hover:bg-[#1B1F2A] hover:text-[#F4F5F0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B3BF0]"
          >
            Contactar
          </Link>
        </div>
      </div>

      <div className="min-w-0 rounded-2xl border-2 border-[#1B1F2A] bg-[#1B1F2A] shadow-[10px_10px_0_#3B3BF0]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A7A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFB86B]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5EDB97]" />
          <span className="ml-3 font-mono text-xs text-[#8D93A3]">perfil.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-[#EDEFF5]">
          {CODE_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i}>
              {line}
              {i === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                <span className="cursor-blink ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-[#FFB86B]" />
              )}
            </div>
          ))}
          {visibleLines >= CODE_LINES.length && (
            <span className="cursor-blink inline-block h-3.5 w-1.5 translate-y-0.5 bg-[#FFB86B]" />
          )}
        </pre>
      </div>
    </header>
  );
}

export default function Home() {
  const destacados = PROJECTS.slice(0, 2);

  return (
    <>
      <Hero />

      <Section id="sobre-mi" name="Sobre-mi">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#f9f9fa]" style={HEADING}>
          {PERFIL.rol}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[#5D6470]">{PERFIL.bio}</p>
        <p className="mt-4 text-sm text-[#5D6470]">{PERFIL.ubicacion}</p>
      </Section>

      <Section id="stack" name="Stack">
        <div className="space-y-6">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="border-t border-[#D5D9CF] pt-4">
              <p className="mb-3 text-sm font-semibold text-[#f9f9fa]">{category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="destacados" name="Proyectos-destacados">
        <div className="grid gap-6 sm:grid-cols-2">
          {destacados.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          to="/proyectos"
          className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-[#3B3BF0] underline decoration-2 underline-offset-4 hover:text-[#1B1F2A]"
        >
          Ver todos los proyectos
        </Link>
      </Section>
    </>
  );
}
