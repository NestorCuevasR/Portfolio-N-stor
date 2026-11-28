import { useState } from "react";
import { Code2 } from "lucide-react";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

// nombre normalizado -> [slug de Devicon, ¿es un icono oscuro que hay que aclarar?]
const ICONS = {
  react: ["react"],
  nodejs: ["nodejs"],
  node: ["nodejs"],
  tailwind: ["tailwindcss"],
  tailwindcss: ["tailwindcss"],
  javascript: ["javascript"],
  js: ["javascript"],
  typescript: ["typescript"],
  ts: ["typescript"],
  python: ["python"],
  html: ["html5"],
  html5: ["html5"],
  css: ["css3"],
  css3: ["css3"],
  express: ["express", true],
  mongodb: ["mongodb"],
  postgresql: ["postgresql"],
  postgres: ["postgresql"],
  mysql: ["mysql"],
  sql: ["mysql"],
  sqlite: ["sqlite"],
  git: ["git"],
  github: ["github", true],
  docker: ["docker"],
  linux: ["linux"],
  figma: ["figma"],
  vite: ["vitejs"],
  nextjs: ["nextjs", true],
  vue: ["vuejs"],
  vuejs: ["vuejs"],
  tensorflow: ["tensorflow"],
  pytorch: ["pytorch"],
  keras: ["keras"],
  pandas: ["pandas", true],
  numpy: ["numpy"],
  scikitlearn: ["scikitlearn"],
  sklearn: ["scikitlearn"],
  jupyter: ["jupyter"],
  spark: ["apachespark"],
  apachespark: ["apachespark"],
  pyspark: ["apachespark"],
  hadoop: ["hadoop"],
  kafka: ["apachekafka", true],
  fastapi: ["fastapi"],
  flask: ["flask", true],
  opencv: ["opencv"],
  java: ["java"],
  postman: ["postman"],
  redux: ["redux"],
  prisma: ["prisma", true],
};

const normalize = (name) => name.toLowerCase().replace(/[\s.\-_]/g, "");

function SkillIcon({ name }) {
  const [failed, setFailed] = useState(false);
  const entry = ICONS[normalize(name)];

  if (!entry || failed) {
    return <Code2 aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-[#8D93A3]" />;
  }

  const [slug, isDark] = entry;
  return (
    <img
      src={`${BASE}/${slug}/${slug}-original.svg`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-[18px] w-[18px] shrink-0 transition-transform duration-200 group-hover:scale-110 ${
        isDark ? "invert" : ""
      }`}
    />
  );
}

export function SkillTag({ name }) {
  return (
    <span className="group inline-flex cursor-default items-center gap-2.5 rounded-full border-2 border-white/10 bg-white/[0.04] py-2 pl-3 pr-4 text-sm font-semibold text-[#EDEFF5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EDEFF5] hover:bg-white/[0.08] hover:shadow-[4px_4px_0_#3B3BF0]">
      <SkillIcon name={name} />
      {name}
    </span>
  );
}