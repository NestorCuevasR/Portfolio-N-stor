
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./components/BrandIcons";


export const PERFIL = {
  nombre: "Néstor Cuevas Romero",
  rol: "Full Stack Developer",
  ubicacion: "Barcelona, España",
  bio: "Desarrollador web que cursa la especialización en Inteligencia Artificial y Big Data. Además de crear aplicaciones, desde la interfaz hasta la API, me estoy formando en el desarrollo de modelos de machine learning, agentes de IA y el procesamiento de grandes volúmenes de datos.",};

export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://gitlab.com/cuevasnestor06", icon: GithubIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/n%C3%A9stor-cuevas-536853342/", icon: LinkedinIcon },
  { name: "Email", href: "mailto:cuevasnestor06@gmail.com", icon: Mail },
];

export const SKILLS = {
  Frontend: ["React", "TypeScript", "TailwindCSS", "Next.js", "Astro", "JavaScript"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Python", "REST APIs", "Java"],
  Herramientas: ["Git", "Docker", "Vite", "Figma", "Scikit-learn"],
};

export const PROJECTS = [
  {
    slug: "mutinsight",
    title: "Mutinsight",
    imagen: "/mutinsight.png",
    año: "2025",
    rol: "Desarrollador Full Stack",
    description: "Aplicación web full stack con backend en Python y base de datos PostgreSQL.",
    descripcionLarga:
      "Mutinsight es una aplicación web que junta la visualizacion 3D de mutaciones en proteinas con la IA para ofrecer un analisis completo de las mutaciones. El backend esta desarrollado en Python y utiliza una base de datos PostgreSQL para almacenar la informacion de las mutaciones y proteinas.",
    stack: ["React", "Tailwind", "Python", "PostgreSQL"],
    demo: "http://172.189.58.186/",
    repo: "https://gitlab.com/provencat/dawbio/project/25/g2",
    imagen: "/Mutinsight.png",
  },
  
];